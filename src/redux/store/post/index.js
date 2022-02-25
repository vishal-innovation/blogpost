// action type
import { blogPostActionType } from "./actionType";

export const blogPost = (data, isEditable) => {
  const payloadData = { data: data, isEditable: isEditable };
  return (dispatch) => {
    dispatch({
      type: blogPostActionType.CREATE_BLOG,
      payload: payloadData,
    });
  };
};

export const editPost = (data) => {
  return (dispatch) => {
    dispatch({
      type: blogPostActionType.EDIT_BLOG,
      payload: data,
    });
  };
};
