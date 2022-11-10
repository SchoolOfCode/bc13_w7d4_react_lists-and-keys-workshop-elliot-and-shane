import React, { useState } from "react";

import "./index.css";

import samplePosts from "../../libs/data";

import Post from "../Post";

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return (
    <main id="main">
      {samplePosts.map(
        ({ postId, title, author, text, highlights, image, link, alt, date }) => {
          return (
            <Post
              title={title}
              date={date}
              author={author}
              text={text}
              highlights={highlights}
              image={image}
              link={link}
              alt={alt}
              key={postId}
            />
          );
        }
      )}
    </main>
  );
}

export default Main;
