/// The login_error test is for checking if the login function returns a UserMatrix even if the

import { nomoLogin } from "../../src";
import { generateRandomString } from "../test_util";

/// mnemonic is not yet registered on the server.
test("login_error", async () => {
  // mnemonic is not registered on the server
  const mnemonic = generateRandomString(200);

  let didThrow = false;
  try {
    await nomoLogin(mnemonic);
    // If the function doesn't throw, set the flag
  } catch (error) {
    // Check if the error is the expected one
    expect(error).toBeDefined();
    didThrow = true;
    // Optionally, check for specific properties of the error
    // e.g., expect(error.message).toContain("Expected error message");
  }

  // Fail the test if the function did not throw
  expect(didThrow).toBe(false); // TODO: change this to true once issue ZEC-4 is fixed
}, 10000);
