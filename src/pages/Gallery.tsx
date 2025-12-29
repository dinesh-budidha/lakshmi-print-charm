import { useState } from "react";
import Layout from "@/components/Layout";
import GalleryImage from "@/components/GalleryImage";

import visitingCardsImg from "@/assets/gallery/visiting-cards.jpg";
import brochuresImg from "@/assets/gallery/brochures.jpg";
import tshirtsImg from "@/assets/gallery/tshirts.jpg";
import mugsImg from "@/assets/gallery/mugs.jpg";
import idCardsImg from "@/assets/gallery/id-cards.jpg";
import billbooksImg from "@/assets/gallery/billbooks.jpg";

const categories = ["All", "Printing Work", "Gift Items", "Merchandise", "Shop Images"];

const galleryItems = [
  { src: visitingCardsImg, alt: "Premium Visiting Cards", category: "Printing Work" },
  { src: brochuresImg, alt: "Professional Brochures", category: "Printing Work" },
  { src: idCardsImg, alt: "ID Cards & Badges", category: "Printing Work" },
  { src: billbooksImg, alt: "Bill Books & Stationery", category: "Printing Work" },
  { src: tshirtsImg, alt: "Custom T-Shirts", category: "Merchandise" },
  { src: mugsImg, alt: "Custom Mugs & Plates", category: "Gift Items" },
  { src: visitingCardsImg, alt: "Business Card Designs", category: "Printing Work" },
  { src: brochuresImg, alt: "Marketing Materials", category: "Printing Work" },
  { src: tshirtsImg, alt: "Event T-Shirts", category: "Merchandise" },
  { src: mugsImg, alt: "Personalized Mugs", category: "Gift Items" },
  { src: idCardsImg, alt: "Corporate ID Cards", category: "Printing Work" },
  { src: billbooksImg, alt: "Invoice Books", category: "Printing Work" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="container-custom relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Our Gallery
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Browse through our portfolio of completed projects and see the quality of our work
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={`${item.alt}-${index}`}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <GalleryImage {...item} />
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
