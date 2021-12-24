import { ADD_ITEM } from "../constants/constants";
import { FOUND_BAD_WORD } from "../constants/constants";
import { INVALID_TITLE } from "../constants/constants";

const forbiddenWords = ["spam", "money"];

export const forbiddenWordsMiddleware = ({ dispatch }) => {
  return function (next) {
    return function (action) {
      if (action.type === ADD_ITEM) {
        const wordFound = forbiddenWords.filter((word) =>
          action.payload.title.includes(word)
        );
        if (wordFound.length) {
          return dispatch({ type: FOUND_BAD_WORD });
        }
        if (action.payload.title.trim() === "") {
          return dispatch({ type: INVALID_TITLE });
        }
      }
      return next(action);
    };
  };
};
