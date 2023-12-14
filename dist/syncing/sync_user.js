"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nomoSyncUser = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const __1 = require("..");
async function nomoSyncUser(accessToken, since, filter, setPresence, fullState) {
    // Dart Request URL https://zeniq.chat/_matrix/client/v3/sync?
    const res = await axios_1.default.get(__1.server + '_matrix/client/v3/sync', {
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        },
        params: {
        // 'filter': filter, // The sync filter to use
        // 'since': since, // Pass the 'since' token from the previous sync or initial login
        // 'set_presence': setPresence, // Controls the presence state of the client
        // 'timeout': 1000, // The maximum time to wait, in milliseconds
        // 'full_state': true, // Whether to include full state or not
        }
    });
    return res;
}
exports.nomoSyncUser = nomoSyncUser;
