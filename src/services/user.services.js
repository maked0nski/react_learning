import {patch} from "../config/urls";

const getAll = () => {
  return fetch(patch.users)
      .then(value => value.json())
};
const getById = (id) => {
  return fetch(`${patch.users}/${id}`)
      .then(value => value.json())
}

export const userService = {
  getAll,
  getById
}