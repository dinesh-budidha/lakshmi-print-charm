import Layout from "@/components/Layout";
import DownloadCard from "@/components/DownloadCard";

import visitingCardsImg from "@/assets/gallery/visiting-cards.jpg";
import brochuresImg from "@/assets/gallery/brochures.jpg";
import billbooksImg from "@/assets/gallery/billbooks.jpg";

const downloads = [
  {
    title: "Company Brochure",
    description: "Complete overview of Lakshmi Printers services, capabilities, and pricing information.",
    fileSize: "2.5 MB",
    thumbnail: brochuresImg,
  },
  {
    title: "Visiting Card Samples",
    description: "Browse our collection of premium visiting card designs and templates.",
    fileSize: "1.8 MB",
    thumbnail: visitingCardsImg,
  },
  {
    title: "Pricing Leaflet 2024",
    description: "Detailed pricing for all our printing services with bulk order discounts.",
    fileSize: "1.2 MB",
    thumbnail: brochuresImg,
  },
  {
    title: "Letterhead Templates",
    description: "Professional letterhead templates that you can customize for your business.",
    fileSize: "3.1 MB",
    thumbnail: billbooksImg,
  },
  {
    title: "Wedding Card Catalogue",
    description: "Exclusive collection of wedding invitation card designs and samples.",
    fileSize: "4.5 MB",
    thumbnail: visitingCardsImg,
  },
  {
    title: "Corporate Identity Guide",
    description: "Complete guide for corporate printing including business cards, letterheads, and more.",
    fileSize: "2.8 MB",
    thumbnail: brochuresImg,
  },
  {
    title: "Gift Items Catalogue",
    description: "Browse our range of customizable gift items including mugs, t-shirts, and caps.",
    fileSize: "3.5 MB",
    thumbnail: brochuresImg,
  },
  {
    title: "Packaging Solutions",
    description: "Custom packaging options for businesses including boxes and bags.",
    fileSize: "2.2 MB",
    thumbnail: billbooksImg,
  },
];

const Downloads = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="container-custom relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Downloads
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Download our brochures, catalogues, and templates for your reference
          </p>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloads.map((download, index) => (
              <div 
                key={download.title}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <DownloadCard {...download} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-card">
        <div className="container-custom text-center px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            Need Custom Materials?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            If you need customized brochures, catalogues, or any other printed materials 
            for your business, contact us and we'll create something unique for you.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Downloads;
