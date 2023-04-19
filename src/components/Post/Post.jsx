import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Post() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState('');

  console.log('id =>>>>>>>>>>>>', id);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((json) => setPost(json));
  }, [id]);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleClick} type="button">Вернуться назад</button>
      <div>
        <h1>Пост:</h1>
        <p>title: {post?.title}</p>
        <p>body: {post?.body}</p>
      </div>
    </div>
  );
}
