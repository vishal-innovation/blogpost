import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { blogPost, editPost } from "../redux/store/post";
import "./blog-style.css";
import CreateBlog from "./CreateBlog";
import NavBar from "./NavBar";

const BlogList = () => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog.blogList);
  const isEditable = useSelector((state) => state.blog.isEditable);

  const [blogData, setBlogData] = useState(blog);
  const [isEdited, setIsEdited] = useState(false);
  const [editItem, setEditItem] = useState({});

  const handleEdit = (item, index) => {
    setIsEdited(true);
    setEditItem(item);
    dispatch(editPost({ text: item, key: index }));
  };

  const handleDelete = (id) => {
    let tempBlogData = [...blogData];
    tempBlogData.splice(id, 1);
    setBlogData(tempBlogData);
    dispatch(blogPost(tempBlogData));
  };

  useEffect(() => {
    setIsEdited(isEditable);
    setBlogData(blog);
  }, [isEditable, blog]);

  return (
    <>
      <NavBar text={"Create Blog"} path={"/create"} />
      <div>
        {isEdited ? (
          <CreateBlog text={editItem} visible={false} />
        ) : (
          <ul className="blog-list">
            {blogData && blogData.length > 0 ? (
              blogData.map((item, index) => {
                return (
                  <li key={index} className="blog">
                    <p className="text-data">{item}</p>
                    <div>
                      <button
                        className="text-btn"
                        onClick={() => handleEdit(item, index)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-btn red"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                );
              })
            ) : (
              <>
                <li className="add-blog">
                  <h2 className="default-heading">
                    Not Added Any Blog Yet. Please write it first.
                  </h2>
                  <Link to="/create">
                    <button>Write Blog Now</button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default BlogList;
