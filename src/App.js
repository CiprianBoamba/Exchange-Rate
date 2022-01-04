import "./App.css";
import Header from "./components/Header";
import Convertor from "./components/Convertor";

function App() {
  const currency = [
    { id: 1, name: "euro", amount: 1, rate: 1 },
    { id: 1, name: "dollar", amount: 1, rate: 1.34 },
  ];
  return (
    <div>
      <Header currency={currency} />
      <Convertor />
    </div>
  );
}

export default App;
