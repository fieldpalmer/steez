// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.8.0;

contract SteezCoin {
    // Constructor
    // set the total number of tokens
    // read the total number of tokens
    uint256 public totalSupply;

    function setSupply() public {
        totalSupply = 420000000;
    }
}
