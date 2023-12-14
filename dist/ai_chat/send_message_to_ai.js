"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nomoSendMessageToAi = void 0;
const OpenAI = require('openai').default;
// Configure the OpenAI instance with your API key
const openai = new OpenAI({
    apiKey: '12345678',
    baseURL: 'https://b0d6-91-114-27-50.ngrok-free.app/v1' // Custom endpoint
});
async function nomoSendMessageToAi(prompt) {
    try {
        const response = await openai.chat.completions.create({
            model: 'TheBloke/zephyr-7B-alpha-AWQ',
            messages: [{ role: 'user', content: prompt }]
        });
        return response;
    }
    catch (error) {
        console.error('Error sending message:', error);
        return "";
    }
}
exports.nomoSendMessageToAi = nomoSendMessageToAi;
