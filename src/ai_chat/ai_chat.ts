const OpenAI = require('openai').default;
// import inquirer from 'inquirer';

// Configure the OpenAI instance with your API key
const openai = new OpenAI({
    apiKey: '12345678', // Server accepts any string
    baseURL: 'https://b0d6-91-114-27-50.ngrok-free.app/v1' // Custom endpoint
});

export async function nomoChatWithAi() {
    try {
        let continueChat = true;
        while (continueChat) {
            // const answers = await inquirer.prompt([
            //     {
            //         type: 'input',
            //         name: 'userMessage',
            //         message: 'You:',
            //     },
            //     {
            //         type: 'confirm',
            //         name: 'continue',
            //         message: 'Continue the conversation?',
            //         default: true,
            //     },
            // ]);
            // continueChat = answers.continue;

            const response = await openai.chat.completions.create({
                model: 'TheBloke/zephyr-7B-alpha-AWQ', // Custom model
                messages: [{ role: 'user', content: 'answers.userMessage' }]
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
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}