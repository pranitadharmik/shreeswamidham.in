import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = ["Home", "About", "Services", , "Testimonials", "Contact"];

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("home")}>
          <img src={logo} alt="Shree Swami Dham" className="h-12 w-12 rounded-full" />
          <div className="hidden sm:block">
            <p className="text-gradient-gold font-heading text-lg font-bold leading-tight">Shree Swami Dham</p>
            <p className="text-muted-foreground text-xs tracking-widest uppercase">Builders & Developers</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {l}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+918830195933"
            className="hidden md:inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="h-4 w-4" /> Book Site Visit
          </a>
          <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4">
          {navLinks.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="block w-full text-left py-3 text-foreground/80 hover:text-primary border-b border-border/50 text-sm">
              {l}
            </button>
          ))}
          <a href="tel:+918830195933" className="mt-3 inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold w-full justify-center">
            <Phone className="h-4 w-4" /> Book Site Visit
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
