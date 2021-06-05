import React from "react";
import RecipeCard from "./Card";

const Posts = ({ posts }) => {
  return (
    <div>
      <div>
        {posts.map((article, index) => (
          <RecipeCard article={article} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
