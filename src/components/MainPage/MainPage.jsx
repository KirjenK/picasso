import React, { useState } from 'react';
import UserSelect from '../UserSelect/UserSelect';
import PostList from '../PostList/PostList';
import styles from './mainPage.module.css';

export default function MainPage() {
  const [selectedUser, setSelectedUser] = useState('');

  const onSelect = (userId) => {
    setSelectedUser(userId);
  };

  return (
    <main className={styles.wrapper}>
      <div className={styles.upBoarder} />
      <UserSelect
        onSelect={onSelect}
      />
      <PostList
        selectedUser={selectedUser}
        onSelect={onSelect}
      />
    </main>
  );
}
