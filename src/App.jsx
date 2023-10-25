import { useState } from "react";

import data from "./data.json";

import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import SelectedBeast from "./components/SelectedBeast";
import SearchForm from "./components/SearchForm";

function App() {
  const [chosenBeast, setChosenBeast] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(null);

  function chooseBeast(name) {
    let newChosenBeast = {};
    data.forEach((beast) => {
      if (beast.title === name) {
        newChosenBeast = beast;
      }
    });
    setChosenBeast(newChosenBeast);
  }

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newFilteredData = data.filter((item) => {
      if (item.keyword === searchTerm) {
        return item;
      }
    });
    setFilteredData(newFilteredData);
  }

  return (
    <div className={chosenBeast ? "prevent-scrolling" : ""}>
      <Header />
      <main>
        <SearchForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchTerm={searchTerm}
          setFilteredData={setFilteredData}
        />
        <Gallery
          data={filteredData ? filteredData : data}
          chooseBeast={chooseBeast}
        />
      </main>
      <Footer />
      {chosenBeast && (
        <SelectedBeast
          setChosenBeast={setChosenBeast}
          url={chosenBeast.image_url}
          name={chosenBeast.title}
          desc={chosenBeast.description}
        />
      )}
    </div>
  );
}

export default App;
