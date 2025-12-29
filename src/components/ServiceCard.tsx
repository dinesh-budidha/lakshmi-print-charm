import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="card-service group cursor-pointer">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
          <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
        </div>
        <h3 className="font-heading font-semibold text-foreground">{title}</h3>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
