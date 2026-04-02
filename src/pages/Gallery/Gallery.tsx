import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import "./Gallery.css";

const INITIAL_VISIBLE_IMAGES = 18;
const LOAD_MORE_STEP = 12;

const toDescriptiveAlt = (path: string) => {
  const filename = path.split("/").pop() || "community gallery image";
  const nameOnly = filename.replace(/\.[a-z0-9]+$/i, "");

  return `Raising Queens community event photo ${nameOnly.replace(/[_-]+/g, " ")}`;
};

const galleryImages = [
  "/gallery/IMG_0209.jpg",
  "/gallery/IMG_1960.jpg",
  "/gallery/IMG_2165.jpg",
  "/gallery/IMG_2224.jpg",
  "/gallery/IMG_2528.jpg",
  "/gallery/IMG_2557.jpg",
  "/gallery/IMG_2660.jpg",
  "/gallery/IMG_2962.jpg",
  "/gallery/IMG_3385.jpg",
  "/gallery/IMG_3587.JPG",
  "/gallery/IMG_3641.JPG",
  "/gallery/IMG_3673.jpg",
  "/gallery/IMG_3696.JPG",
  "/gallery/IMG_3712.jpg",
  "/gallery/IMG_3734.jpg",
  "/gallery/IMG_3879.jpg",
  "/gallery/IMG_3899.jpg",
  "/gallery/IMG_3912.jpg",
  "/gallery/IMG_3938.jpg",
  "/gallery/IMG_4232.JPG",
  "/gallery/IMG_4386.JPG",
  "/gallery/IMG_4627.jpg",
  "/gallery/IMG_4635.JPG",
  "/gallery/IMG_5264.JPG",
  "/gallery/IMG_5363.jpg",
  "/gallery/IMG_5377.JPG",
  "/gallery/IMG_2548.jpg",
  "/gallery/IMG_5588_Original.jpg",
  "/gallery/IMG_5589_Original.jpg",
  "/gallery/IMG_6994.jpg",
  "/gallery/IMG_6998.jpg",
  "/gallery/IMG_8029.jpg",
  "/gallery/IMG_8393.jpg",
  "/gallery/IMG_8486.JPG",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_IMAGES);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = "hidden";
  };

  const closeViewer = () => {
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  const visibleImages = galleryImages.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((current) =>
      Math.min(current + LOAD_MORE_STEP, galleryImages.length),
    );
  };

  return (
    <div className="gallery-page">
      <SEO
        title="Gallery | Raising Queens Foundation"
        description="Explore the Raising Queens photo gallery featuring workshops, outreach programs, and moments of impact from our community events."
        path="/gallery"
        image="/gallery/IMG_2165.jpg"
        keywords="Raising Queens gallery, NGO event photos, women empowerment community photos"
      />
      <section className="gallery-header">
        <h1>Event Gallery</h1>
        <p>
          Relive the moments that matter. Explore photos from our workshops,
          events, and community gatherings that celebrate the strength and
          spirit of our youth.
        </p>
      </section>

      <section className="gallery-grid">
        {visibleImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={toDescriptiveAlt(image)}
            loading={index < 6 ? "eager" : "lazy"}
            decoding="async"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </section>

      {visibleCount < galleryImages.length && (
        <div className="gallery-load-more-wrap">
          <button className="gallery-load-more" onClick={loadMore}>
            Load more photos
          </button>
        </div>
      )}

      {selectedImage && (
        <div className="full-viewer" onClick={closeViewer}>
          <img src={selectedImage} alt="Full view" decoding="async" />
          <span className="close" onClick={closeViewer}>
            &times;
          </span>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
