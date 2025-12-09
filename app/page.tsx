import Header from "./components/Header";
import ContactBar from "./components/ContactBar";
import Skills from "./components/Skills";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <ContactBar />
      <Skills />
    </main>
  );
}
