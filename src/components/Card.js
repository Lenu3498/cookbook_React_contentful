import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import "./Card.css";

const RecipeCard = ({ article }) => {
  console.log(article)
  const {name, featuredImage, shortDescription } = article.fields
  const {id} = article.sys
  console.log(id)
  return (
    <div>
      {/*<h2>{name}</h2>
      {featuredImage && <img src={featuredImage.fields.file.url} alt={name} title={name} width='400'/>}
      s<p>{shortDescription}</p>*/}
      <Card style={{ width: '300px', margin: 'auto' }}>
      <Card.Img variant="top" src={featuredImage.fields.file.url} alt={name} title={name} />
      <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
      {shortDescription}
      </Card.Text>
      <Button variant="outline-secondary">Cook me</Button>
      </Card.Body>
      </Card>
    </div>
  )
}

export default RecipeCard
