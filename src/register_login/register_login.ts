export interface UserMatrix {
    user_id: string,
    home_server: string,
    access_token: string,
    device_id: string,
}

export async function nomoRegisterOrLogin(): Promise<UserMatrix> {
    const user_id = "not implemented";
    const home_server = "not implemented";
    const access_token = "not implemented";
    const device_id = "not implemented";
    return {
        user_id,
        home_server,
        access_token,
        device_id,
    };
}