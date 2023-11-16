import axios from "axios";

const server = 'https://zeniq.chat/';

export async function nomoSyncUser(accessToken: string, since: string, filter: string, setPresence: string, fullState: boolean) {
    const res = await axios.get(server + '_matrix/client/v3/sync', {
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        },
        params: {
            // If the access_token is required as a query parameter
            // 'access_token': accessToken,
            // 'filter': filter, // The sync filter to use
            // 'since': since, // Pass the 'since' token from the previous sync or initial login
            // 'set_presence': setPresence, // Controls the presence state of the client
            // 'timeout': 1000, // The maximum time to wait, in milliseconds
            'full_state': true, // Whether to include full state or not
        }
    });
    return res;
}
