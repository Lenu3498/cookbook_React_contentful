import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./Card.css";
import { Link } from "react-router-dom";

const RecipeCard = ({ article }) => {
  console.log(article);
  const { name, featuredImage, shortDescription, slug } = article.fields;
  const { id } = article.sys;
  console.log(id);
  return (
    <div>
      {/*<h2>{name}</h2>
      {featuredImage && <img src={featuredImage.fields.file.url} alt={name} title={name} width='400'/>}
      s<p>{shortDescription}</p>*/}
      <Card className="CardBox">
        <Card.Img
          variant="top"
          src={featuredImage.fields.file.url}
          alt={name}
          title={name}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{shortDescription}</Card.Text>
          <Link to={`/${slug}`}>
            <Button variant="outline-secondary">Cook me</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeCard;
