import React from "react";
import { useParams } from "react-router-dom";
import Recipe from "./Recipe";

const RecipeDetails = ({ posts }) => {
  const { id } = useParams;

  return (
    <div>
      <h2>Recipe Details</h2>
      <div>
        {posts.map((article, index) => (
          <Recipe article={article} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RecipeDetails;
