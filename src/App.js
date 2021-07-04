import React from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = React.useState("Mary");
  return (
    <div className="App">
      <h1>Hello, {name}</h1>
      <button onClick={() => setName("Harry Potter")}>Change name</button>
    </div>
  );
}
