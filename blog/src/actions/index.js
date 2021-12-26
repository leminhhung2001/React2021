import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

// Khi sử dụng bất đồng bộ (call api) thì hàm sẽ trả về 'no plain object => crash app'
// => sử dụng redux thunk để làm việc với bất đồng bộ
// Nếu trả về hàm => async (dispatch, getState)
// Nếu trả về object => cho vào reducers
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
};

// GOOD solution!
// Cách 1
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data,
//   });
// });

// GOOD solution!
// Cách 2
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // userIds.forEach((id) => dispatch(fetchUser(id)));

  // Code gọn hơn (thay 2 dòng trên)
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

// ----------------------------END-----------------------------------

// --------------------THINK AGAIN--------------------------------

// BADDDD solution with _.memoize with fetchUser (không giải quyết được vấn đề)
// export const fetchUser = function (id) {
//   return _.memoize(async function (dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({
//       type: "FETCH_USER",
//       payload: response.data,
//     });
//   });
// };

// BADDDD solution with _.memoize with fetchUser (không giải quyết được vấn đề)
// export const fetchUser = _.memoize(function (id) {
//   return async function (dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({
//       type: "FETCH_USER",
//       payload: response.data,
//     });
//   };
// });

// --------------------------------------------------------------
