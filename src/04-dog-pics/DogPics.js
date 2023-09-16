import { useEffect, useState } from 'react';

export default function DogPics() {
  const [dogImgUrl, setDogImgUrl] = useState('');

  const handleClick = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImgUrl(data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="dog-pics">
      <img src={dogImgUrl} alt="dog" />
      <button onClick={handleClick}>🐶</button>
    </div>
  );
}
