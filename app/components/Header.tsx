import Image from "next/image";

export default function Header() {
  return (
    <section className="relative bg-slate-950 px-6 py-12 mb-4">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          <div className="shrink-0">
            <Image
              src="/images/Photo_Mathias.webp"
              alt="Photo de profil de Mathias Morel"
              width={170}
              height={170}
              className="rounded-full border-4 border-slate-800 shadow-2xl object-cover"
              priority
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-white tracking-tight md:text-6xl mb-2">
              MATHIAS MOREL
            </h1>
            <p className="text-xl font-medium text-emerald-400 md:text-2xl mb-4">
              Développeur Junior
            </p>
            <p className="text-md leading-relaxed text-slate-300 md:text-lg max-w-lg mx-auto md:mx-0">
              Etudiant en 3ème année à l'IUT de Lens spécialisé en développement
              d'applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
