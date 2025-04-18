import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center md:text-left">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Bitiriyo. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
        <nav className="flex gap-4 md:gap-6">
          <Link 
            href="/terms" 
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Kullanım Şartları
          </Link>
          <Link 
            href="/privacy" 
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Gizlilik Politikası
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            İletişim
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer; 