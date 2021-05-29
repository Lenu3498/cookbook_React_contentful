import React from "react";
import marked from "marked";
import { useParams } from "react-router-dom";

const Recipe = ({ article }) => {
  const { recipeName } = useParams();
  //console.log(article);
  /*const {
    name,
    featuredImage,
    shortDescription,
    description,
    ingredientsList,
    time,
    category,
  } = article.fields;
  //const { id } = article.sys;
  //console.log(id);
  const postDescription = marked(description);
  const recipeIngredients = marked(ingredientsList);*/
  return (
    <div>
      {/*<h2>{name} </h2>
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
      <p>{category}</p>*/}
      <h2> Title - {recipeName}</h2>
    </div>
  );
};

export default Recipe;
