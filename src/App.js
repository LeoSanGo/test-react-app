import "./styles.css";
import ReactImage from "./img/react-blue.png";

export default function App() {
  const name = "Dionga";
  const funcao = () => {
    return "Retorno de função";
  };
  return (
    <div className="App">
      <h1>Hello Test</h1>
      <h2>Hello {name}</h2>
      <h1>{funcao()}</h1>
      <img src="/img/react.png" alt="react" />
      <img src={ReactImage} alt="reactimg" />
    </div>
  );
}
