export default function Formation() {
  const formations = [
    {
      title: "BUT Informatique",
      period: "2023 - En cours",
    },
    {
      title: "BAC STI2D - OPTION SIN",
      period: "2020 - 2023",
    },
  ];

  return (
    <section className="bg-slate-900 py-12 px-4 content-auto">
      <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
        <h2 className="text-3xl font-bold mb-2 text-white tracking-tight">
          Ma <span className="text-emerald-400">Formation</span>
        </h2>
        {formations.map((formation, index) => (
          <div
            key={index}
            className="border border-slate-800 rounded-xl p-6 w-full"
          >
            <h3 className="text-2xl font-semibold mb-2 text-emerald-400">
              {formation.title}
            </h3>
            <h3 className="text-md font-medium text-slate-300">
              {formation.period}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
