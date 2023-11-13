import { UserMatrix, nomoRegister } from "../../src";

// the register success test is for checking if the register function returns a UserMatrix
// it fails if the mnemonic is already registered on the server
test("register_success", async () => {
    // use a new mnemonic to test the register_success function properly
    const mnemonic = "perfect document champion when clinic describe trash fatal nation soda smooth table";
    const userMatrix: UserMatrix = await nomoRegister(mnemonic);
    expect(userMatrix);
});

// the register error test is for checking if the register function fails if the mnemonic is already registered on the server
test("register_error", async () => {
    // mnemonic is registered on the server
    const mnemonic = "save glass east soup remind scrap neglect notable table volume cage praise";

    let didNotThrow = false;
    try {
        await nomoRegister(mnemonic);
        didNotThrow = true;
    } catch (error) {
        expect(error).toBeDefined();
    }

    // Fail the test if the function did not throw
    expect(didNotThrow).toBe(false);
}, 10000);