import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Card, Button, ButtonBack } from '../components/index.jsx';

export function Albums() {
  const [albums, setAlbums] = useState([]);
  const location = useLocation();
  const userInfo = location.state;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${userInfo.userId}`
      )
        .then(res => res.json())
        .catch(err => console.log(err));

      setAlbums(response);
    }

    fetchData();
  }, []);

  return (
    <div className="bg-neutral-100 p-6">
      <h1 className="text-sky-950 text-center text-5xl font-semibold">
        Albums by {userInfo.userName}
      </h1>
      <ButtonBack />
      <div className="flex flex-wrap w-9/12 container justify-between my-6">
        {albums.map(album => (
          <div className="m-6 text-center">
            <Card title={album?.title} bordered={false} className="w-64 mb-4"></Card>
            <Link to="/photos" state={{ albumId: album?.id, albumTitle: album?.title }}>
              <Button type="primary" className="bg-sky-950">
                See photos
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
