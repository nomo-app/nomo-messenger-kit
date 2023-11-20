import axios from "axios";
import { server } from "..";

/**
 * TODO: document here
 */
export async function nomoCreateRoom(args: any, accessToken: string): Promise<string> {
    const url = server + `_matrix/client/v3/createRoom`;

    try {
        const response = await axios.post(url, args, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data['room_id'];
    } catch (error) {
        console.error('Error sending message:', error);
        return "";
    }
}
