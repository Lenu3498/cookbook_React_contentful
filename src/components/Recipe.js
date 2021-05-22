import React from 'react';
import marked from 'marked';

const Recipe = ({ article }) => {
  console.log(article)
  const {name, featuredImage, shortDescription, description, category} = article.fields
  const {id} = article.sys
  console.log(id)
  const postDescription = marked(description)
  return (
    <div>
      <h2>{name}</h2>
      <p>{shortDescription}</p>
      {featuredImage && <img src={featuredImage.fields.file.url} alt={name} title={name} width='400'/>}
      <section dangerouslySetInnerHTML={{ __html: postDescription }} />
      <p>{category}</p>
    </div>
  )
}

export default Recipe
