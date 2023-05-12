import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Card, Button } from '../components/index.jsx';

export function Main() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .catch((err) => console.log(err));

      setUsers(response);
    }

    fetchData();
  }, []);
  

  return (
    <div className="bg-neutral-100 p-6">
      <h1 className="text-sky-950 text-center text-5xl font-semibold">Users</h1>
      <div className="flex flex-wrap w-9/12 container justify-between my-6">
        {users.map((user) => (
          <div className="m-6 text-center">
            <Card title={user?.name} bordered={false} className="w-64 mb-4">
              {user?.company.name}
            </Card>
            <Link to="/albums" state={{ userId: user?.id, userName: user?.name }}>
              <Button type="primary" className="bg-sky-950">
                See albums
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
