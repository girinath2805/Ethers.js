// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract{

    uint256 public myuint256;

    function setValue(uint256 _number) public{
        myuint256 += _number;
    }

    function getValue() public view returns(uint256){
        return myuint256;
    }

}
