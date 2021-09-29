import "./styles.css";
import Header from "./components/Header";
import Content from "./components/Content";

export default function App() {
  const name = "Dionga";
  const funcao = () => {
    return "Retorno de função";
  };

  return (
    <div className="App">
      <Header />
      <h1>Hello Test</h1>
      <h2>Hello {name}</h2>
      <h1>{funcao()}</h1>
      <Content />
    </div>
  );
}
