import React, { useState } from 'react';
import UserSelect from '../UserSelect/UserSelect';
import PostList from '../PostList/PostList';

export default function MainPage() {
  const [selectedUser, setSelectedUser] = useState('');

  const onSelect = (userId) => {
    setSelectedUser(userId);
  };

  console.log('selectedUser', selectedUser);

  return (
    <div className="App">
      <UserSelect
        onSelect={onSelect}
      />
      <PostList
        selectedUser={selectedUser}
        onSelect={onSelect}
      />
    </div>
  );
}
