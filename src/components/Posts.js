import React from "react";
import Card from "./Card";
import Recipe from "./Recipe";

const Posts = ({ posts }) => {
  return (
    <div>
      <div>
        {posts.map((article, index) => (
          <Card article={article} key={index} />
        ))}
      </div>
      <div>
        {posts.map((article, index) => (
          <Recipe article={article} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
