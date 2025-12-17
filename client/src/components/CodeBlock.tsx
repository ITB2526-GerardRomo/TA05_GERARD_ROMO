import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export default function CodeBlock({ code, language = "javascript", filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-md overflow-hidden border border-neon-cyan/30 bg-background/95">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-secondary/50 border-b border-neon-cyan/20">
          <span className="font-mono text-xs text-neon-cyan">{filename}</span>
          <span className="font-mono text-xs text-muted-foreground">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto font-mono text-sm leading-relaxed">
          <code
            className="text-foreground"
            dangerouslySetInnerHTML={{
              __html: highlightCode(code, language),
            }}
          />
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 opacity-70 transition-opacity"
          onClick={handleCopy}
          data-testid="button-copy-code"
        >
          {copied ? (
            <Check size={16} className="text-neon-green" />
          ) : (
            <Copy size={16} className="text-neon-cyan" />
          )}
        </Button>
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,243,255,0.02) 2px, rgba(0,243,255,0.02) 4px)",
          }}
        />
      </div>
    </div>
  );
}

function highlightCode(code: string, language: string): string {
  const keywords = ["const", "let", "var", "function", "return", "if", "else", "for", "while", "import", "export", "from", "async", "await", "class", "extends", "new", "this", "try", "catch"];
  const types = ["string", "number", "boolean", "null", "undefined", "void", "any"];
  
  let highlighted = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  
  keywords.forEach((keyword) => {
    const regex = new RegExp(`\\b(${keyword})\\b`, "g");
    highlighted = highlighted.replace(
      regex,
      `<span style="color: hsl(320 100% 60%);">$1</span>`
    );
  });
  
  types.forEach((type) => {
    const regex = new RegExp(`\\b(${type})\\b`, "g");
    highlighted = highlighted.replace(
      regex,
      `<span style="color: hsl(180 100% 50%);">$1</span>`
    );
  });
  
  highlighted = highlighted.replace(
    /(["'`])([^"'`]*)\1/g,
    `<span style="color: hsl(140 100% 45%);">$1$2$1</span>`
  );
  
  highlighted = highlighted.replace(
    /(\/\/[^\n]*)/g,
    `<span style="color: hsl(180 15% 50%);">$1</span>`
  );

  return highlighted;
}
