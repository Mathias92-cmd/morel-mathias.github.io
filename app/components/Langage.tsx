export default function Langage() {
  const languages = [
    { name: "Français", level: 100, description: "Langue maternelle" },
    { name: "Anglais", level: 60, description: "Niveau intermédiaire (B2)" },
  ];

  return (
    <section className="bg-slate-950 py-12 px-4 content-auto">
      <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
        <h2 className="text-3xl font-bold mb-2 text-white tracking-tight">
          Langages <span className="text-emerald-400">Parlés</span>
        </h2>
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="border border-slate-800 rounded-xl p-6 w-full"
          >
            <h3 className="text-xl font-semibold text-emerald-400 mb-2">
              {lang.name}{" "}
              <span className="text-slate-400 text-base font-normal">
                - {lang.description}
              </span>
            </h3>
            <progress
              value={lang.level}
              max="100"
              className="w-full h-4 rounded-full overflow-hidden [&::-webkit-progress-bar]:bg-slate-800 [&::-webkit-progress-value]:bg-emerald-400 [&::-moz-progress-bar]:bg-emerald-400"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
