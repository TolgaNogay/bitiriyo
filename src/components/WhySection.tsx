import { Check } from "lucide-react";

const WhySection = () => {
  const reasons = [
    "Bugün ve yarını planla",
    "Zihinsel netlik kazandırır", 
    "Hafif ama derin odak",
    "Temiz zihin",
    "Fikirden harekete – hızlıca"
  ];

  return (
    <section className="container py-20 md:py-28">
      <div className="flex flex-col items-center">
        <div className="mb-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Neden Bitiriyo?
        </div>
        
        <div className="text-center space-y-3 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Neden Odaklı Planlama?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bugüne ve yarına odaklanan tek planlayıcı
          </p>
        </div>

        <div className="w-full max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl shadow-sm p-8 md:p-10 border">
            <ul className="space-y-6">
              {reasons.map((reason, i) => (
                <li key={i} className="flex items-center gap-3 transform hover:translate-x-1 transition-transform">
                  <div className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-lg md:text-xl font-medium">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6 p-4 border border-dashed rounded-lg bg-muted/30 text-center">
            <p className="text-muted-foreground italic">
              "Yarın odağı olmayan bir bugüne odaklanmak, ertesi gün yine stresli bir bugün yaratır."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection; 