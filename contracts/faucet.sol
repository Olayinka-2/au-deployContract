//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.4;

contract Faucet {

  function withdraw(uint _amount) public {
    require(_amount <= 100000000000000000);
    payable(msg.sender).transfer(_amount);
  }

  receive() external payable {}
}