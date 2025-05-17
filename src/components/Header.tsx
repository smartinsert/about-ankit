
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold text-primary">
            Ankit<span className="text-foreground">Thakur</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/experience" className="text-foreground/80 hover:text-primary transition-colors">
            Experience
          </Link>
          <Link to="/projects" className="text-foreground/80 hover:text-primary transition-colors">
            Projects
          </Link>
          <Link to="/skills" className="text-foreground/80 hover:text-primary transition-colors">
            Skills
          </Link>
          <Link to="/blog" className="text-foreground/80 hover:text-primary transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
        </Button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="flex flex-col p-4 gap-4">
              <Link 
                to="/" 
                className="text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/experience" 
                className="text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </Link>
              <Link 
                to="/projects" 
                className="text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/skills" 
                className="text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </Link>
              <Link 
                to="/blog" 
                className="text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
