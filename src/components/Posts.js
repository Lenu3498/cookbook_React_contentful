import React, { useState } from "react";
import RecipeCard from "./Card";
import { Button } from "react-bootstrap";

const Posts = ({ articles }) => {
  // console.log(articles);
  // const [filter, setFilter] = useState();

  // const handleOnclick = () => {
  //   if (articles.fields.category === "breakfast") {
  //     setFilter(breakfast);
  //     return filter;
  //   }
  //   if (articles.fields.category === "dinner") {
  //     setFilter(dinner);
  //     return filter;
  //   }
  //   if (articles.fields.category === "lunch") {
  //     setFilter(lunch);
  //     return filter;
  //   }
  //   handleOnclick();
  // };

  return (
    <div>
      {/* <Wrapper>
        {articles.category === "breakfast" && (
          setCategory(breakfast)
          <div>
            {articles.map((article, index) => (
              <RecipeCard article={article} key={index} />
            ))}
          </div>
        )}
        <Button variant="outline-secondary">breakfast</Button>
      </Wrapper> */}
      <Button
        onClick={() => {
          articles
            .filter((article) => article.fields.category === "Lunch")
            .map((article, index) => (
              <RecipeCard article={article} key={index} />
            ));
          console.log(articles);
        }}
        variant="outline-secondary"
      >
        lunch
      </Button>
      <Button variant="outline-secondary">dinner</Button>
      <Button variant="outline-secondary">all recipes</Button>
      <div>
        {articles
          .filter((article) => article.fields.category === "Lunch")
          .map((article, index) => (
            <RecipeCard article={article} key={index} />
          ))}
        console.log(articles)
      </div>
    </div>
  );
};

export default Posts;
