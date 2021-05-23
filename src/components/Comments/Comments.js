import React from 'react';
import Comment from './Comment';
import './Comments.css';
  // 🔥 Make sure the parent of Comments is passing the right props!



const Comments = props => {
  const { comments } = props;

  return (
    
      comments.map((item, index) => {
        return <div key={index}>
        <Comment comment={ item } />
        </div>
        
      })
  );
};

export default Comments;
{/* map through the comments prop and render a Comment for every piece of data */}
