import { useState } from "react";
import Header from "./components/Header";
import LifeQuality from "./components/LifeQuality.tsx/LifeQuality";

function App() {
  const [search, setSearch] = useState("");
  const [work, setWork] = useState(false);
  const searchHandler = (event: any) => {
    setSearch(event.target.value);
    event.preventDefault();
  };
  const submitHandler = (event: any) => {
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
