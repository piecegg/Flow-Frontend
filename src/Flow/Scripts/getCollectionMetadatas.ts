/** @format */

export const getCollectionMetadatas = () => {
  return `
  import Pieces_1 from 0x1ad3c2a8a0bca093

  pub fun main(): {UInt64: Pieces_1.NFTMetadata} {
    return Pieces_1.getNFTMetadatas()
  }
  `;
};
