import {nomoChat} from "../../src";
import {UserMatrix} from "../../src/register_login/register_login";

test("register or login", async () => {
    const userMatrix: UserMatrix = await nomoChat.registerOrLogin();
    expect(userMatrix.user_id).toBe("not implemented");
});
