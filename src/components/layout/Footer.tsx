import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-editorial py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="font-serif text-xl font-medium">
              Astelie Ngarambe
            </Link>
            <p className="body-regular max-w-xs">
              Brand Architect & Growth Advisor helping African and global brands scale with purpose.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wide">Navigate</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="body-regular hover:text-foreground transition-colors">About</Link>
              <Link to="/services" className="body-regular hover:text-foreground transition-colors">Services</Link>
              <Link to="/experience" className="body-regular hover:text-foreground transition-colors">Experience</Link>
              <Link to="/media" className="body-regular hover:text-foreground transition-colors">Media</Link>
              <Link to="/contact" className="body-regular hover:text-foreground transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wide">Connect</h4>
            <div className="flex flex-col gap-2">
              <a 
                href="https://www.linkedin.com/in/astelie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="body-regular hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <Link to="/contact" className="body-regular hover:text-foreground transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Astelie Ngarambe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
