import { Card } from "@/components/ui/card";

interface StageProps {
  stageNumber: number;
  title: string;
  description: string;
  quote: string;
  imageUrl: string;
  imageAlt: string;
  details?: {
    label: string;
    content: string;
  }[];
  imagePosition?: "left" | "right";
}

export default function CoordinateFormationStage({
  stageNumber,
  title,
  description,
  quote,
  imageUrl,
  imageAlt,
  details,
  imagePosition = "right",
}: StageProps) {
  const ImageComponent = (
    <img 
      src={imageUrl}
      alt={imageAlt}
      className="rounded-lg shadow-lg border border-accent/20 w-full"
    />
  );

  const ContentComponent = (
    <div className="space-y-4 text-slate-300 leading-relaxed">
      <p>{description}</p>
      {details && (
        <div className="grid gap-4">
          {details.map((detail, idx) => (
            <div key={idx} className="bg-accent/10 p-4 rounded-lg border border-accent/20">
              <p className="font-semibold text-accent mb-2">{detail.label}</p>
              <p className="text-sm">{detail.content}</p>
            </div>
          ))}
        </div>
      )}
      <p className="border-l-4 border-accent pl-4 py-2 italic text-accent">
        "{quote}"
      </p>
    </div>
  );

  return (
    <Card className="bg-slate-800/50 border-accent/20 p-8 hover:border-accent/40 transition-colors scroll-animate">
      <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
        {stageNumber}단계: {title}
      </h3>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {imagePosition === "left" ? (
          <>
            {ImageComponent}
            {ContentComponent}
          </>
        ) : (
          <>
            {ContentComponent}
            {ImageComponent}
          </>
        )}
      </div>
    </Card>
  );
}
