import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  rating: number;
  review: string;
  date: string;
}

const ReviewCard = ({ name, rating, review, date }: ReviewCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-primary-foreground font-heading font-bold text-lg">
            {name.charAt(0)}
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-heading font-semibold text-foreground">{name}</h4>
            <span className="text-muted-foreground text-sm">{date}</span>
          </div>
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? "fill-secondary text-secondary" : "text-border"
                }`}
              />
            ))}
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{review}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
