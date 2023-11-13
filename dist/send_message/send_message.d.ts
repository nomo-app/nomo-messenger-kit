export interface SendMessageArgs {
    room: string;
    content: string;
}
/**
 * TODO: document here
 */
export declare function nomoSendMessage(args: SendMessageArgs): Promise<void>;
