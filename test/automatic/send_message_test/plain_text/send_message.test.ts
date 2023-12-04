import {
  nomoSendMessage,
  nomoRegisterOrLogin,
  UserMatrix,
  SendMessageArgs,
} from "../../../../src";
import { nomoCreateRoom } from "../../../../src/create_room/create_room";
import { generateRandomString } from "../../../test_util";


// The test will create a new room, send a message to it, and then check if the message was sent.
// The message is not encrypted, so it is plain text
test("send message", async () => {
  const mnemonic =
    "diet say develop title sibling steel blast table chicken foster fuel giraffe";
  const userMatrix: UserMatrix = await nomoRegisterOrLogin(mnemonic);

  // Room Args
  const args = {
    name: generateRandomString(25),
    preset: "private_chat",
    room_alias_name: generateRandomString(10),
  };
  // Room creation
  let roomId = await nomoCreateRoom(args, userMatrix.access_token);
  if (roomId.length == 0) {
    fail("no roomId");
  }

  // Message Args
  const contentMap = {
    body: generateRandomString(25),
    msgtype: "m.text",
  };
  const testMessage: SendMessageArgs = {
    content: contentMap,
    roomId: roomId,
    transationID: generateRandomString(200),
    eventType: "m.room.message",
  };

  // Send message
  let eventId = await nomoSendMessage(testMessage, userMatrix.access_token);
  console.log("eventId", eventId);

  expect(eventId.length).toBeGreaterThan(0);
  expect(eventId.startsWith("$")).toBe(true);
});
