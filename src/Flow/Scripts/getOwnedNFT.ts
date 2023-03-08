/** @format */

export const getOwnedNFTs = () => {
  return `
import Pieces_1 from 0x1ad3c2a8a0bca093
import MetadataViews from 0x631e88ae7f1d7c20

pub fun main(user: Address): [AnyStruct] {
  let collection = getAccount(user).getCapability(Pieces_1.CollectionPublicPath)
                      .borrow<&Pieces_1.Collection{MetadataViews.ResolverCollection}>()!
  let answer: [AnyStruct]  = []

  let ids = collection.getIDs()

  for id in ids {
    let resolver = collection.borrowViewResolver(id: id)
    let serialView = resolver.resolveView(Type<MetadataViews.Serial>())! as! MetadataViews.Serial

    answer.append(id)
  }

  return answer
}
`;
};
