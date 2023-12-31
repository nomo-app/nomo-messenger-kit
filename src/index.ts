// here are the publicly exported functions
const server = 'https://zeniq.chat/';
export { server }

export { nomoRegisterOrLogin, UserMatrix, nomoLogin, nomoRegister } from "./register_login/register_login"
export { nomoListenRoom } from "./listen_room/listen_room"
export { nomoJoinRoom } from "./join_room/join_room"
export { nomoSendMessage, SendMessageArgs } from "./send_message/send_message"
export { nomoSyncUser } from "./syncing/sync_user"
export { nomoCreateFilter } from "./syncing/create_filter"
export { nomoChatWithAi } from "./ai_chat/ai_chat"
export { nomoAssistantListenOnMessages } from "./ai_chat/listen_on_messages"