import React from 'react';
import RecipeCard from './Card';

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((article, index) => <RecipeCard article={article} key={index} />)}
    </div>
  )
}

export default Posts
