import { ADD_ITEM } from "../constants/constants";
import { DELETE_ITEM } from "../constants/constants";
import { EDIT_ITEM } from "../constants/constants";

export const addNewItem = (payload) => {
  return { type: ADD_ITEM, payload };
};

export const deleteItem = (id) => {
  return { type: DELETE_ITEM, payload: { id } };
};

export const editItem = (id, title) => {
  return { type: EDIT_ITEM, payload: { id, title } };
};
