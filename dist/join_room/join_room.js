"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nomoJoinRoom = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const __1 = require("..");
/**
 * TODO: document here
 */
async function nomoJoinRoom(roomId, accessToken) {
    const url = __1.server + `_matrix/client/v3/rooms/${roomId}/join`;
    const args = {};
    try {
        const response = await axios_1.default.post(url, args, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data['room_id'];
    }
    catch (error) {
        console.error('Error sending message:', error);
        return "";
    }
}
exports.nomoJoinRoom = nomoJoinRoom;
