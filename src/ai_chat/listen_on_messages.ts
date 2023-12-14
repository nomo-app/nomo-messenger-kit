const sdk = require("matrix-js-sdk");

const mnemonic = 'used ensure guitar garlic wasp obscure general cute behind laundry remove jungle';
// @0xd5ed6fec4426378cfb17455b1b9c3f6db53f657a:zeniq.chat
async function main() {
    const index = await import('../../dist/index.js');
    const ai = await import('../../dist/ai_chat/send_message_to_ai.js');
    const nomoRegisterOrLogin = await import('../../dist/register_login/register_login.js');
    const userMatrix = await nomoRegisterOrLogin.nomoRegisterOrLogin(mnemonic);

    const client = sdk.createClient({
        baseUrl: index.server,
        accessToken: userMatrix.access_token,
        userId: userMatrix.user_id,
        deviceId: userMatrix.device_id,
    });

    // await client.initCrypto();

    await client.startClient({
        initialSyncLimit: 10
    });

    client.on("Room.timeline", async function (event, room, toStartOfTimeline) {
        if (toStartOfTimeline) {
            return; // don't print paginated results
        }

        if (event.getType() === "m.room.encrypted") {
            const clearEvent = await client.decryptEventIfNeeded(event)
            if (clearEvent) {
                console.log("(%s) %s :: %s", room.name, clearEvent.getSender(), clearEvent.getContent().body);
            }
        }

        if (event.getType() === "m.room.message") {
            const body = event.getContent().body;
            console.log("%s: %s", event.getSender(), body);

            const response = await ai.nomoSendMessageToAi(body);
            if (response['choices'] && response['choices'].length > 0) {
                const message = response['choices'][0].message;

                if (message && message.content) {
                    const body = JSON.stringify(message.content)
                    const data = {
                        "msgtype": "m.text",
                        "body": body
                    }

                    client.sendMessage(room.roomId, data)
                } else {
                    console.log("No content in the message");
                }
            } else {
                console.log("No choices in the response");
            }
        }
    });

    client.on("RoomMember.membership", function (event, member) {
        if (member.membership === "invite" && member.userId === userMatrix.user_id) {
            client.joinRoom(member.roomId).then(function () {
                console.log("Auto-joined %s", member.roomId);
            });
        }
    });
}

main().catch(console.error);;