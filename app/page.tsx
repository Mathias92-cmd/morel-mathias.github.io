import Header from "./components/Header";
import ContactBar from "./components/ContactBar";
import Skills from "./components/Skills";
import Formation from "./components/Formation";
import Langage from "./components/Langage";
import Experience from "./components/Experience";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <ContactBar />
      <Skills />
      <Formation />
      <Langage />
      <Experience />
    </main>
  );
}
