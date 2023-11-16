import { nomoRegisterOrLogin, UserMatrix, } from "../../src";
import { nomoCreateRoom } from "../../src/create_room/create_room";
import { generateRandomString } from "../test_util";

test("create room", async () => {
    const mnemonic = "diet say develop title sibling steel blast table chicken foster fuel giraffe";
    const userMatrix: UserMatrix = await nomoRegisterOrLogin(mnemonic);
    const args: Map<string, any> = new Map
    {
        [
            ['name', generateRandomString(25)],
            ["preset", "private_chat",],
            ['room_alias_name', generateRandomString(10)]
        ]
    };
    let roomId = await nomoCreateRoom(args, userMatrix.access_token);
    console.log(roomId);
    if (roomId.length == 0) {
        fail("no roomId");
    }
});
