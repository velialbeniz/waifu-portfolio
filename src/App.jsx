import { useEffect, useState } from "react";
import "./App.scss";
import { Loader } from "./components/loader/Loader";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return (
    <section>
      <Loader />
    </section>
    )
  }

  return (
    <div>
      <section id="Home">
        <Navbar />
      </section>
      <section id="Skills">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
