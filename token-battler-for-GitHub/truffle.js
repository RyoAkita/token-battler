var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = your metamask Key;
var accessToken = your Infura Key;


module.exports = {
networks:{
  development:{
    host: "localhost",
    port: 8545,
  network_id:"10"
  },
ropsten:{
  provider: function(){
  return new HDWalletProvider(
    mnemonic,
    "https://ropsten.infura.io/" + accessToken
  );
},
  network_id: 3,
  gas: 4700000
  }
 }
};
