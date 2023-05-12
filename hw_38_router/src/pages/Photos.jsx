import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Image, ButtonBack } from '../components/index.jsx';

export function Photos() {
  const [photos, setPhotos] = useState([]);
  const location = useLocation();
  const albumInfo = location.state;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumInfo.albumId}`
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));

      setPhotos(response);
    }

    fetchData();
  }, []);

  console.log(photos);

  return (
    <div className="bg-neutral-100 p-6">
      <h1 className="text-sky-950 text-center text-5xl font-semibold">{albumInfo.albumTitle}</h1>
      <ButtonBack />
      <div className="flex flex-wrap w-9/12 container justify-between my-6">
        {photos.map((photo) => (
          <Image className="mb-4" width={200} src={photo.url} />
        ))}
      </div>
    </div>
  );
}
