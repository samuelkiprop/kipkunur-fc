interface GalleryImage {
  id: number;
  title: string;
  imageUrl: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <section className="bg-gray-100 p-12  pb-0">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
          Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div key={image.id} className="bg-white rounded-lg shadow-md">
              <img
                src={image.imageUrl}
                alt={image.title}
                className="w-full h-auto rounded-t-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;