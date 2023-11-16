import {
  nomoSendMessage,
  nomoRegisterOrLogin,
  UserMatrix,
  SendMessageArgs,
} from "../../src";
import { nomoCreateRoom } from "../../src/create_room/create_room";
import { generateRandomString } from "../test_util";

test("send message", async () => {
  const mnemonic =
    "diet say develop title sibling steel blast table chicken foster fuel giraffe";
  const userMatrix: UserMatrix = await nomoRegisterOrLogin(mnemonic);
  const args: Map<string, any> = new Map();
  {
    [
      ["name", generateRandomString(25)],
      ["preset", "private_chat"],
      ["room_alias_name", generateRandomString(10)],
    ];
  }
  let roomId = await nomoCreateRoom(args, userMatrix.access_token);
  if (roomId.length == 0) {
    fail("no roomId");
  }
  const contentMap: Map<string, any> = new Map();
  {
    [
      ["body", generateRandomString(25)],
      ["msgtype", "m.text"],
    ];
  }
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
