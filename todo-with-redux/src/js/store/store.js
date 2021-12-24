import { createStore, applyMiddleware } from "redux";
import { v4 as uuidv4 } from "uuid";
import { rootReducer } from "../reducers/reducers";
import { forbiddenWordsMiddleware } from "../middleware/middleware";
import { addNewItem } from "../actions/actions";

const store = createStore(
  rootReducer,
  applyMiddleware(forbiddenWordsMiddleware)
);

store.subscribe(() => console.log("Look ma, Redux!!"));

store.dispatch(addNewItem({ title: "React Redux", id: uuidv4() }));

export default store;
