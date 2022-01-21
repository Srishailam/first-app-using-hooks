import { useState, useEffect } from 'react';
import Counter from './Counter/Counter';
import logo from './logo.svg';
import Post from './Post/Post';
import PostTitle from "./PostTitle/PostTitle";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button } from 'react-bootstrap';

function loginReducer(state, action) {

  switch(action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

function App() {
  const [count, setCount] =  useState(10);
  const [posts, setPosts] = useState([]);
  const [isLoggedin, setIsLoggedIn] = useState(false);

  // const [state, dispatch] = useReducer(loginReducer, initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      setPosts(data);
    })
  },[isLoggedin]);

  if (posts.length === 0) {
    return <div className="progress">
      Loading posts...
    </div>
  }
  return (
    <div className="App">
     <Counter 
      initialCount={count}
      updateCount={() => setCount(count + 1)}
      />
      <PostTitle />
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      {
        posts.map(post => {
          return <Post 
            key={post.id} 
            title={post.title} 
            body={post.body}
            id={post.id}
            />
        })
      }
    </div>
  );
}

export default App;
