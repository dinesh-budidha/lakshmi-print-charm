import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadCardProps {
  title: string;
  description: string;
  fileSize?: string;
  thumbnail?: string;
}

const DownloadCard = ({ title, description, fileSize, thumbnail }: DownloadCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
      {/* Thumbnail */}
      <div className="aspect-[4/3] bg-primary/5 relative overflow-hidden">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FileText className="w-16 h-16 text-primary/30" />
          </div>
        )}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        {fileSize && (
          <p className="text-muted-foreground text-xs mb-4">File size: {fileSize}</p>
        )}
        <Button variant="maroon" className="w-full gap-2">
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
      </div>
    </div>
  );
};

export default DownloadCard;
