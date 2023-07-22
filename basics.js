import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.6.4/ethers.min.js";

const provider = new ethers.JsonRpcProvider('YourAPIkeylinkfromInfura');
const address = 'YourAccountAddress';
const transactionHash = 'AnyTransactionHash';


const main = async() => {

    const balance = await provider.getBalance(address);
    const latestblock = await provider.getBlockNumber();
    const transaction = await provider.getTransaction(transactionHash);
    console.log(`Balance of this account --> ${balance}`);
    console.log(`LatestBlock : ${latestblock}`);
    console.log("Transaction Details:", JSON.stringify(transaction, null, 2));//Using JSON stringify to 
                                                                              //get a more structured and
                                                                              //indented JSON output -- easier to read
}

main();
