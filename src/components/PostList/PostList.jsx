import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function PostList({ selectedUser }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedUser) {
      setLoading(false);
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUser}`)
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
          setLoading(true);
        });
    } else {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
          setLoading(true);
        });
    }
  }, [selectedUser]);

  return (
    <div>
      {loading ? (
        <>
          <h2>Все посты</h2>
          <ol>
            {Boolean(posts) && posts.map((post) => (
              <li key={post.id}>{post.title} <Link to={`/posts/${post.id}`}><button type="button">Подробнее</button></Link></li>
            ))}
          </ol>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
