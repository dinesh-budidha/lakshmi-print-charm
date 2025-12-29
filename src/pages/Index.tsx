import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  MapPin,
  CreditCard,
  FileText,
  Stamp,
  BookOpen,
  Image,
  Printer,
  Layers,
  Shield,
  Shirt,
  Coffee,
  Gift,
  BadgeCheck,
  Star
} from "lucide-react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import GalleryImage from "@/components/GalleryImage";
import DownloadCard from "@/components/DownloadCard";

import heroImage from "@/assets/hero-printing.jpg";
import visitingCardsImg from "@/assets/gallery/visiting-cards.jpg";
import brochuresImg from "@/assets/gallery/brochures.jpg";
import tshirtsImg from "@/assets/gallery/tshirts.jpg";
import mugsImg from "@/assets/gallery/mugs.jpg";
import idCardsImg from "@/assets/gallery/id-cards.jpg";
import billbooksImg from "@/assets/gallery/billbooks.jpg";

const services = [
  { icon: CreditCard, title: "Visiting Cards" },
  { icon: FileText, title: "Letterheads" },
  { icon: BadgeCheck, title: "ID Cards" },
  { icon: BookOpen, title: "Bill Books" },
  { icon: Stamp, title: "Stamps" },
  { icon: Image, title: "Leaflets & Posters" },
  { icon: BookOpen, title: "Brochures" },
  { icon: Shield, title: "Stickers & Badges" },
  { icon: Image, title: "Photo Printing" },
  { icon: Printer, title: "Colour Xerox" },
  { icon: Layers, title: "Spiral Binding" },
  { icon: Shield, title: "Lamination" },
  { icon: Shirt, title: "Custom T-Shirts" },
  { icon: Coffee, title: "Mugs & Plates" },
  { icon: Gift, title: "Caps & Gift Items" },
];

const reviews = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    review: "Excellent quality visiting cards! The team was very professional and delivered on time. Highly recommended for all printing needs.",
    date: "2 weeks ago",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    review: "Got custom t-shirts printed for our company event. Amazing quality and great pricing. Will definitely come back!",
    date: "1 month ago",
  },
  {
    name: "Mohammed Ali",
    rating: 5,
    review: "Best printing shop in Medchal! Quick service, friendly staff, and premium quality prints. Thank you Lakshmi Printers!",
    date: "3 weeks ago",
  },
];

const galleryImages = [
  { src: visitingCardsImg, alt: "Premium Visiting Cards", category: "Printing Work" },
  { src: brochuresImg, alt: "Professional Brochures", category: "Printing Work" },
  { src: tshirtsImg, alt: "Custom T-Shirts", category: "Merchandise" },
  { src: mugsImg, alt: "Custom Mugs & Plates", category: "Gift Items" },
  { src: idCardsImg, alt: "ID Cards & Badges", category: "Printing Work" },
  { src: billbooksImg, alt: "Bill Books & Stationery", category: "Printing Work" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-20 px-4">
          <div className="max-w-3xl animate-slide-up">
            <span className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-secondary font-medium text-sm mb-6">
              Premium Printing Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Premium Designing & Printing Solutions in{" "}
              <span className="text-secondary">Medchal</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
              All-in-one printing shop for business essentials, merchandise & custom designs. 
              We bring your ideas to life with perfection.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button variant="hero-gold" size="xl">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Your Trusted Printing Partner in Medchal
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Lakshmi Printers offers comprehensive DTP, designing, and printing services in Medchal. 
                We specialize in professional business printing, custom merchandise, and high-quality 
                digital prints. With reliable service and modern printing technology, we bring your 
                ideas to life with perfection.
              </p>
              <ul className="space-y-3">
                {[
                  "Fast & reliable service",
                  "High-quality prints",
                  "Custom designs",
                  "Affordable pricing",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button variant="maroon-outline" size="lg">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-primary rounded-2xl p-6 text-center">
                  <span className="text-4xl font-heading font-bold text-secondary">10+</span>
                  <p className="text-primary-foreground/80 mt-2">Years Experience</p>
                </div>
                <img 
                  src={visitingCardsImg} 
                  alt="Visiting Cards" 
                  className="rounded-2xl shadow-card w-full"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src={brochuresImg} 
                  alt="Brochures" 
                  className="rounded-2xl shadow-card w-full"
                />
                <div className="bg-secondary rounded-2xl p-6 text-center">
                  <span className="text-4xl font-heading font-bold text-secondary-foreground">5000+</span>
                  <p className="text-secondary-foreground/80 mt-2">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
              Our Printing Services
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From business essentials to custom merchandise, we offer a complete range of 
              printing solutions to meet all your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} icon={service.icon} title={service.title} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="maroon" size="lg">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
              Recent Projects
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image) => (
              <GalleryImage key={image.alt} {...image} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery">
              <Button variant="maroon-outline" size="lg">
                View Full Gallery
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Resources
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
              Downloads
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Download our brochures, catalogs, and sample templates for your reference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <DownloadCard 
              title="Company Brochure"
              description="Complete overview of our services and capabilities."
              fileSize="2.5 MB"
              thumbnail={brochuresImg}
            />
            <DownloadCard 
              title="Visiting Card Samples"
              description="Browse our collection of premium visiting card designs."
              fileSize="1.8 MB"
              thumbnail={visitingCardsImg}
            />
            <DownloadCard 
              title="Pricing Leaflet"
              description="Detailed pricing for all our printing services."
              fileSize="1.2 MB"
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/downloads">
              <Button variant="maroon-outline" size="lg">
                View All Downloads
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>

          <div className="text-center mt-12 space-y-4">
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
              ))}
              <span className="ml-2 text-foreground font-semibold">4.9/5</span>
              <span className="text-muted-foreground">on Google</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/reviews">
                <Button variant="maroon-outline" size="lg">
                  View All Reviews
                </Button>
              </Link>
              <a href="https://g.page/lakshmiprinters/review" target="_blank" rel="noopener noreferrer">
                <Button variant="gold" size="lg">
                  Write a Review
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Visit Us
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
                Find Our Shop
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground">
                      12-93, Medchal Check-Post, Kistapur Road, Near NH-44, Medchal, Telangana 501401
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
              <a 
                href="https://maps.google.com/?q=Lakshmi+Printers+Medchal" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="maroon" size="lg">
                  <MapPin className="w-4 h-4" />
                  Open in Maps
                </Button>
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card-hover">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.123456789!2d78.4567890!3d17.6345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDM4JzA0LjQiTiA3OMKwMjcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lakshmi Printers Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Start Your Printing Project?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a free quote. We're here to bring your ideas to life!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="secondary" size="xl">
                Get a Free Quote
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

export default Index;
