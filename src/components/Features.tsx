import { CalendarIcon, BellIcon, StickyNoteIcon } from "lucide-react";

const Features = () => {
  return (
    <section className="container py-20 md:py-28">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Profesyoneller için <span className="text-primary">basit araçlar</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Özenle tasarlanmış özellikler ile önemli olana odaklanarak üretken kalın
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Planlar */}
        <div className="bg-card rounded-xl border p-6 shadow-sm">
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                <CalendarIcon className="h-6 w-6 text-primary" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2">Planlar</h3>
            <p className="text-muted-foreground mb-6">
              Günlük ve yarın için planlama yapın. Karmaşık ajandalar yerine, sadece önemli işlerinize odaklanın.
            </p>
            
            <div className="mt-auto bg-muted rounded-lg p-3 text-left">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded border-2 border-primary/30 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-primary rounded-sm"></div>
                  </div>
                  <span className="text-sm">Toplantı notlarını hazırla</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded border-2 border-primary/30"></div>
                  <span className="text-sm">Raporu tamamla</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded border-2 border-primary/30"></div>
                  <span className="text-sm">Müşteri araması</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hatırlatıcılar */}
        <div className="bg-card rounded-xl border p-6 shadow-sm">
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                <BellIcon className="h-6 w-6 text-primary" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2">Hatırlatıcılar</h3>
            <p className="text-muted-foreground mb-6">
              Önemli görevler için basit hatırlatıcılar alın. Hiçbir şeyi unutmayın ve zamanında harekete geçin.
            </p>
            
            <div className="mt-auto bg-muted rounded-lg p-3 text-left">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded border-2 border-primary/30"></div>
                    <span className="text-sm">Sunuma hazırlık</span>
                  </div>
                  <span className="text-xs font-mono bg-primary/5 rounded px-2 py-0.5">10:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded border-2 border-primary/30"></div>
                    <span className="text-sm">Ekip toplantısı</span>
                  </div>
                  <span className="text-xs font-mono bg-primary/5 rounded px-2 py-0.5">14:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notlar */}
        <div className="bg-card rounded-xl border p-6 shadow-sm">
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                <StickyNoteIcon className="h-6 w-6 text-primary" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2">Notlar</h3>
            <p className="text-muted-foreground mb-6">
              Hızlı notlar alın ve önemli bilgileri kaydedin. Basit ama güçlü bir not alma deneyimi.
            </p>
            
            <div className="mt-auto bg-muted rounded-lg p-3 text-left">
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Proje fikirleri</h4>
                <p className="text-xs text-muted-foreground line-clamp-3">
                  Yeni login ekranı için renk paleti düşünülmeli. Kullanıcı deneyimini iyileştirmek için giriş adımları azaltılabilir. Başlangıç sayfasında en önemli özellikleri vurgula...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 