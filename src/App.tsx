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
    setWork(!work);
    event.preventDefault();
  };
  return (
    <div>
      <Header onSearch={searchHandler} goHandler={submitHandler} />
      <LifeQuality search={search} work={work} />
    </div>
  );
}

export default App;
