import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormAddComment from '../FormAddComment/FormAddComment';

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

  console.log('comments', comments);

  return (
    <div>
      <button onClick={handleClick} type="button">Вернуться назад</button>
      {loading ? (
        <>
          <div>
            <h1>Post: {`${post.title.slice(0, 4).trim()}..`}</h1>
            <h2>User: {user.name}</h2>
            <i>Username: {user.username}</i>
            <p>title: {post?.title}</p>
            <p>body: {post?.body}</p>
          </div>
          <div>
            <h3>Comments: {comments.length}</h3>
            {comments.map((comment) => (
              <div key={comment.id}>
                <h3>{comment.name}</h3>
                <p>{comment.body}</p>
              </div>
            ))}
          </div>
          <FormAddComment postId={id} setComments={setComments} />
        </>
      ) : (
        <p>...Loading</p>
      )}

    </div>
  );
}
