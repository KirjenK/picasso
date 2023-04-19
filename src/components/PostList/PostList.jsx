import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function PostList({ selectedUser }) {
  const [posts, setPosts] = useState([]);
  console.log('posts', posts);

  useEffect(() => {
    if (selectedUser) {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUser}`)
        .then((response) => response.json())
        .then((data) => setPosts(data));
    } else {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setPosts(data));
    }
  }, [selectedUser]);

  return (
    <div>
      <h2>Все посты</h2>
      <ol>
        {Boolean(posts) && posts.map((post) => (
          <li key={post.id}>{post.title} <Link to={`/posts/${post.id}`}><button type="button">Подробнее</button></Link></li>
        ))}
      </ol>
    </div>
  );
}
