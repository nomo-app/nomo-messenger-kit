import {nomoSendMessage} from "../../src";

test("send message", async () => {
    await nomoSendMessage({content: "foo", room: "bar"});
});
