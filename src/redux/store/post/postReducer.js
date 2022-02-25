import { blogPostActionType } from "./actionType";

const BLOG_Post = {
  blogList: [],
  editData: "",
  isEditable: "",
};

const blog = (state = BLOG_Post, { type, payload }) => {
  switch (type) {
    case blogPostActionType.CREATE_BLOG: {
      return {
        ...state,
        blogList: payload.data,
        isEditable: payload.isEditable,
      };
    }

    case blogPostActionType.EDIT_BLOG: {
      return {
        ...state,
        editData: payload,
      };
    }
    default:
      return state;
  }
};

export default blog;
