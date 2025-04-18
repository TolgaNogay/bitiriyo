import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="container flex flex-col items-center text-center py-16 md:py-20 lg:py-28 relative">
      <Badge variant="purple" className="mb-8">Gelecek tekleyebilir</Badge>
      
      <div className="max-w-4xl mx-auto space-y-4 mb-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
          2 dakikada
          <br />
          <span className="font-heading italic font-medium">gününü planla.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mt-6">
          Todayrow, sadece bugün ve yarına odaklı
          <br />minimalist bir planlama aracıdır.
        </p>
      </div>
      
      <Button size="lg" className="mt-4 px-8 group" asChild>
        <Link href="/register">
          14 gün ücretsiz deneyin <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
      
      <p className="text-sm text-muted-foreground mt-3">Kredi kartı gerekmez</p>
    </section>
  );
};

export default Hero; 