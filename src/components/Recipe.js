import React from "react";
import marked from "marked";

const Recipe = ({ article }) => {
  console.log(article);
  const {
    name,
    featuredImage,
    shortDescription,
    description,
    ingredientsList,
    time,
    category,
  } = article.fields;
  const { id } = article.sys;
  console.log(id);
  const postDescription = marked(description);
  const recipeIngredients = marked(ingredientsList);
  return (
    <div>
      <h2>{name}</h2>
      <p>{time} Minutes</p>
      <p>{shortDescription}</p>
      {featuredImage && (
        <img
          src={featuredImage.fields.file.url}
          alt={name}
          title={name}
          width="400"
        />
      )}
      <section dangerouslySetInnerHTML={{ __html: recipeIngredients }} />
      <section dangerouslySetInnerHTML={{ __html: postDescription }} />

      {/* <p>{ingredients}</p> */}
      {/* <p>{description}</p> */}
      <p>{category}</p>
    </div>
  );
};

export default Recipe;
