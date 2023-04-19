import React, { useState } from 'react';
import styles from './formaddComment.module.css';

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
      .then((newComment) => {
        setComments((iv) => [...iv, newComment]);
        setName('');
        setBody('');
        setSend(false);
      });
  };

  return (
    <div className={styles.wrapper}>
      <h3>Добавить комментарий</h3>
      <form onSubmit={handleSubmit}>
        <input className={styles.formInput} onChange={handleInputName} value={name} placeholder="title" type="text" />
        <textarea className={`${styles.formInput} ${styles.formInputBody}`} onChange={handleInputBody} value={body} placeholder="body" type="text" />
        <button className={styles.sendBtn} type="submit">Добавить</button>
      </form>
      {send ? (
        <p>Отправка комментария..</p>
      ) : (
        null
      )}
    </div>
  );
}
