import { Navigation } from "./components/Navigation";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Process } from "./sections/Process";
import { Contacts } from "./sections/Contacts";
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Перейти к содержимому
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Process />
        <Contacts />
      </main>
      <footer className="container footer">
        <span>Создано с AI. Продумано человеком.</span>
        <a href="#home">Вернуться наверх ↑</a>
      </footer>
    </>
  );
}
