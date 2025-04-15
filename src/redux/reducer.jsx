import {
    INCREMENT,
    DECREMENT,
    SET_USER,
    SET_FEEDBACKS,
    ADD_FEEDBACK,
    UPDATE_USER,
    DELETE_FEEDBACK,
    RESTORE_USER,
  } from './actions';
  
  const initialState = {
    count: 0,
    user: null,
    feedbacks: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return { ...state, count: state.count + 1 };
      case DECREMENT:
        return { ...state, count: state.count - 1 }; 
      case SET_USER:
        return { ...state, user: action.payload };
      case SET_FEEDBACKS:
        return { ...state, feedbacks: action.payload };
      case ADD_FEEDBACK:
        return { ...state, feedbacks: [...state.feedbacks, action.payload] };
      case UPDATE_USER:
        return { ...state, user: action.payload };
      case DELETE_FEEDBACK:
        return {
          ...state,
          feedbacks: state.feedbacks.filter((feedback) => feedback.id !== action.payload),
        };
      case RESTORE_USER:
        return { ...state, user: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;