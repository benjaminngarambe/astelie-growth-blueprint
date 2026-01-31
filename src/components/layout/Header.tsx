import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Experience", href: "/experience" },
  { name: "Media", href: "/media" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-editorial flex items-center justify-between h-16 md:h-20">
        {/* Empty spacer for balance */}
        <div className="w-10" />

        {/* Centered Logo */}
        <Link 
          to="/" 
          className="font-serif text-xl md:text-2xl font-medium tracking-tight text-foreground hover:text-primary transition-colors absolute left-1/2 -translate-x-1/2"
        >
          Astelie Ngarambe
        </Link>

        {/* Hamburger Menu Button - Always visible */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Navigation Menu - Dropdown */}
      {mobileMenuOpen && (
        <div className="bg-background border-b border-border animate-fade-in">
          <div className="container-editorial py-6 flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium tracking-wide uppercase py-2 transition-colors",
                  location.pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
