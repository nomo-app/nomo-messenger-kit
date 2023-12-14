const OpenAI = require('openai').default;

// Configure the OpenAI instance with your API key
const openai = new OpenAI({
    apiKey: '12345678', // Server accepts any string
    baseURL: 'https://b0d6-91-114-27-50.ngrok-free.app/v1' // Custom endpoint
});

async function nomoChatWithAi() {
    try {
        const inquirer = (await import('inquirer')).default;
        console.log("Welcome to Nomo Chat with the Nomo Assistant! 🤖");
        console.log("Tell me your question and I'll try to answer it. ✅");
        console.log("Type 'exit' to exit. ❌");
        let continueChat = true;
        while (continueChat) {
            const answers = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'prompt',
                    message: 'You:',
                },
            ]);
            continueChat = answers.prompt != 'exit';
            if (continueChat) {
                const response = await openai.chat.completions.create({
                    model: 'TheBloke/zephyr-7B-alpha-AWQ', // Custom model
                    messages: [{ role: 'user', content: answers.prompt }]
                });

                if (response.choices && response.choices.length > 0) {
                    const message = response.choices[0].message;

                    if (message && message.content) {
                        console.log("Response Message:", message.content);
                    } else {
                        console.log("No content in the message");
                    }
                } else {
                    console.log("No choices in the response");
                }
            }
        }
        console.log("See you next time! 😛");
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

nomoChatWithAi();