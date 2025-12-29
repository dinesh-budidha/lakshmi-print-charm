import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter,
  MessageCircle
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Downloads", path: "/downloads" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Visiting Cards",
    "Letterheads",
    "ID Cards",
    "Brochures",
    "Bill Books",
    "Custom T-Shirts",
    "Photo Printing",
    "Lamination",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-heading font-bold text-xl">L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-tight">Lakshmi</span>
                <span className="text-secondary text-sm font-medium -mt-1">Printers</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Premium designing & printing solutions in Medchal. We bring your ideas to life with 
              high-quality prints and reliable service.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/919876543210" 
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-secondary">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-secondary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  12-93, Medchal Check-Post, Kistapur Road, Near NH-44, Medchal, Telangana 501401
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-primary-foreground/80 text-sm hover:text-secondary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:info@lakshmiprinters.info" className="text-primary-foreground/80 text-sm hover:text-secondary transition-colors">
                  info@lakshmiprinters.info
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Mon - Sat: 9:00 AM - 8:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 Lakshmi Printers. All rights reserved.</p>
            <p>Premium Printing Solutions in Medchal</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
