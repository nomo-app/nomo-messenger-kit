import {
    nomoSendMessage,
    nomoRegisterOrLogin,
    UserMatrix,
    SendMessageArgs,
    server,
} from "../../../../src";
import { nomoCreateRoom } from "../../../../src/create_room/create_room";
import { generateRandomString, getCipherText } from "../../../test_util";

// const Olm = require('@matrix-org/olm');

// import matrix from 'matrix-js-sdk';

// The test will create a new room with an initial state which declares the encryption for the room.
// Then the plain text is encrypted and sent to the room.
// TODO 
test("send encrypted message", async () => {
    // with sdk
    // await Olm.init();
    // const mnemonic =
    //     "diet say develop title sibling steel blast table chicken foster fuel giraffe";
    // const userMatrix: UserMatrix = await nomoRegisterOrLogin(mnemonic);
    // let clientData: matrix.ICreateClientOpts = {
    //     baseUrl: server,
    //     accessToken: userMatrix.access_token,
    //     userId: userMatrix.user_id,
    // };

    // const client = matrix.createClient(clientData);
    // await client.initCrypto();
    // await client.startClient();

    // let roomId: any = await client.createRoom({
    //     invite: ["@example:matrix.org"],
    //     is_direct: true,
    //     initial_state: [{
    //         type: "m.room.encryption",
    //         state_key: "",
    //         content: {
    //             algorithm: "m.megolm.v1.aes-sha2"
    //         }
    //     }]
    // });
    // console.log("roomId", roomId);

    // let eventId: any = await client.sendEvent(roomId, "m.room.message", {
    //     body: "Hello, this is an encrypted message!",
    //     msgtype: "m.text"
    // });
    // console.log("eventId", eventId);

    // without sdk
    const mnemonic =
        "diet say develop title sibling steel blast table chicken foster fuel giraffe";
    const userMatrix: UserMatrix = await nomoRegisterOrLogin(mnemonic);
    const args = {
        name: generateRandomString(25),
        preset: "private_chat",
        room_alias_name: generateRandomString(10),
        initial_state: [{
            type: "m.room.encryption",
            state_key: "",
            content: {
                algorithm: "m.olm.v1.curve25519-aes-sha2"
            }
        }]
    };
    let roomId = await nomoCreateRoom(args, userMatrix.access_token);
    if (roomId.length == 0) {
        fail("no roomId");
    }
    //TODO ciphertext
    let cipherText = getCipherText('test');
    const contentMap = {
        algorithm: "m.olm.v1.curve25519-aes-sha2",
        ciphertext: cipherText
    };
    const testMessage: SendMessageArgs = {
        content: contentMap,
        roomId: roomId,
        transationID: generateRandomString(200),
        eventType: "m.room.encrypted",
    };
    let eventId = await nomoSendMessage(testMessage, userMatrix.access_token);
    console.log("eventId", eventId);

    expect(eventId.length).toBeGreaterThan(0);
    expect(eventId.startsWith("$")).toBe(true);
});
