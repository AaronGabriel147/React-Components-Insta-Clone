/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
// To make the search bar work (which is stretch) we'd need another state to hold the search term.


/*
  This function serves the purpose of increasing the number of likes by one, of the post with a given id.
  The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
  This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.
  Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
  The callback passed into `map` performs the following logic:
    - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
    - otherwise just return the post object unchanged.
  */


import React, { useState } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import Posts from './components/Posts/Posts.js';
import SearchBar from './components/SearchBar/SearchBar';


const App = (props) => {
  const [posts, setPosts] = useState(dummyData);             // Changes dummyData to "posts" - now "posts" stores the long array of objects.
  const [search, setSearch] = useState('')                 

// The purpose of this function is to change state via onClick from a child component. 

function likePost(postId) {                                  // 'likePost' gets invoked inside the "like section" file with an 'onClick'
  // setPosts(posts.map(postArrayItem => {                    // 'posts' is a large array of objects. Cannot do anything to data unless you setPosts. 
  //     if (postArrayItem.id === postId) {
  //       return {...postArrayItem, postArrayItem.likes: + 1}   // ???             // postArrayItem.id is the id number for every object in the posts array of objects.     
  //        } return postArrayItem
  //     })) 
  // };

     posts.map(item => {
       return item.id == postId ? setPosts({...postId}) : item
     })  
}


// children
  return (
    <div className='App'>
      <SearchBar />                                     
      <Posts likePost={ likePost } posts={ posts } />   
    </div>
  );
};

export default App;