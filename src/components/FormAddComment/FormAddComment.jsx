import React, { useState } from 'react';

export default function FormAddComment({ postId, setComments }) {
  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const [send, setSend] = useState(false);

  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleInputBody = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSend(true);
    fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      body: JSON.stringify({
        postId: Number(postId),
        name,
        body,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setComments((iv) => [...iv, json]);
        setName('');
        setBody('');
        setSend(false);
      });
  };

  return (
    <div>
      <h2>Добавить комментарий</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInputName} value={name} placeholder="name" type="text" />
        <input onChange={handleInputBody} value={body} placeholder="body" type="text" />
        <button type="submit">Добавить</button>
      </form>
      {send ? (
        <p>Отправка комментария..</p>
      ) : (
        null
      )}
    </div>
  );
}
