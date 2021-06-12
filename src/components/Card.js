import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Card.css';
import { Link } from 'react-router-dom';

const RecipeCard = ({ article }) => {
  const { name, featuredImage, shortDescription, slug } =
    article.fields;
  const { id } = article.sys;

  return (
    <Card className="CardBox">
      <Card.Img
        variant="top"
        src={featuredImage.fields.file.url}
        alt={name}
        title={name}
      />
      <Card.Body>
        <Card.Title className="Card__title">{name}</Card.Title>
        <Card.Text>{shortDescription}</Card.Text>
        <Link to={`/${slug}`}>
          <Button variant="outline-secondary">Cook me</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
