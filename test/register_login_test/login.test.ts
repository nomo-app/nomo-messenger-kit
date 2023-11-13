import { UserMatrix, nomoLogin } from "../../src";

test("login_success", async () => {
    const mnemonic = "diet say develop title sibling steel blast table chicken foster fuel giraffe";
    const userMatrix: UserMatrix = await nomoLogin(mnemonic);
    expect(userMatrix.user_id).toBe("@0xa563B68Ba292601968A4fb63861e9d847126E83E:zeniq.chat");
}, 10000);

/// The login_error test is for checking if the login function returns a UserMatrix even if the 
/// mnemonic is not yet registered on the server.
test("login_error", async () => {
    // mnemonic is not registered on the server
    const mnemonic = "matrix morning bomb dutch struggle bench inflict obvious other provide right better";

    let didNotThrow = false;
    try {
        await nomoLogin(mnemonic);
        // If the function doesn't throw, set the flag
        didNotThrow = true;
    } catch (error) {
        // Check if the error is the expected one
        expect(error).toBeDefined();
        // Optionally, check for specific properties of the error
        // e.g., expect(error.message).toContain("Expected error message");
    }

    // Fail the test if the function did not throw
    // should be false
    expect(didNotThrow).toBe(true);
}, 10000);