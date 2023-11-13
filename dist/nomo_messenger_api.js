"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nomoChat = void 0;
const send_message_1 = require("./send_message/send_message");
const register_login_1 = require("./register_login/register_login");
const listen_room_1 = require("./listen_room/listen_room");
const join_room_1 = require("./join_room/join_room");
/**
 * The nomoChat-object exposes messenger-functions in an easy-to-use way.
 * The nomoChat-object can be used with only one import and supports the auto-completion of IDEs.
 */
exports.nomoChat = {
    sendMessage: send_message_1.nomoSendMessage,
    registerOrLogin: register_login_1.nomoRegisterOrLogin,
    listenRoom: listen_room_1.nomoListenRoom,
    joinRoom: join_room_1.nomoJoinRoom,
};
