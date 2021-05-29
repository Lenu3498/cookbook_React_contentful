import React from "react";
import marked from "marked";
import { useParams } from "react-router-dom";

const Recipe = ({ articles }) => {
  const { recipeName } = useParams();
  let myRecipe
  articles && articles.map((article) => {
    if(
      article.fields.name === recipeName
    ){
      myRecipe = article.fields
      return myRecipe
    }
  })
  //.field.name = recipeName
  //console.log(article);
  const {
    name,
    featuredImage,
    shortDescription,
    description,
    ingredientsList,
    time,
    category,
  } = myRecipe;
  //const { id } = article.sys;
  //console.log(id);
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
