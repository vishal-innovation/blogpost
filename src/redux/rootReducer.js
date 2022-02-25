import { combineReducers } from "redux";
import blog from "./store/post/postReducer";

const rootReducer = combineReducers({
  blog,
});

export default rootReducer;
