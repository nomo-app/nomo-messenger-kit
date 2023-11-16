import axios from "axios";
const server = 'https://zeniq.chat/';

/**
 * TODO: document here
 */
export async function nomoCreateRoom(args: Map<string, any>, accessToken: string): Promise<string> {
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
