import {
    nomoSendMessage,
    nomoRegisterOrLogin,
    UserMatrix,
    SendMessageArgs,
} from "../../../src";
import { generateRandomString, getCipherText } from "../../test_util";

// The test will use a fixed roomId where the encryption is already set
// Then the plain text is encrypted and sent to the room.
// TODO 
test("send encrypted message fixed room", async () => {
    const mnemonic =
        "diet say develop title sibling steel blast table chicken foster fuel giraffe";
    const userMatrix: UserMatrix = await nomoRegisterOrLogin(mnemonic);

    let roomId = '!hogSLn27JpmCq2NZ:zeniq.chat';
    //TODO ciphertext
    let cipherText = getCipherText('test');

    // message args
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
    // Send message
    let eventId = await nomoSendMessage(testMessage, userMatrix.access_token);
    console.log("eventId", eventId);

    expect(eventId.length).toBeGreaterThan(0);
    expect(eventId.startsWith("$")).toBe(true);
});
