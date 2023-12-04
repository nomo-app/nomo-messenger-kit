import { nomoJoinRoom, nomoRegisterOrLogin, UserMatrix } from "../../../src";
import { nomoCreateRoom } from "../../../src/create_room/create_room";
import { generateRandomString } from "../../test_util";

test("create encrypted room", async () => {
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
    console.log("roomId", roomId);

    expect(roomId.length).toBeGreaterThan(0);
    expect(roomId.startsWith("!")).toBe(true);
    expect(roomId.endsWith(":zeniq.chat")).toBe(true);
});
