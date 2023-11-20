import {
    nomoSendMessage,
    nomoRegisterOrLogin,
    UserMatrix,
    SendMessageArgs,
} from "../../../src";
import { generateRandomString } from "../../test_util";

// The test will use the fixed roomId for sending test messages
// The message is not encrypted, so it is plain text
test("send fixed room message", async () => {
    const mnemonic =
        "diet say develop title sibling steel blast table chicken foster fuel giraffe";
    const userMatrix: UserMatrix = await nomoRegisterOrLogin(mnemonic);

    let roomId = '!kGnwe2HnUpcBlLnb:zeniq.chat';
    const contentMap = {
        body: 'Test Message',
        msgtype: "m.text",
    };
    const testMessage: SendMessageArgs = {
        content: contentMap,
        roomId: roomId,
        transationID: generateRandomString(200),
        eventType: "m.room.message",
    };
    let eventId = await nomoSendMessage(testMessage, userMatrix.access_token);
    console.log("eventId", eventId);

    expect(eventId.length).toBeGreaterThan(0);
    expect(eventId.startsWith("$")).toBe(true);
});
