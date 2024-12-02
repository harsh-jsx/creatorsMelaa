import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BlogPage.css";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);

  const { id } = useParams();

  const fetchBlog = async () => {
    const response = await axios.get(
      `https://cms.dev80.tech/api/blogs/${id}?populate=*`
    );
    setBlog(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    fetchBlog();

    console.log(id);
  }, [id]);

  const date = new Date(blog?.createdAt);
  const ourData = date.toLocaleDateString();
  console.log(ourData);
  console.log(blog);
  return (
    <div className="blogs-page">
      <header className="blogs-header">
        <h1>{blog?.title}</h1>
        <div className="blog-meta">
          <span>{ourData}</span>
        </div>
      </header>
      <div className="blogs-content">
        <main className="blogs-main">
          <article key={blog?.id}>
            <img
              className="blog-page-image"
              src={`https://cms.dev80.tech${blog?.image[0].url}`}
              alt={blog?.title}
            />
            <p className="blog-page-author">• {blog?.author}</p>{" "}
            <h1 className="blog-page-title">{blog?.title}</h1>
            <p className="blog-page-description">{blog?.description}</p>
          </article>
        </main>
      </div>
    </div>
  );
};

export default BlogPage;
