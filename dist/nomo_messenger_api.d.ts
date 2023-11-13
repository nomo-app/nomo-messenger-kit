import { nomoSendMessage } from "./send_message/send_message";
import { nomoRegisterOrLogin } from "./register_login/register_login";
import { nomoListenRoom } from "./listen_room/listen_room";
import { nomoJoinRoom } from "./join_room/join_room";
/**
 * The nomoChat-object exposes messenger-functions in an easy-to-use way.
 * The nomoChat-object can be used with only one import and supports the auto-completion of IDEs.
 */
export declare const nomoChat: {
    sendMessage: typeof nomoSendMessage;
    registerOrLogin: typeof nomoRegisterOrLogin;
    listenRoom: typeof nomoListenRoom;
    joinRoom: typeof nomoJoinRoom;
};
