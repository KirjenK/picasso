import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormAddComment from '../FormAddComment/FormAddComment';
import styles from './post.module.css';

export default function Post() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState('');
  const [user, setUser] = useState('');
  const [comments, setComments] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setPost(json);
        return fetch(`https://jsonplaceholder.typicode.com/users/${json.userId}`);
      })
      .then((res) => res.json())
      .then((json) => {
        setUser(json);
        return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
      })
      .then((res) => res.json())
      .then((json) => {
        setComments(json);
        setLoading(true);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.upBoarder} />
      <button className={styles.backBtn} onClick={handleClick} type="button">Вернуться назад</button>
      {loading ? (
        <>
          <div className={styles.insideBlock}>
            <h1>Post: {`${post.title.slice(0, 4).trim()}..`}</h1>
            <h2>User: {user.name}</h2>
            <i>Username: {user.username}</i>
            <p className={styles.title}>title: {post.title}</p>
            <p>body: {post.body}</p>
          </div>
          <div className={styles.blockComment}>
            <h3 className={styles.commentsTitle}>Comments: {comments?.length}</h3>
            {comments?.map((comment, i) => (
              <div className={styles.commentWrapper} key={comment.id}>
                <h3>{i + 1}. {comment.name}</h3>
                <p className={styles.commentBody}>{comment.body}</p>
              </div>
            ))}
          </div>
          <FormAddComment postId={id} setComments={setComments} />
        </>
      ) : (
        <p className={styles.loading}>Loading...</p>
      )}

    </div>
  );
}
