import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [gifUrl, setGifUrl] = useState('');

  useEffect(() => {
    const fetchRandomGif = async () => {
      const apiKey = 'b7LzcikrWjC7x6V6nbqfSrKqBuQkrAqH';
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=astonished`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        const gifUrl = data.data.images.original.url;
        setGifUrl(gifUrl);
        // Här behöver du extrahera GIF URL:en från data-objektet och uppdatera komponentens state
        // Använd setGifUrl för att uppdatera state med den nya GIF URL:en

      } catch (error) {
        console.error('Error fetching GIF:', error);
      }
    };

    fetchRandomGif();
  }, []);

  return (
    <div>
      <img src={gifUrl} alt="Random astonished GIF" />
    </div>
  );
}

export default MyComponent;