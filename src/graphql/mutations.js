/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserRating = /* GraphQL */ `
  mutation CreateUserRating(
    $input: CreateUserRatingInput!
    $condition: ModelUserRatingConditionInput
  ) {
    createUserRating(input: $input, condition: $condition) {
      id
      name
      genre_score
      key_score
      createdAt
      updatedAt
    }
  }
`;
export const updateUserRating = /* GraphQL */ `
  mutation UpdateUserRating(
    $input: UpdateUserRatingInput!
    $condition: ModelUserRatingConditionInput
  ) {
    updateUserRating(input: $input, condition: $condition) {
      id
      name
      genre_score
      key_score
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserRating = /* GraphQL */ `
  mutation DeleteUserRating(
    $input: DeleteUserRatingInput!
    $condition: ModelUserRatingConditionInput
  ) {
    deleteUserRating(input: $input, condition: $condition) {
      id
      name
      genre_score
      key_score
      createdAt
      updatedAt
    }
  }
`;
