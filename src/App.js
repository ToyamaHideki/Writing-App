


import './App.css';
import Main from "./component/Main";
import Menu from "./component/Menu";
import {useState} from "react";



function App() {

  const [length , setLength] = useState(0);
  const [state, setState] = useState("");

  return (
    <div className="App">
      <Menu  length={length} state={state} />
      <Main setLength={setLength} state={state} setState={setState}/> 
    </div>
  );
}

export default App;
