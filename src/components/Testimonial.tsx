import { QuoteIcon } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="container py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border rounded-xl p-8 md:p-10 shadow-sm relative">
          <div className="absolute -top-5 left-10 text-primary/20">
            <QuoteIcon size={60} />
          </div>
          
          <div className="relative">
            <blockquote className="text-xl md:text-2xl font-medium text-center mb-8 leading-relaxed">
              "Çok sayıda arayüz gördüm ama Todayrow'un tasarımı ilk bakışta farkını ortaya koyuyor. 
              Basit görünüyor ama işlevsel, özellikle ihtiyacım olan her şey yalnızca bir tık uzağımda."
            </blockquote>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-lg font-bold text-primary">SK</span>
              </div>
              <div>
                <div className="font-medium">Serap K.</div>
                <div className="text-sm text-muted-foreground">Teknoloji tutkunu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial; 