import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos del carrusel

const MovieCarousel = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://api.pexels.com/v1/curated?per_page=10', {  // Api de pexels donde consigo imagenes
          headers: {
            Authorization: '0uEuJ6mRG25BvyyHKlxRaf1RWrLglCCK2ygaiExGoDZhQVTTffApsRqW' // Esta es mi clave de autorizacion para la AIP
          }
        });

        // Logueamos la respuesta para ver si llegan las fotos
        console.log('Fotos recibidas:', response.data);

        // Guardamos las fotos en el estado
        setPhotos(response.data.photos);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching photos:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return <p>Loading photos...</p>;
  }

  if (error) {
    return <p>Error loading photos: {error}</p>;
  }

  return (
    <div className="photo-carousel" style={{marginTop: "6vh"}}>
      {photos.length > 0 ? (
        <Carousel>
          {photos.map((photo, index) => (
            <div key={index}>
              <img src={photo.src.landscape} alt={photo.photographer} />
              <p className="legend">Photo by {photo.photographer}</p>
            </div>
          ))}
        </Carousel>
      ) : (
        <p>No photos available.</p>
      )}
    </div>
  );
};

export default MovieCarousel;

