import { gql} from "@apollo/client";
export default MAP_BACKGROUNDS = gql `
query getBackgrounds{
    backgrounds{
      name
      Image{
        url
      }
    }
  }`
 