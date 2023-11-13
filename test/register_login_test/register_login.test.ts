import {nomoRegisterOrLogin, UserMatrix} from "../../src";

test("register or login", async () => {
    const userMatrix: UserMatrix = await nomoRegisterOrLogin();
    expect(userMatrix.user_id).toBe("not implemented");
});
