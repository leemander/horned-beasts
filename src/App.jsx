import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import data from "./data.json";

function App() {
  return (
    <>
      <Header />
      <main>
        <Gallery data={data} />
      </main>
      <Footer />
    </>
  );
}

export default App;
