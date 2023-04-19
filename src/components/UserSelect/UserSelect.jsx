import { useEffect, useState } from 'react';
import styles from './userSelect.module.css';

export default function UserSelect({ onSelect }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
        setLoading(true);
      });
  }, []);

  const handleSelect = (e) => {
    const userId = e.target.value;
    onSelect(userId);
  };

  return (
    <div className={styles.wrapper}>
      {loading ? (
        <>
          <h3>Выберите пользователя</h3>
          <select onChange={handleSelect}>
            <option value="">Все пользователи</option>
            {Boolean(users) && users.map((user) => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
        </>
      ) : (
        null
      )}
    </div>
  );
}
