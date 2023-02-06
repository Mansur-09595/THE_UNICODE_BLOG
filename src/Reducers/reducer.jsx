const initialState = {
  data_category: [],
  isLoading: false,
  error: null,

  data_posts: [],
  isLoading_posts: false,
  error_posts: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_CATEGORY_START":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "FETCH_DATA_CATEGORY_SUCCESS":
      return {
        ...state,
        data_category: action.payload,
        isLoading: false,
      };
    case "FETCH_DATA_CATEGORY_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
      
    case "FETCH_DATA_POSTS_START":
      return {
        ...state,
        isLoading_posts: true,
        error_posts: null,
      };
    case "FETCH_DATA_POSTS_SUCCESS":
      return {
        ...state,
        data_posts: action.payload,
        isLoading_posts: false,
      };
    case "FETCH_DATA_POSTS_ERROR":
      return {
        ...state,
        isLoading_posts: false,
        error_posts: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
