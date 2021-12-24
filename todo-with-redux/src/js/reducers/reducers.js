import { ADD_ITEM } from "../constants/constants";
import { DELETE_ITEM } from "../constants/constants";
import { EDIT_ITEM } from "../constants/constants";

const initialState = {
  items: [],
};

export const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_ITEM) {
    return Object.assign({}, state, {
      items: state.items.concat(action.payload),
    });
  }
  if (action.type === DELETE_ITEM) {
    return Object.assign(
      {},
      {
        items: state.items.filter((item) => item.id !== action.payload.id),
      }
    );
  }

  if (action.type === EDIT_ITEM) {
    return Object.assign({}, state, {
      items: state.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            item: action.payload.title,
          };
        }
        return item;
      }),
    });
  }

  return state;
};
