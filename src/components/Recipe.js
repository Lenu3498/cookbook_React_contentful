import React from "react";
import marked from "marked";
import { useParams } from "react-router-dom";

const Recipe = ({ articles }) => {
  window.scrollTo(0, 0);
  const { recipeName } = useParams();
  let myRecipe;
  articles &&
    articles.map((article) => {
      if (article.fields.slug === recipeName) {
        myRecipe = article.fields;
        return myRecipe;
      }
    });

  const {
    slug,
    name,
    featuredImage,
    shortDescription,
    description,
    ingredientsList,
    time,
    category,
  } = myRecipe;
  console.log(myRecipe.slug)
  const postDescription = marked(description);
  const recipeIngredients = marked(ingredientsList);
  return (
    <div>
      <h2>{myRecipe.name} </h2>
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
      <p>{category}</p>
    </div>
  );
};

export default Recipe;
