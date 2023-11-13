import axios from "axios";

const server = 'https://zeniq.chat/';
const Web3 = require("web3");
const web3 = new Web3();
const bip39 = require('bip39');
const { hdkey } = require('ethereumjs-wallet');

const hdPath = "m/44'/1313819983'/0'/0/0";

export interface UserMatrix {
    user_id: string,
    home_server: string,
    access_token: string,
    device_id: string,
}

function getSignature(username: string, timestamp: number, user: any) {
    return web3.eth.accounts.sign(username.toLowerCase() + '_' + timestamp, user.privateKey);
}

export async function nomoRegisterOrLogin(mnemonic: string,): Promise<UserMatrix> {
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const hdWallet = hdkey.fromMasterSeed(seed);

    const wallet = hdWallet.derivePath(hdPath).getWallet();
    const pk = wallet.getPrivateKey().toString('hex');
    const mainAccount = web3.eth.accounts.privateKeyToAccount(pk);

    const userMatrix = await _register(mainAccount).catch(async () => {
        return await _login(mainAccount);
    });

    return userMatrix
}

export async function nomoRegister(mnemonic: string): Promise<UserMatrix> {
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const hdWallet = hdkey.fromMasterSeed(seed);

    const wallet = hdWallet.derivePath(hdPath).getWallet();
    const pk = wallet.getPrivateKey().toString('hex');
    const mainAccount = web3.eth.accounts.privateKeyToAccount(pk);
    return await _register(mainAccount);
}

async function _register(user: any): Promise<UserMatrix> {
    const username = user.address;
    const sig = getSignature(username, Date.now(), user);
    const res = await axios.post(server + '_matrix/client/v3/register', {
        username,
        message: sig.message,
        publickey: user.address,
        password: sig.signature
    });
    console.table(res?.data);
    return res?.data
}

export async function nomoLogin(mnemonic: string): Promise<UserMatrix> {
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const hdWallet = hdkey.fromMasterSeed(seed);

    const wallet = hdWallet.derivePath(hdPath).getWallet();
    const pk = wallet.getPrivateKey().toString('hex');
    const mainAccount = web3.eth.accounts.privateKeyToAccount(pk);
    return await _login(mainAccount);
}

async function _login(user: any): Promise<UserMatrix> {
    const username = user.address;
    const { message, signature } = getSignature(username, Date.now(), user);
    const res = await axios.post(server + '_matrix/client/v3/login', {
        type: 'm.login.signature',
        username,
        publickey: user.address,
        message,
        signature
    });
    console.table(res?.data);
    return res?.data;
}