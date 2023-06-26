import React from "react";
import "./App.css";
import { Element, VisualTable } from "./compoennts";
const NumberArray = [87, 32, 51, 66, 95, 24, 42, 5, 78, 10, 91, 39, 54, 62, 83];

function App() {
  return (
    <div className="App">
      <VisualTable>
        {NumberArray.map((number) => (
          <Element key={number} height={number} number={number} />
        ))}
      </VisualTable>
    </div>
  );
}

export default App;
