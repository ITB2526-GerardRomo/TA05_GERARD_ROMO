import { useState } from "react";
import NeonLogo from "./NeonLogo";
import { Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  links?: NavLink[];
  onNavigate?: (href: string) => void;
}

const defaultLinks: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#all-projects" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header({ links = defaultLinks, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleClick = (href: string) => {
    if (onNavigate) {
      onNavigate(href);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          <NeonLogo />

          <nav className="hidden md:flex items-center gap-8" data-testid="nav-desktop">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative font-mono text-sm uppercase tracking-wider text-muted-foreground transition-colors duration-300"
                style={{
                  color: hoveredLink === link.href ? "hsl(180 100% 50%)" : undefined,
                  textShadow: hoveredLink === link.href ? "0 0 10px hsl(180 100% 50%)" : undefined,
                }}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-neon-cyan transition-all duration-300 ${
                    hoveredLink === link.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4" data-testid="nav-mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className="font-mono text-sm uppercase tracking-wider text-muted-foreground py-2 border-b border-border/30"
                data-testid={`nav-link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
