require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success stone deny oval coach grid arena metal gather'; 
let testAccounts = [
"0x726568df7fd842d98fc6b067bd70a7fb5a3f4a7cac3651803bb38d905a37552f",
"0x1e00ee81bc2485c429af1f0c7d98b29d8fd970cbd498f986ddd0a170473c0773",
"0xd4cfb13dd3c07bc55b6743d624483d04441af02c4002fa733f4b172172239660",
"0x3386d4bfb771e74f5738b3ec6ad8ac2dba22504c24935922087e4ad6f3928a38",
"0xff481915c7860882cb5a7c38909b2bd0c25158fe6293c0e41b2998d69ea1e856",
"0xb837d44716747e44dad22f1a9ebc931f11cbe62b84279351eb604088bdddb418",
"0x4f8cc0d34f8ebb053e9ac244b490af95d414f5ee26adfea17666adc420760c37",
"0x7a94a6589ed2c0328eea70649dba70a0a16f57fa8e16240b7baedc856d3c3db7",
"0xef89c0e6beccaec970e8bfdb5dac38a98e685d62189ed1b3f0f9812f21499e33",
"0xa80fcf2927bbd7401cc157581fb7e452974b33a7b023a4fe4a6b80dbba409cf1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

