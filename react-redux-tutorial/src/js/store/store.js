import { createStore, applyMiddleware, compose } from "redux";

import { forbiddenWordsMiddleware } from "../middleware/middleware";

import { rootReducer } from "../reducers/reducers";

// import { addArticle } from "../actions/actions";
// import { uuid } from "uuidv4";
// import thunk from "redux-thunk";

import createSagaMiddleware from "redux-saga";
import sagasAPI from "../sagas/api-saga";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialiseSagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware)
  )
);

// store.subscribe(() => console.log("Look ma, Redux!!"));

// store.dispatch(
//   addArticle({ title: "React Redux Tutorial for Beginners", id: uuid() })
// );

initialiseSagaMiddleware.run(sagasAPI);

export default store;
