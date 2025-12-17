import { useState } from "react";

interface NeonLogoProps {
  initials?: string;
  className?: string;
}

export default function NeonLogo({ initials = "GR", className = "" }: NeonLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative font-mono font-bold text-2xl md:text-3xl cursor-pointer select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid="logo-gr"
    >
      <span
        className={`relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan transition-all duration-300 ${
          isHovered ? "animate-glitch" : ""
        }`}
        style={{
          textShadow: isHovered
            ? "0 0 10px hsl(180 100% 50%), 0 0 20px hsl(180 100% 50%), 0 0 40px hsl(180 100% 50%)"
            : "0 0 5px hsl(180 100% 50%), 0 0 10px hsl(180 100% 50%)",
        }}
      >
        {initials}
      </span>
      <span
        className="absolute inset-0 text-neon-cyan opacity-50 blur-sm"
        aria-hidden="true"
      >
        {initials}
      </span>
      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
    </div>
  );
}
