import { useState } from "react";
import Header from "./components/Header";
import LifeQuality from "./components/LifeQuality.tsx/LifeQuality";

function App() {
  const [search, setSearch] = useState("");
  const [work, setWork] = useState(false);
  let value: string;
  const searchHandler = (event: any) => {
    value = event.target.value;
    event.preventDefault();
  };
  const submitHandler = (event: any) => {
    setSearch(value);
    setWork(true);
    event.preventDefault();
  };
  const mostSearchedHandler = (e: any): void => {
    e.preventDefault();
    const value = e.target.alt;
    setSearch(value);
    setWork(true);
  };
  return (
    <div>
      <Header onSearch={searchHandler} goHandler={submitHandler} />
      <LifeQuality search={search} work={work} onClick={mostSearchedHandler} />
    </div>
  );
}

export default App;
