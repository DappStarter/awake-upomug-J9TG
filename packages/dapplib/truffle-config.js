require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gesture roast food ski struggle return sad push grunt light army gate'; 
let testAccounts = [
"0x46048919a07d9304ca94dc6bc7ec1ce1e00edec3ffb352922548fbc2ee74f8fe",
"0x46b672a9af164d1213dac9367c472d76930329d8374409bd68838f0e34a84817",
"0xa28bf854c563f841cbdcd8a773753f050625953c9f9d692a2846c8902a83970e",
"0x487f0615c556c654389df69f027d3c836726dbbfbf0533fd9e117dc25e2fbff8",
"0x70e51d5747a8b77affdad70779f6d5c35e834dc34f5c9f8558fcc00bb22c301a",
"0xed293c4846d3e0871cf8b098092fe83c012b8e560efa535441cc0a5b925a4a87",
"0x67293303fd5d8f49414e661a3e3a9fa3526cf11b49db89b831dc7290cfcc2af5",
"0x562b31909e17ecc844c6f60515c12f7a50170af4626be4512f66d3f58fdf6682",
"0xcfac6914b6d0f9994cabcb1b38ee737b559158c7eabaeae9aed6b1890900ad8f",
"0x16f12462d37f90b1b0e4a7242482fa3d1c220681003b49e78c03fbe722aa1c8e"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


