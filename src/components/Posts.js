import React, { useState } from "react";
import RecipeCard from "./Card";
import { Button } from "react-bootstrap";

const Posts = ({ articles }) => {
  const [filter, setFilter] = useState("Allrecipes");

  function handleOnClick(event) {
    setFilter(event.target.id);
    return;
  }
  console.log(filter);

  return (
    <div>
      <Button
        onClick={handleOnClick}
        id="Breakfast"
        variant="outline-secondary"
      >
        breakfast
      </Button>
      <Button onClick={handleOnClick} id="Lunch" variant="outline-secondary">
        lunch
      </Button>
      <Button onClick={handleOnClick} id="Dinner" variant="outline-secondary">
        dinner
      </Button>
      <Button
        onClick={handleOnClick}
        id="Allrecipes"
        variant="outline-secondary"
      >
        all recipes
      </Button>
      <div>
        {filter === "Allrecipes"
          ? articles.map((article, index) => (
              <RecipeCard article={article} key={index} />
            ))
          : articles
              .filter((article) => article.fields.category === filter)
              .map((article, index) => (
                <RecipeCard article={article} key={index} />
              ))}
      </div>
    </div>
  );
};

export default Posts;
