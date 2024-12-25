import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
const GET_BLOGS_INFO = gql`
  query {
    posts {
    author {
      name
      avatar {
        url
      }
    }
    id
    title
    slug
    coverPhoto {
      url
    }
  }
  }
`;


export {GET_BLOGS_INFO}