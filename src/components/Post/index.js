import React from "react";

import "./index.css";

function Post({ title, author, text, highlights, image, link, alt, date }) {
  return (
    <article>
      <h2> {title}</h2>
      <p> {date} </p>
      <p> {author}</p>
      <p> {text}</p>
    </article>
  );
}

export default Post;
