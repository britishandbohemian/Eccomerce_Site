import React, { useState, useEffect } from "react";

const RecentPostItem = ({
  image_url, // Use image_url instead of imgSrc
  category,
  title,
  author_image_url, // Use author_image_url instead of authorImg
  author_name, // Use author_name instead of author
  post_date, // Use post_date instead of date
}) => {
  return (
    <div className="col-xl-4 col-md-6" data-aos="fade-up">
      <article>
        <div className="post-img">
          <img src={image_url} alt="" className="img-fluid" />
        </div>
        <p className="post-category">{category}</p>
        <h2 className="title">
          <a href="blog-details.html">{title}</a>
        </h2>
        <div className="d-flex align-items-center">
          <img
            src={author_image_url}
            alt=""
            className="img-fluid post-author-img flex-shrink-0"
          />
          <div className="post-meta">
            <p className="post-author">{author_name}</p>
            <p className="post-date">
              <time dateTime={post_date}>{post_date}</time>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

const RecentPostsSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://156.38.250.162:3360/News.php")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <section id="recent-posts" className="recent-posts">
      <div className="container section-title" data-aos="fade-up">
        <h2>Recent Posts</h2>
        <p>Description of the recent posts section.</p>
      </div>
      <div className="container">
        <div className="row gy-4">
          {posts.map((post, index) => (
            <RecentPostItem key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPostsSection;
