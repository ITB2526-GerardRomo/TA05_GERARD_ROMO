import CodeBlock from "../CodeBlock";

const sampleCode = `// Neural Dashboard API
const fetchData = async () => {
  const response = await fetch('/api/metrics');
  const data = await response.json();
  return data.filter(item => item.active);
};

export function Dashboard() {
  const metrics = useSuspenseQuery(fetchData);
  return <Chart data={metrics} />;
}`;

export default function CodeBlockExample() {
  return (
    <CodeBlock
      code={sampleCode}
      language="typescript"
      filename="dashboard.tsx"
    />
  );
}
