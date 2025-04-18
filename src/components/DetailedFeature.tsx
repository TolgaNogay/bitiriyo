import { Check } from "lucide-react";

const DetailedFeature = () => {
  return (
    <section className="container py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              <span>Günlük Planlama</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Zahmetsiz günlük planlama
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Todayrow, sadece bugün ve yarına odaklanarak hayatınızı kolaylaştırır. Zamandan tasarruf edin, zihinsel yükü azaltın.
            </p>
            
            <ul className="space-y-3 pt-2">
              {[
                "Sürükle & bırak planlama",
                "Otomatik zaman önerileri",
                "Haftalık tekrarlayan görevler", 
                "Tam gün etkinlikler",
                "Esnek zaman çizelgesi"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative bg-gradient-to-b from-muted/50 to-muted/30 rounded-xl p-2 md:p-6 border shadow-sm">
            <div className="bg-card rounded-lg p-4 border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                  Bugün
                </h3>
                <div className="text-sm text-muted-foreground font-mono">
                  Nisan 18, 2025
                </div>
              </div>
              
              {/* Zaman çizelgesi */}
              <div className="space-y-3 relative">
                <div className="border-l-2 border-primary/10 absolute top-0 bottom-0 left-[7px]"></div>
                
                {/* 09:00 */}
                <div className="flex gap-3 relative">
                  <div className="w-4 h-4 rounded-full bg-primary/20 z-10 mt-1.5"></div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Haftalık planlama</span>
                      <span className="text-muted-foreground">09:00 - 09:30</span>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-3 border border-primary/10">
                      <span className="text-sm text-muted-foreground">
                        Haftanın önceliklerini belirle ve takım üyeleriyle paylaş
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* 11:00 */}
                <div className="flex gap-3 relative">
                  <div className="w-4 h-4 rounded-full bg-primary/20 z-10 mt-1.5"></div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Proje toplantısı</span>
                      <span className="text-muted-foreground">11:00 - 12:00</span>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-3 border border-primary/10">
                      <span className="text-sm text-muted-foreground">
                        İlerleme raporunu hazırla, demo sunumunda Todayrow'dan ekran görüntüleri göster
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* 15:30 */}
                <div className="flex gap-3 relative">
                  <div className="w-4 h-4 rounded-full bg-primary/20 z-10 mt-1.5">
                    <div className="w-2 h-2 bg-primary rounded-sm absolute top-1 left-1"></div>
                  </div>
                  <div className="flex-1 opacity-60">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium line-through">E-postalar</span>
                      <span className="text-muted-foreground">15:30 - 16:00</span>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-3 border border-primary/10">
                      <span className="text-sm text-muted-foreground line-through">
                        Bekleyen e-postaları yanıtla ve gelen kutusunu sıfırla
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Boş slot */}
                <div className="flex gap-3 relative">
                  <div className="w-4 h-4 rounded-full border-2 border-dashed border-primary/20 z-10 mt-1.5"></div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-muted-foreground">Yeni görev ekle...</span>
                      <span className="text-muted-foreground">16:30</span>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-3 border border-dashed border-muted">
                      <span className="text-sm text-muted-foreground/60 italic">
                        Buraya tıklayarak yeni bir görev ekleyebilirsin
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedFeature; 