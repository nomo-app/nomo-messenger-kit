import {nomoChat} from "../../src";

test("send message", async () => {
    await nomoChat.sendMessage({content: "foo", room: "bar"});
});
