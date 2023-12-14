const OpenAI = require('openai').default;

// Configure the OpenAI instance with your API key
const openai = new OpenAI({
    apiKey: '12345678', // Server accepts any string
    baseURL: 'https://b0d6-91-114-27-50.ngrok-free.app/v1' // Custom endpoint
});

export async function nomoSendMessageToAi(prompt: string): Promise<any> {
    try {
        const response = await openai.chat.completions.create({
            model: 'TheBloke/zephyr-7B-alpha-AWQ', // Custom model
            messages: [{ role: 'user', content: prompt }]
        });
        return response as any;
    } catch (error) {
        console.error('Error sending message:', error);
        return "";
    }
}