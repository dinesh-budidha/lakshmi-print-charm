import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Layout from "@/components/Layout";

import visitingCardsImg from "@/assets/gallery/visiting-cards.jpg";
import brochuresImg from "@/assets/gallery/brochures.jpg";
import tshirtsImg from "@/assets/gallery/tshirts.jpg";
import mugsImg from "@/assets/gallery/mugs.jpg";
import idCardsImg from "@/assets/gallery/id-cards.jpg";
import billbooksImg from "@/assets/gallery/billbooks.jpg";

const services = [
  {
    title: "Visiting Cards",
    description: "Premium quality business cards with various finishes including matte, glossy, UV coating, and embossing. Make a lasting first impression.",
    image: visitingCardsImg,
    features: ["Multiple paper options", "Custom designs", "Quick delivery", "Bulk discounts"],
  },
  {
    title: "Letterheads",
    description: "Professional letterheads that reflect your brand identity. Available in various paper weights and sizes.",
    image: billbooksImg,
    features: ["Bond paper quality", "Custom branding", "Matching envelopes", "Corporate packages"],
  },
  {
    title: "ID Cards",
    description: "Durable PVC ID cards with photo printing. Perfect for offices, schools, and events.",
    image: idCardsImg,
    features: ["PVC material", "Lanyard included", "Barcode/QR printing", "Bulk orders"],
  },
  {
    title: "Brochures & Leaflets",
    description: "Eye-catching brochures and leaflets for marketing your business. Various fold options available.",
    image: brochuresImg,
    features: ["Bi-fold/Tri-fold", "Premium paper", "Full color printing", "Design services"],
  },
  {
    title: "Bill Books & Invoices",
    description: "Carbonless bill books and invoice pads customized for your business needs.",
    image: billbooksImg,
    features: ["Duplicate/Triplicate", "Custom numbering", "Perforated pages", "Company branding"],
  },
  {
    title: "Stamps & Seals",
    description: "Custom rubber stamps and company seals for official documentation.",
    image: billbooksImg,
    features: ["Self-inking stamps", "Pre-inked stamps", "Company seals", "Quick turnaround"],
  },
  {
    title: "Stickers & Badges",
    description: "Custom stickers and badges in various shapes and sizes for branding and events.",
    image: visitingCardsImg,
    features: ["Vinyl stickers", "Paper stickers", "Die-cut shapes", "Weather resistant"],
  },
  {
    title: "Custom T-Shirts",
    description: "High-quality custom printed t-shirts for events, teams, and promotions.",
    image: tshirtsImg,
    features: ["Screen printing", "Sublimation", "DTG printing", "All sizes available"],
  },
  {
    title: "Photo Printing",
    description: "Professional photo printing on premium photo paper. Various sizes available.",
    image: brochuresImg,
    features: ["Glossy/Matte finish", "All sizes", "Photo restoration", "Quick service"],
  },
  {
    title: "Colour Xerox",
    description: "High-quality color photocopying and document printing services.",
    image: brochuresImg,
    features: ["A4/A3 sizes", "High resolution", "Bulk copying", "Instant service"],
  },
  {
    title: "Spiral Binding",
    description: "Professional spiral binding for documents, reports, and presentations.",
    image: billbooksImg,
    features: ["Various colors", "Multiple sizes", "Clear covers", "Quick service"],
  },
  {
    title: "Lamination",
    description: "Protective lamination for documents, photos, and certificates.",
    image: idCardsImg,
    features: ["Matte/Glossy", "All sizes", "Document protection", "Instant service"],
  },
  {
    title: "Mugs & Plates",
    description: "Custom printed ceramic mugs and plates. Perfect for gifts and promotions.",
    image: mugsImg,
    features: ["Photo printing", "Logo printing", "Gift packaging", "Bulk orders"],
  },
  {
    title: "Caps & Gift Items",
    description: "Custom printed caps, keychains, and other promotional items.",
    image: tshirtsImg,
    features: ["Embroidery", "Screen printing", "Various items", "Corporate gifting"],
  },
  {
    title: "Posters & Banners",
    description: "Large format printing for posters, banners, and flex boards.",
    image: brochuresImg,
    features: ["Flex printing", "Star flex", "Roll-up banners", "Large sizes"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="container-custom relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Our Services
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Comprehensive printing solutions for all your business and personal needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-2 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="maroon-outline" size="sm" className="w-full">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
            Need a Custom Printing Solution?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Contact us to discuss your specific requirements. We offer custom solutions for unique projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="secondary" size="xl">
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button variant="gold-outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
