"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nomoChatWithAi = void 0;
const send_message_to_ai_1 = require("./send_message_to_ai");
async function nomoChatWithAi() {
    try {
        const inquirer = (await Promise.resolve().then(() => __importStar(require('inquirer')))).default;
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
                const response = await (0, send_message_to_ai_1.nomoSendMessageToAi)(answers.prompt);
                if (response.choices && response.choices.length > 0) {
                    const message = response.choices[0].message;
                    if (message && message.content) {
                        console.log("Response Message:", message.content);
                    }
                    else {
                        console.log("No content in the message");
                    }
                }
                else {
                    console.log("No choices in the response");
                }
            }
        }
        console.log("See you next time! 😛");
    }
    catch (error) {
        console.error('Error:', error);
        return null;
    }
}
exports.nomoChatWithAi = nomoChatWithAi;
