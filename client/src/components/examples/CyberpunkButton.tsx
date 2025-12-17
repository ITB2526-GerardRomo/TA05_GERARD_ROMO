import CyberpunkButton from "../CyberpunkButton";

export default function CyberpunkButtonExample() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <CyberpunkButton variant="cyan" onClick={() => console.log("Cyan clicked")}>
        VER TODOS LOS PROYECTOS
      </CyberpunkButton>
      <CyberpunkButton variant="magenta" onClick={() => console.log("Magenta clicked")}>
        CONTACTAR
      </CyberpunkButton>
      <CyberpunkButton variant="green" onClick={() => console.log("Green clicked")}>
        VER REPOSITORIO
      </CyberpunkButton>
    </div>
  );
}
