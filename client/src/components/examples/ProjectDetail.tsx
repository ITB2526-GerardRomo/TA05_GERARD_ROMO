import ProjectDetail from "../ProjectDetail";

// todo: remove mock functionality
const mockProject = {
  id: "1",
  title: "Neural Dashboard",
  description: "Sistema de monitoreo en tiempo real con visualizaciones de datos avanzadas.",
  longDescription: "Neural Dashboard es una plataforma de monitoreo empresarial que proporciona visualizaciones de datos en tiempo real, alertas inteligentes y análisis predictivo. Construido con tecnologías modernas como React, TypeScript y D3.js, ofrece una experiencia de usuario fluida y un rendimiento excepcional. El sistema puede manejar millones de puntos de datos mientras mantiene una interfaz responsiva y visualmente atractiva.",
  imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
  codeSnippet: `// Real-time data fetching with WebSocket
const useMetrics = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const ws = new WebSocket('wss://api.neural.dev');
    ws.onmessage = (event) => {
      const metrics = JSON.parse(event.data);
      setData(prev => [...prev, metrics]);
    };
    return () => ws.close();
  }, []);
  
  return data;
};`,
  codeLanguage: "typescript",
  codeFilename: "useMetrics.ts",
  githubUrl: "https://github.com/gr/neural-dashboard",
  liveUrl: "https://neural-dashboard.vercel.app",
};

export default function ProjectDetailExample() {
  return (
    <ProjectDetail
      project={mockProject}
      onBack={() => console.log("Back clicked")}
    />
  );
}
