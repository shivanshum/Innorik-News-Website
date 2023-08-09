import { GET_NEWS_FAILURE, GET_NEWS_REQ, GET_NEWS_SUCCESS, NOT_GET_NEWS } from "./Actiontypes";
  
  const intialState = {
    isLoading: false,
    isError: false,
    news: [],
    message: "",
  };
  
  export const reducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case GET_NEWS_REQ:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case GET_NEWS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          news: payload,
        };
      case GET_NEWS_FAILURE:
        return { ...state, isLoading: false, isError: true };
      default:
        return state;
    }
  };