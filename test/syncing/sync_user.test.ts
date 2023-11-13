import { nomoRegisterOrLogin, nomoSyncUser, UserMatrix, nomoCreateFilter } from "../../src";

test("sync user", async () => {
    const mnemonic = "diet say develop title sibling steel blast table chicken foster fuel giraffe";
    const userMatrix: UserMatrix = await nomoRegisterOrLogin(mnemonic);
    const filterID: string = await nomoCreateFilter(userMatrix.access_token, userMatrix.user_id);
    await nomoSyncUser(userMatrix.access_token, "", filterID, "online", false);
    expect(userMatrix.user_id).toBe("@0x3f0e8cF0c6eb9789348541D9D0Ce4ac847277e9B:zeniq.chat");
}, 10000);