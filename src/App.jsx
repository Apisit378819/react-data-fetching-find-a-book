import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [searchBook, setSearchBook] = useState("react");
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    resBook();
  }, [searchBook]);

  const resBook = async () => {
    try {
      const res = await axios.get(
        `https://openlibrary.org/search.json?q=${searchBook}&limit=10`
        // https://www.googleapis.com/books/v1/volumes?q=<query-param-value>
      );
      // console.log(res);

      setData(res.data.docs);
    } catch (error) {}
  };

  return (
    <>
      <div className="App">Find a Book</div>
      <input type="text" onChange={(e) => setSearchBook(e.target.value)} />
      <ul>
        {data.map((data, index) => (
          <li className="" key={index}>
            {data.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
