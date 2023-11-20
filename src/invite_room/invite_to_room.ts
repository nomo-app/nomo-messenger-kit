import axios from "axios";
import { server } from "..";

/**
 * TODO: document here
 */
export async function nomoInviteToRoom(roomId: string, accessToken: string, user_id: string): Promise<boolean> {
    const url = server + `_matrix/client/v3/rooms/${roomId}/invite`;

    const args = {
        user_id: user_id
    };

    try {
        await axios.post(url, args, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        return true;
    } catch (error) {
        console.error('Error inviting user:', error);
        return false;
    }
}
