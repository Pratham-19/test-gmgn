import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const url =
          "http://www.whateverorigin.org/get?url=" +
          encodeURI(
            "https://gmgn.ai/defi/quotation/v1/rank/sol/swaps/1h?orderby=swaps&direction=desc&filters[]=renounced&filters[]=frozen"
          );
        const response = await fetch(url);

        const data = await response.json();
        setData(data);
      } catch (e) {
        console.log(e);
      }
    };
    loadData();
  }, []);
  return <div className="App">{JSON.stringify(data)}</div>;
}

export default App;
