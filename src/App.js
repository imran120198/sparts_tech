import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import TopHero from "./Components/TopHero";
import Footer from "./Components/Footer";
import BottomHero from "./Components/BottomHero";

function App() {
  const [schoolsData, setSchoolData] = useState([]);

  const fetchData = async () => {
    try {
      let res = await fetch("https://sparts-backend-3031.onrender.com/schools");
      let data = await res.json();
      setSchoolData(data[0]);
      console.log(data[0]);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <TopHero academics={schoolsData.academics} />
      <BottomHero parents={schoolsData.parents} />
      <Footer />
    </div>
  );
}

export default App;
