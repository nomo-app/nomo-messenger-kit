import { UserMatrix, nomoRegister } from "../../src";


function generateRandomString(length: number): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
    }
  
    return result;
  }
  

// the register success test is for checking if the register function returns a UserMatrix
// it fails if the mnemonic is already registered on the server
test("register_success", async () => {
    // use a new mnemonic to test the register_success function properly
    const mnemonic = generateRandomString(200);
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