import { nomoRegisterOrLogin, UserMatrix } from "../../../src";

test("register or login", async () => {
    const mnemonic = "diet say develop title sibling steel blast table chicken foster fuel giraffe";
    const userMatrix: UserMatrix = await nomoRegisterOrLogin(mnemonic);
    expect(userMatrix.user_id).toBe("@0xa563B68Ba292601968A4fb63861e9d847126E83E:zeniq.chat".toLowerCase());
});
