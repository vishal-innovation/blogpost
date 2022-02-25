import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { blogPost } from "../redux/store/post";
import NavBar from "./NavBar";

const CreateBlog = ({ visible = true }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputData, setInputData] = useState("");
  const blogList = useSelector((state) => state.blog.blogList);

  const [blogPostData, setBlogPostData] = useState([]);

  const data = useSelector((state) => state.blog.editData);
  useEffect(() => {
    data && setInputData(data.text);
  }, [data]);

  useEffect(() => {
    blogPostData.length > 0 &&
      dispatch(blogPost(blogList.concat(blogPostData)));
    blogPostData.length > 0 && navigate("/");
  }, [dispatch, blogPostData, navigate, blogList]);

  const handleInput = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = () => {
    setBlogPostData([...blogPostData, inputData]);
  };

  const handleEdit = () => {
    const setBlog = blogList.map((item, index) => {
      return index === data.key ? inputData : item;
    });
    dispatch(blogPost(setBlog, false));
  };

  return (
    <>
      {visible && <NavBar text={"Back to Home"} path={"/"} />}
      <div className="input-box">
        <textarea
          className="textarea"
          onChange={handleInput}
          placeholder="Write here..."
          value={inputData}
        />
        {visible ? (
          <button className="btn" onClick={handleSubmit}>
            Add Blog
          </button>
        ) : (
          <button className="btn" onClick={handleEdit}>
            Edit Blog
          </button>
        )}
      </div>
    </>
  );
};

export default CreateBlog;
