import axios from "axios";
import { server } from "..";

export async function nomoCreateFilter(accessToken: string, userID:string): Promise<string> {
    const url = server + `_matrix/client/v3/user/${userID}/filter`;
    const filterData = {
        'room': {
            'state': {
                'lazy_load_members': true
            }
        }
    };

    try {
        const response = await axios.post(url, filterData, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Filter created:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating filter:', error);
        return "";
    }
}