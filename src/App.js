import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Projects from "./components/project/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import GithubStats from "./components/github/GithubStats";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      
      <About />
      <Skills />
      <Projects />
      <GithubStats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
