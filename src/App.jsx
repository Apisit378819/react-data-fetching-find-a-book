import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios"

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  

  useEffect(() => {
    result();
  }, [input]);

  const result = async () => {
    try {
      const data = await axios.get(
        `https://openlibrary.org/search.json?q=${input}&limit=10`
      );
      setData(data.data.docs);
      
    } catch (error) {}
  };

  return (
    <>
      <div className="App">
        <h1>Find a Book</h1>
        <input
          onChange={(event) => setInput(event.target.value)}
        ></input>
      </div>
      <div>
        <ul>{
          data.map((item, index) => {
            return <div key={index}>{item.title}</div>
          })
          }</ul>
      </div>
    </>
  );
}

export default App;
