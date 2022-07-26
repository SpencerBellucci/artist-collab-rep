/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserRating = /* GraphQL */ `
  query GetUserRating($id: ID!) {
    getUserRating(id: $id) {
      id
      name
      genre_score
      key_score
      createdAt
      updatedAt
    }
  }
`;
export const listUserRatings = /* GraphQL */ `
  query ListUserRatings(
    $filter: ModelUserRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        genre_score
        key_score
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
