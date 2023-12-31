// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

/**
 * @title TicketHobe Dummy Ticket NFT Contract
 * @author dibakarsutradhar
 * @notice This is a demo contract just for the hackathon, don't use it for production, not a complete contract
 */

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TicketNFT is ERC721URIStorage {
    uint256 private _tokenIds;
    address contractAddress;

    constructor(address marketplaceAddress) ERC721("TicketHobe Dummy", "THD") {
        contractAddress = marketplaceAddress;
    }

    function createToken(string memory tokenURI) public returns (uint256) {
        _tokenIds += 1;
        uint256 newItemId = _tokenIds;

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        setApprovalForAll(contractAddress, true);
        return newItemId;
    }
}
