"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nomoSendMessage = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const server = 'https://zeniq.chat/';
/**
 * TODO: document here
 */
async function nomoSendMessage(args, accessToken) {
    let { roomId, content, transationID, eventType } = args;
    const url = server + `_matrix/client/v3/rooms/${roomId}/send/${eventType}/${transationID}`;
    try {
        const response = await axios_1.default.put(url, content, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data['event_id'];
    }
    catch (error) {
        console.error('Error sending message:', error);
        return "";
    }
}
exports.nomoSendMessage = nomoSendMessage;
