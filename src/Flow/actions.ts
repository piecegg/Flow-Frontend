/** @format */
//@ts-ignore
import * as fcl from "@onflow/fcl";
import "./config";

// ///////////////
// // Cadence code
// ///////////////

import { getOwnedNFTs as getOwnedNFTsScript } from "./Scripts/getOwnedNFT";
import { getNFTInfo as getNFTInfoScript } from "./Scripts/getNFTInfo";
import { getCollectionMetadatas as getCollectionMetadatasScript } from "./Scripts/getCollectionMetadatas";

//
// // ****** Script Functions ****** //
//

// Get list of Collection's Metadatas.
export const getNFTMetadatas = async () => {
  try {
    const response = await fcl.query({
      cadence: getCollectionMetadatasScript(),
      args: (arg: any, t: any) => [],
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// Get list of owned NFTs.
export const getOwnedNFTs = async (userAddress: string) => {
  try {
    const response = await fcl.query({
      cadence: getOwnedNFTsScript(),
      args: (arg: any, t: any) => [arg(userAddress, t.Address)],
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// Get one NFT Info.
export const getNFTInfo = async (metadataId: string) => {
  try {
    const response = await fcl.query({
      cadence: getNFTInfoScript(),
      args: (arg: any, t: any) => [arg(metadataId, t.UInt64)],
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
};
