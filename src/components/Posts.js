import React, { useState } from 'react';
import RecipeCard from './Card';
import { Button } from 'react-bootstrap';
import './Posts.css';

const Posts = ({ articles }) => {
  const [filter, setFilter] = useState('Allrecipes');

  function handleOnClick(event) {
    setFilter(event.target.id);
    return;
  }
  return (
    <div>
      <div className="Button__Container">
        <Button
          onClick={handleOnClick}
          id="Breakfast"
          variant="light"
        >
          breakfast
        </Button>
        <Button
          onClick={handleOnClick}
          id="Lunch"
          variant="light"
        >
          lunch
        </Button>
        <Button
          onClick={handleOnClick}
          id="Dinner"
          variant="light"
        >
          dinner
        </Button>
        <Button
          onClick={handleOnClick}
          id="Allrecipes"
          variant="light"
        >
          all recipes
        </Button>
      </div>
      <div className="Posts_Container">
        {filter === 'Allrecipes'
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
