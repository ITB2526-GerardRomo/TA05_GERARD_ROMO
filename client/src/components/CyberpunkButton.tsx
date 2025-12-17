import { useState } from "react";

interface CyberpunkButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "cyan" | "magenta" | "green";
  className?: string;
  "data-testid"?: string;
}

export default function CyberpunkButton({
  children,
  onClick,
  href,
  variant = "cyan",
  className = "",
  "data-testid": testId,
}: CyberpunkButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    cyan: {
      border: "border-neon-cyan",
      text: "text-neon-cyan",
      shadow: "0 0 10px hsl(180 100% 50%), 0 0 20px hsl(180 100% 50%), 0 0 40px hsl(180 100% 50%)",
      hoverBg: "bg-neon-cyan/20",
    },
    magenta: {
      border: "border-neon-magenta",
      text: "text-neon-magenta",
      shadow: "0 0 10px hsl(320 100% 50%), 0 0 20px hsl(320 100% 50%), 0 0 40px hsl(320 100% 50%)",
      hoverBg: "bg-neon-magenta/20",
    },
    green: {
      border: "border-neon-green",
      text: "text-neon-green",
      shadow: "0 0 10px hsl(140 100% 40%), 0 0 20px hsl(140 100% 40%), 0 0 40px hsl(140 100% 40%)",
      hoverBg: "bg-neon-green/20",
    },
  };

  const colors = colorClasses[variant];

  const buttonContent = (
    <span
      className={`
        relative inline-flex items-center justify-center
        px-8 py-4 font-mono font-bold text-sm md:text-base uppercase tracking-widest
        bg-background/80 backdrop-blur-sm
        border-2 ${colors.border} ${colors.text}
        transition-all duration-300 ease-out
        ${isHovered ? colors.hoverBg : ""}
        ${isHovered ? "translate-y-[-2px]" : ""}
        ${className}
      `}
      style={{
        boxShadow: isHovered ? colors.shadow : `0 0 5px hsl(${variant === "cyan" ? "180 100% 50%" : variant === "magenta" ? "320 100% 50%" : "140 100% 40%"})`,
      }}
    >
      <span className={`relative z-10 ${isHovered ? "animate-glitch" : ""}`}>
        {children}
      </span>
      {isHovered && (
        <span
          className="absolute inset-0 opacity-20"
          style={{
            background: `linear-gradient(45deg, transparent 30%, hsl(${variant === "cyan" ? "180 100% 50%" : variant === "magenta" ? "320 100% 50%" : "140 100% 40%"} / 0.3) 50%, transparent 70%)`,
            animation: "scanline 0.5s linear infinite",
          }}
        />
      )}
    </span>
  );

  const commonProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    "data-testid": testId,
  };

  if (href) {
    return (
      <a href={href} {...commonProps} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} {...commonProps} className="inline-block">
      {buttonContent}
    </button>
  );
}
