import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: 'My API Key', // defaults to process.env["OPENAI_API_KEY"]
});

export async function chatWithAi() {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',
    });
    console.log(chatCompletion);
}