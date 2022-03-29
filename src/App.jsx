import About from "./components/about/about";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;