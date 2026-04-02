import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import './Gallery.css';

const galleryImages = [
  '/gallery/IMG_0209.jpg',
  '/gallery/IMG_1960.jpg',
  '/gallery/IMG_2165.jpg',
  '/gallery/IMG_2224.jpg',
  '/gallery/IMG_2528.jpg',
  '/gallery/IMG_2557.jpg',
  '/gallery/IMG_2660.jpg',
  '/gallery/IMG_2962.jpg',
  '/gallery/IMG_3385.jpg',
  '/gallery/IMG_3587.JPG',
  '/gallery/IMG_3641.JPG',
  '/gallery/IMG_3673.jpg',
  '/gallery/IMG_3696.JPG',
  '/gallery/IMG_3712.jpg',
  '/gallery/IMG_3734.jpg',
  '/gallery/IMG_3879.jpg',
  '/gallery/IMG_3899.jpg',
  '/gallery/IMG_3912.jpg',
  '/gallery/IMG_3938.jpg',
  '/gallery/IMG_4232.JPG',
  '/gallery/IMG_4386.JPG',
  '/gallery/IMG_4627.jpg',
  '/gallery/IMG_4635.JPG',
  '/gallery/IMG_5264.JPG',
  '/gallery/IMG_5363.jpg',
  '/gallery/IMG_5377.JPG',
  '/gallery/IMG_2548.jpg',
  '/gallery/IMG_5588_Original.jpg',
  '/gallery/IMG_5589_Original.jpg',
  '/gallery/IMG_6994.jpg',
  '/gallery/IMG_6998.jpg',
  '/gallery/IMG_8029.jpg',
  '/gallery/IMG_8393.jpg',
  '/gallery/IMG_8486.JPG'
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeViewer = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="gallery-page">
      <section className="gallery-header">
        <h2>Event Gallery</h2>
        <p>
          Relive the moments that matter. Explore photos from our workshops, events, and community gatherings 
          that celebrate the strength and spirit of our youth.
        </p>
      </section>

      <section className="gallery-grid">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </section>

      {selectedImage && (
        <div className="full-viewer" onClick={closeViewer}>
          <img src={selectedImage} alt="Full view" />
          <span className="close" onClick={closeViewer}>&times;</span>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
