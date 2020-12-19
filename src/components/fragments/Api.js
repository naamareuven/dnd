import { gql} from "@apollo/client";
export default MAP_PARTS = gql `
query getImages{
    parts{
      name
      Image{
        url
      }
    }
  }`