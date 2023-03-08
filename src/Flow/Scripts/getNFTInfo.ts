/** @format */

export const getNFTInfo = () => {
  return `
  import Pieces_1 from 0x1ad3c2a8a0bca093

  pub fun main(metadataId: UInt64): Pieces_1.NFTMetadata? {
    return Pieces_1.getNFTMetadata(metadataId)
  }
  `;
};
