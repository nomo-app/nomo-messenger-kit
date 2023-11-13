export interface SendMessageArgs {
    room: string;
    content: string;
}

/**
 * TODO: document here
 */
export async function nomoSendMessage(args: SendMessageArgs) {
    throw Error("not implemented");
}
