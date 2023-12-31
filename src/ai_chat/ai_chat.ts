import { nomoSendMessageToAi } from './send_message_to_ai';

export async function nomoChatWithAi() {
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
                const response = await nomoSendMessageToAi(answers.prompt);

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