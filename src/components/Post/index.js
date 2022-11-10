import React from "react";

import "./index.css";

function Post({ title, author, text, highlights, link, alt, date }) {
  return (
    <article>
      <h2> {title}</h2>
      <p> {date} </p>
      <p> {author} </p>
      <p> {text} </p>
      <img alt={alt} src={link} />
      <ul>
        {highlights.map((highlight, index) => {
          return <li key={index}>{highlight}</li> 
        })}
      </ul>
    </article>
  );
}

export default Post;
