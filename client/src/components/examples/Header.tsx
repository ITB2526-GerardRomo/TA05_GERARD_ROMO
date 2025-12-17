import Header from "../Header";

export default function HeaderExample() {
  return <Header onNavigate={(href) => console.log("Navigate to:", href)} />;
}
