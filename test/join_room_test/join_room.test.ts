import { nomoRegisterOrLogin, UserMatrix, nomoJoinRoom } from "../../src";
import { nomoCreateRoom } from "../../src/create_room/create_room";
import { generateRandomString } from "../test_util";

test("join room", async () => {
    // User 1 logs in
    const mnemonic1 = "diet say develop title sibling steel blast table chicken foster fuel giraffe";
    const userMatrix1: UserMatrix = await nomoRegisterOrLogin(mnemonic1);

    // User 2 logs in
    const mnemonic2 = generateRandomString(200);
    const userMatrix2: UserMatrix = await nomoRegisterOrLogin(mnemonic2);

    // User 1 creates Room and invites User 2
    const args = {
        name: generateRandomString(25),
        preset: "trusted_private_chat",
        invite: [userMatrix2.user_id],
        isDirect: true,
        room_alias_name: generateRandomString(10),
    };

    let roomId = await nomoCreateRoom(args, userMatrix1.access_token);
    console.log(roomId);
    if (roomId.length == 0) {
        fail("no roomId");
    }

    // User 2 joins Room
    let roomId2 = await nomoJoinRoom(roomId, userMatrix2.access_token);
    if (roomId2.length == 0) {
        fail("no roomId");
    }
    if (roomId != roomId2) {
        fail("roomId mismatch");
    }
});
