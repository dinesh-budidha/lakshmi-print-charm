interface GalleryImageProps {
  src: string;
  alt: string;
  category?: string;
}

const GalleryImage = ({ src, alt, category }: GalleryImageProps) => {
  return (
    <div className="relative group overflow-hidden rounded-xl cursor-pointer">
      <img 
        src={src} 
        alt={alt}
        className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
          <p className="text-primary-foreground font-heading font-semibold">{alt}</p>
          {category && (
            <span className="text-secondary text-sm">{category}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
