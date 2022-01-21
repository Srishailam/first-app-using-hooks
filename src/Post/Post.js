import react from 'react';

function Post(props){
  const { title, body, id } = props;
  return (
    <div className="Post">
      <h1>{title}</h1>
      <p>{body}</p>
      <p>{id}</p>
    </div>
  );
}

export default Post;