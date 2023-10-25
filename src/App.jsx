import { useState } from "react";

import data from "./data.json";

import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import SelectedBeast from "./components/SelectedBeast";

function App() {
  const [chosenBeast, setChosenBeast] = useState(null);
  function chooseBeast(name) {
    let newChosenBeast = {};
    data.forEach((beast) => {
      if (beast.title === name) {
        newChosenBeast = beast;
      }
    });
    setChosenBeast(newChosenBeast);
  }

  return (
    <div className={chosenBeast ? "prevent-scrolling" : ""}>
      <Header />
      <main>
        <Gallery data={data} chooseBeast={chooseBeast} />
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
