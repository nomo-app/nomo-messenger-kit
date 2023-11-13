"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nomoCreateFilter = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const server = 'https://zeniq.chat/';
async function nomoCreateFilter(accessToken, userID) {
    const url = server + `_matrix/client/v3/user/${userID}/filter`;
    const filterData = {
        'room': {
            'state': {
                'lazy_load_members': true
            }
        }
    };
    try {
        const response = await axios_1.default.post(url, filterData, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        console.log('Filter created:', response.data);
        return response.data;
    }
    catch (error) {
        console.error('Error creating filter:', error);
        return "";
    }
}
exports.nomoCreateFilter = nomoCreateFilter;
