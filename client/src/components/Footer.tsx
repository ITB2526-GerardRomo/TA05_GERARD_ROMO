import { useState } from "react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import NeonLogo from "./NeonLogo";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  socialLinks?: SocialLink[];
}

const defaultSocialLinks: SocialLink[] = [
  { icon: <SiGithub size={20} />, href: "https://github.com", label: "GitHub" },
  { icon: <SiLinkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <SiX size={20} />, href: "https://x.com", label: "X" },
];

export default function Footer({ socialLinks = defaultSocialLinks }: FooterProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="py-12 px-4 md:px-8 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <NeonLogo />
            <span className="text-muted-foreground text-sm font-mono">
              &copy; {currentYear} Todos los derechos reservados
            </span>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-2 transition-all duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                aria-label={link.label}
                data-testid={`link-social-${link.label.toLowerCase()}`}
                style={{
                  color:
                    hoveredIndex === index
                      ? "hsl(180 100% 50%)"
                      : "hsl(180 15% 60%)",
                  textShadow:
                    hoveredIndex === index
                      ? "0 0 15px hsl(180 100% 50%)"
                      : "none",
                }}
              >
                {link.icon}
                <span
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-neon-cyan transition-all duration-300 ${
                    hoveredIndex === index ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/20 text-center">
          <p className="text-xs text-muted-foreground font-mono tracking-wider">
            <span className="text-neon-cyan">&lt;</span>
            DISEÑADO Y DESARROLLADO CON
            <span className="text-neon-magenta mx-2">PASIÓN</span>
            <span className="text-neon-cyan">/&gt;</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
