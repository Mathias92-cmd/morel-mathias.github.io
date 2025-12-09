import Header from "./components/Header";
import ContactBar from "./components/ContactBar";
import Skills from "./components/Skills";
import Formation from "./components/Formation";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <ContactBar />
      <Skills />
      <Formation />
    </main>
  );
}
