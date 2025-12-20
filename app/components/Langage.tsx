export default function Langage() {
  const languages = [
    { name: "Français", level: 100, description: "Langue maternelle" },
    { name: "Anglais", level: 60, description: "Niveau intermédiaire (B2)" },
  ];

  return (
    <section className="bg-slate-950 py-12 px-4 content-auto">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-white tracking-tight">
          Langages <span className="text-emerald-400">Parlés</span>
        </h2>
        <div className="flex flex-col gap-6 max-w-2xl mx-auto">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="border border-slate-800 rounded-xl p-6 w-full"
            >
              <h3 className="text-2xl font-semibold mb-2 text-emerald-400">
                {lang.name}
              </h3>
              <h3 className="text-md font-medium text-slate-300 mb-2">
                {lang.description}
              </h3>
              <div className="w-full bg-slate-800 rounded-full h-4">
                <div
                  className="bg-emerald-400 h-4 rounded-full"
                  style={{ width: `${lang.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
