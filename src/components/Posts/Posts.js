import React from 'react';
import Post from './Post';
import './Posts.css';

// 🔥 Make sure the parent of Posts is passing the right props!

const Posts = (props) => {
  const { likePost, posts } = props;

  // console.log(props);  
  // {posts: Array(2), likePost: ƒ} 
  // likePost: postId => {...}
  // posts: Array(2)  0: {id: 1, username: "philzcoffee", ...



  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
    
      {posts.map(item => {  // Should I rename this 'item' to something more readable?
        return(
          <Post post={ item }/> // this is a prop that is given to the 'Posts' file.
        )         
      })}


      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
