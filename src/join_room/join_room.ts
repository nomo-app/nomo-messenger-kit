import axios from "axios";
import { server } from "..";

/**
 * TODO: document here
 */
export async function nomoJoinRoom(roomId: string, accessToken: string): Promise<string> {
    const url = server + `_matrix/client/v3/rooms/${roomId}/join`;

    const args: Map<string, any> = new Map;

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
