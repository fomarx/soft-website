import React, { Component } from "react";
import FooterPage from "./components/FooterPage";
import AppPage from "./pages/AppPage";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Video from "./pages/Video";
import Counters from "./pages/Counters";
import "./assets/scss/_styles.scss";

class App extends Component {
  render() {
    return (
      <div>
        <AppPage />
        <About />
        <div style={{ marginTop: "2rem" }}>
          <Services />
        </div>
        <Video />
        <Projects />
        <Counters />
        <Contact />
        <FooterPage />
      </div>
    );
  }
}

export default App;
