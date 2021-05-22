import React from 'react';

const Card = ({ article }) => {
  console.log(article)
  const {name, featuredImage, shortDescription } = article.fields
  const {id} = article.sys
  console.log(id)
  return (
    <div>
      <h2>{name}</h2>
      {featuredImage && <img src={featuredImage.fields.file.url} alt={name} title={name} width='400'/>}
      <p>{shortDescription}</p>
    </div>
  )
}

export default Card
