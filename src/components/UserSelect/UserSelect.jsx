import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserSelect({ onSelect }) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);

  console.log(users);

  const handleSelect = (e) => {
    const userId = e.target.value;
    onSelect(userId);
    // navigate(`/users/${userId}`);
  };

  return (
    <div>
      <h3>Выберите пользователя</h3>
      <select onChange={handleSelect}>
        <option value="">Все пользователи</option>
        {Boolean(users) && users.map((user) => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
    </div>
  );
}
