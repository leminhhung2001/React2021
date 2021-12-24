import jsonPlaceholder from "../apis/jsonPlaceholder";

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
