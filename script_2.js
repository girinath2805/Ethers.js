import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.6.4/ethers.min.js";

const provider = new ethers.JsonRpcProvider('YourAPIkeylink');
const address = 'ContractAddress';
const privatekey = 'YourPrivateKey';

const ABI = ["function setValue(uint256 _number) public",
             "function getValue() public view returns(uint256)"];


const main = async() => {
    const wallet = new ethers.Wallet(privatekey,provider);
    const contract = new ethers.Contract(address,ABI,wallet);

    const tx = await contract.setValue(15);
    const receipt = await tx.wait();
    
    console.log('Transaction mined !');
    console.log(`Transaction hash : ${tx.hash}`);
    console.log(`Block Number : ${receipt.blockNumber}`);
    console.log(`Gas Used : ${receipt.gasUsed}`);
    console.log(`Transaction status : ${receipt.status}`);
    
    const read = await contract.getValue();
    console.log(`value = ${read}`);

}

main();
