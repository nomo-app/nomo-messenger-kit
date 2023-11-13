"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nomoLogin = exports.nomoRegister = exports.nomoRegisterOrLogin = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const server = 'https://zeniq.chat/';
const Web3 = require("web3");
const web3 = new Web3();
const bip39 = require('bip39');
const { hdkey } = require('ethereumjs-wallet');
const hdPath = "m/44'/1313819983'/0'/0/0";
function getSignature(username, timestamp, user) {
    return web3.eth.accounts.sign(username.toLowerCase() + '_' + timestamp, user.privateKey);
}
async function nomoRegisterOrLogin(mnemonic) {
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const hdWallet = hdkey.fromMasterSeed(seed);
    const wallet = hdWallet.derivePath(hdPath).getWallet();
    const pk = wallet.getPrivateKey().toString('hex');
    const mainAccount = web3.eth.accounts.privateKeyToAccount(pk);
    const userMatrix = await _register(mainAccount).catch(async () => {
        return await _login(mainAccount);
    });
    return userMatrix;
}
exports.nomoRegisterOrLogin = nomoRegisterOrLogin;
async function nomoRegister(mnemonic) {
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const hdWallet = hdkey.fromMasterSeed(seed);
    const wallet = hdWallet.derivePath(hdPath).getWallet();
    const pk = wallet.getPrivateKey().toString('hex');
    const mainAccount = web3.eth.accounts.privateKeyToAccount(pk);
    return await _register(mainAccount);
}
exports.nomoRegister = nomoRegister;
async function _register(user) {
    const username = user.address;
    const sig = getSignature(username, Date.now(), user);
    const res = await axios_1.default.post(server + '_matrix/client/v3/register', {
        username,
        message: sig.message,
        publickey: user.address,
        password: sig.signature
    });
    console.table(res === null || res === void 0 ? void 0 : res.data);
    return res === null || res === void 0 ? void 0 : res.data;
}
async function nomoLogin(mnemonic) {
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const hdWallet = hdkey.fromMasterSeed(seed);
    const wallet = hdWallet.derivePath(hdPath).getWallet();
    const pk = wallet.getPrivateKey().toString('hex');
    const mainAccount = web3.eth.accounts.privateKeyToAccount(pk);
    return await _login(mainAccount);
}
exports.nomoLogin = nomoLogin;
async function _login(user) {
    const username = user.address;
    const { message, signature } = getSignature(username, Date.now(), user);
    const res = await axios_1.default.post(server + '_matrix/client/v3/login', {
        type: 'm.login.signature',
        username,
        publickey: user.address,
        message,
        signature
    });
    console.table(res === null || res === void 0 ? void 0 : res.data);
    return res === null || res === void 0 ? void 0 : res.data;
}
