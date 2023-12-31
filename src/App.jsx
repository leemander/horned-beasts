import { useState } from "react";

import data from "./data.json";

import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import SelectedBeast from "./components/SelectedBeast";
import Form from "./components/Form";

function App() {
  const [chosenBeast, setChosenBeast] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [formData, setFormData] = useState({ searchTerm: "", horns: "" });

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
    filterData({ ...formData, [e.target.name]: e.target.value });
  }

  function filterData(formData) {
    const newFilteredData = data.filter((item) => {
      //https://stackoverflow.com/a/69822649
      if (formData.horns && item.horns !== +formData.horns) {
        return false;
      }
      if (formData.searchTerm && item.keyword !== formData.searchTerm) {
        return false;
      }
      return item;
    });
    setFilteredData(newFilteredData);
  }

  return (
    <div className={chosenBeast ? "prevent-scrolling" : ""}>
      <Header />
      <main>
        <Form
          handleChange={handleChange}
          formData={formData}
          setFormData={setFormData}
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
