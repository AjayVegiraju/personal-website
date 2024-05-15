import React from 'react';

function Blog() {
  return (
    <section>
      <h2>Blog</h2>
      <div className="blog-post">
        <h3>Blog Post 1</h3>
        <p>[Excerpt of Blog Post 1]</p>
        <a href="#">Read More</a>
      </div>
      <div className="blog-post">
        <h3>Blog Post 2</h3>
        <p>[Excerpt of Blog Post 2]</p>
        <a href="#">Read More</a>
      </div>
      {/* Add more blog posts as needed */}
    </section>
  );
}

export default Blog;
