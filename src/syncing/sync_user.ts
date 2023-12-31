import axios from "axios";
import { server } from "..";

export async function nomoSyncUser(accessToken: string, since: string, filter: string, setPresence: string, fullState: boolean) {
    // Dart Request URL https://zeniq.chat/_matrix/client/v3/sync?
    const res = await axios.get(server + '_matrix/client/v3/sync', {
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
