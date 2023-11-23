# Nomo Messenger Philosophy

The Nomo Messenger is a special kind of messenger that is not like a regular chat-app.
This document offers a list of goals and non-goals for the Nomo Messenger.
The Nomo team will defend the messenger against feature-requests that would violate those goals.

## Goals

- **Excellent integration with WebOns**: WebOns can send or receive messages to enable advanced use cases.
- **Maximum server privacy**: Through a bombproof end-to-end encryption, the Nomo servers cannot and will not decrypt any messages.
- **Maximum client privacy**: There is no backup, no export and no other feature that could threaten privacy. By design, private keys will be wiped whenever the Nomo App gets uninstalled.
- **Maximum decentralization**: By utilizing the open Matrix-protocol, any company can setup their own servers for the Nomo Messenger.
- **Prevent decryption of old messages**: When recovering your wallet, your contacts and chat-groups can be restored. However, the content of your messages will be impossible to decrypt.
- **Easy sharing of deeplinks**: You can send a deeplink to friends which allows them to download the Nomo App and initiate a decentralized chat. The deeplink will include your unique messenger address.

## Non-Goals

- **Sync with existing contacts**: If you want a messenger to infiltrate your contacts, then please goto other apps like WhatsApp.
- **Link with phone numbers**: Again, goto other messengers like Signal if you need a "phone number verification". Instead of phone numbers, the Nomo App will generate a "messenger address" for every wallet.
- **Seeing old messages after switching phones**: If seeing old messages is more important to you than the e2e-encryption, then please leave Nomo and goto other apps.
- **Cloud sync**: If you want your messages (or the messages of friends) to be uploaded to a service like Dropbox, then please leave Nomo and goto other apps.
- **Longterm storage**: The Nomo servers will store e2e-encrypted messages only temporary. If you want a longterm storage, then please make your own screenshots or goto other apps.
