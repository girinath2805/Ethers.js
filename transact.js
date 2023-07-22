import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.6.4/ethers.min.js";

const provider = new ethers.JsonRpcProvider('YourAPIkeylink');
const address = 'ReceiverAddress';
const privatekey = 'YourPrivateKey';
const transfer = {
    to: address,
    value: ethers.parseEther('0.01')
}

const main = async() => {
    const wallet = new ethers.Wallet(privatekey,provider);

    const tx = await wallet.sendTransaction(transfer);
    const receipt = await tx.wait();
    
    console.log('Transaction success !');
    console.log(`Transaction hash : ${tx.hash}`);
    console.log(`Block Number : ${receipt.blockNumber}`);
    console.log(`Gas Used : ${receipt.gasUsed}`);
    console.log(`Transaction status : ${receipt.status}`);

}

main();
