

import "./App.css";
import Card from "./components/card";

function App() {
  const data=["Nermin","Fatime","Minaye"]
  return (
    <>
      <div>
        <Card data={data}/>
      </div>
    </>
  );
}

export default App;
