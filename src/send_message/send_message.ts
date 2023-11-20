import axios from "axios";
import { server } from "..";
export interface SendMessageArgs {
    roomId: string;
    content: Map<string, any>;
    transationID: string;
    eventType: string;
}

/**
 * TODO: document here
 */
export async function nomoSendMessage(args: SendMessageArgs, accessToken: string): Promise<string> {
    let { roomId, content, transationID, eventType } = args;
    const url = server + `_matrix/client/v3/rooms/${roomId}/send/${eventType}/${transationID}`;

    try {
        const response = await axios.put(url, content, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data['event_id'];
    } catch (error) {
        console.error('Error sending message:', error);
        return "";
    }
}
