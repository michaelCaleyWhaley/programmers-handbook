import { useEffect, useState } from "react";
import { PageTitle } from "./components/PageTitle.tsx/PageTitle";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1);
  }, []);

  function internalMethodToTest() {
    return "This is an internal method";
  }

  internalMethodToTest();

  return (
    <div className="App">
      <PageTitle />
      <p>{count}</p>
    </div>
  );
}

export default App;
