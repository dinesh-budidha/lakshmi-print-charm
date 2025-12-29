import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import ReviewCard from "@/components/ReviewCard";

const reviews = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    review: "Excellent quality visiting cards! The team was very professional and delivered on time. Highly recommended for all printing needs. The attention to detail was impressive.",
    date: "2 weeks ago",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    review: "Got custom t-shirts printed for our company event. Amazing quality and great pricing. Will definitely come back! The design team was very helpful.",
    date: "1 month ago",
  },
  {
    name: "Mohammed Ali",
    rating: 5,
    review: "Best printing shop in Medchal! Quick service, friendly staff, and premium quality prints. Thank you Lakshmi Printers for the excellent work!",
    date: "3 weeks ago",
  },
  {
    name: "Sneha Reddy",
    rating: 5,
    review: "Ordered brochures for my business. The print quality exceeded my expectations. Very professional service and competitive pricing.",
    date: "1 month ago",
  },
  {
    name: "Venkat Rao",
    rating: 5,
    review: "I've been a regular customer for 3 years now. Lakshmi Printers has never disappointed. Consistent quality and reliable service every time.",
    date: "2 months ago",
  },
  {
    name: "Anjali Gupta",
    rating: 4,
    review: "Good quality ID cards for our office. Fast turnaround time. Would recommend for corporate printing needs.",
    date: "1 month ago",
  },
  {
    name: "Suresh Kumar",
    rating: 5,
    review: "Excellent experience! Got wedding cards printed and everyone loved them. The designs were beautiful and print quality was top-notch.",
    date: "3 months ago",
  },
  {
    name: "Kavitha Nair",
    rating: 5,
    review: "Very satisfied with the banners and posters for our event. The colors came out vibrant and the material quality was great. Highly recommended!",
    date: "2 months ago",
  },
  {
    name: "Arun Prasad",
    rating: 5,
    review: "Best prices in Medchal for quality printing. The team is helpful and always ready to assist with design requirements. Great service!",
    date: "1 month ago",
  },
];

const Reviews = () => {
  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="container-custom relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Customer Reviews
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            See what our customers have to say about our printing services
          </p>
          
          {/* Rating Summary */}
          <div className="inline-flex flex-col items-center bg-primary-foreground/10 rounded-2xl p-6">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-secondary text-secondary" />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-heading font-bold text-primary-foreground">{averageRating}</span>
              <div className="text-left">
                <p className="text-primary-foreground font-medium">out of 5</p>
                <p className="text-primary-foreground/60 text-sm">{reviews.length} reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div 
                key={`${review.name}-${index}`}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Write Review CTA */}
      <section className="py-16 bg-card">
        <div className="container-custom text-center px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            Share Your Experience
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Had a great experience with Lakshmi Printers? We'd love to hear from you! 
            Your feedback helps us serve you better.
          </p>
          <a 
            href="https://g.page/lakshmiprinters/review" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="gold" size="xl" className="gap-2">
              Write a Review on Google
              <ExternalLink className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-8">
            Trusted by 5000+ Customers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <span className="text-4xl font-heading font-bold text-secondary">10+</span>
              <p className="text-primary-foreground/80 mt-2">Years Experience</p>
            </div>
            <div className="text-center">
              <span className="text-4xl font-heading font-bold text-secondary">5000+</span>
              <p className="text-primary-foreground/80 mt-2">Happy Customers</p>
            </div>
            <div className="text-center">
              <span className="text-4xl font-heading font-bold text-secondary">15+</span>
              <p className="text-primary-foreground/80 mt-2">Services Offered</p>
            </div>
            <div className="text-center">
              <span className="text-4xl font-heading font-bold text-secondary">4.9</span>
              <p className="text-primary-foreground/80 mt-2">Google Rating</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
