import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './postList.module.css';

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
    <div className={styles.wrapper}>
      {loading ? (
        <>
          <h2>Все посты</h2>
          {Boolean(posts) && posts.map((post, i) => (
            <div key={post.id} className={styles.postWrapper}>
              <p>{i + 1}. {post.title} </p>
              <Link to={`/posts/${post.id}`}><button type="button">Подробнее</button></Link>
            </div>
          ))}
        </>
      ) : (
        <p className={styles.loading}>Loading...</p>
      )}
    </div>
  );
}
