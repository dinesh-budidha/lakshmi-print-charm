import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Award, Target, Users, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import shopFrontImg from "@/assets/shop-front.jpg";
import heroImage from "@/assets/hero-printing.jpg";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Quality Assurance",
      description: "We use premium materials and modern equipment to ensure the highest quality prints every time.",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality. Most orders are ready within 24-48 hours.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our experienced designers and technicians bring your vision to life with precision.",
    },
    {
      icon: Target,
      title: "Customer Focus",
      description: "We work closely with you to understand your needs and deliver exactly what you want.",
    },
  ];

  const capabilities = [
    "Digital Printing",
    "Offset Printing",
    "Large Format Printing",
    "Screen Printing",
    "Sublimation Printing",
    "UV Printing",
    "Lamination & Binding",
    "Die Cutting & Finishing",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container-custom relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            About Lakshmi Printers
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Your trusted partner for premium printing solutions in Medchal since 2014
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                A Decade of Excellence in Printing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Lakshmi Printers was established in 2014 with a vision to provide premium quality 
                printing services to businesses and individuals in Medchal and surrounding areas. 
                What started as a small DTP center has now grown into a full-service printing 
                shop offering comprehensive solutions for all your printing needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the years, we have invested in modern printing technology and trained our 
                team to deliver exceptional results. Our commitment to quality, reliability, and 
                customer satisfaction has earned us the trust of thousands of customers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we are proud to be one of the most trusted printing shops in Medchal, 
                serving businesses, schools, colleges, government offices, and individuals with 
                the same dedication and quality that we started with.
              </p>
            </div>
            <div className="relative">
              <img 
                src={shopFrontImg} 
                alt="Lakshmi Printers Shop" 
                className="rounded-2xl shadow-card-hover w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-2xl p-6 shadow-lg">
                <div className="text-center">
                  <span className="text-4xl font-heading font-bold text-secondary">10+</span>
                  <p className="text-primary-foreground">Years of Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-background rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Capabilities */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-primary rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                To provide high-quality, affordable printing solutions that help businesses 
                and individuals communicate their message effectively. We strive to exceed 
                customer expectations through innovation, reliability, and exceptional service.
              </p>
              <div className="space-y-3">
                {[
                  "Deliver premium quality prints",
                  "Maintain competitive pricing",
                  "Ensure timely delivery",
                  "Provide excellent customer service",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-primary-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Our Capabilities
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We have invested in modern printing equipment and technology to offer 
                a wide range of printing solutions under one roof.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {capabilities.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-card rounded-lg p-3 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container-custom text-center px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-foreground mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
            Let's discuss your printing needs and bring your ideas to life.
          </p>
          <Link to="/contact">
            <Button variant="maroon" size="xl">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
