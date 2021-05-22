import React from 'react';
import Card from './Card';

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((article, index) => <Card article={article} key={index} />)}
    </div>
  )
}

export default Posts
