export default function Skills() {
  const mySkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "MongoDB",
    "HTML",
    "CSS",
    "Git",
    "Podman",
    "Docker",
    "Next.js",
    "Java/Spring",
    "Python/Flask",
    "PHP/Laravel",
    "PostgreSQL",
    "CI/CD",
    "Unity/C#",
  ];
  return (
    <section className="bg-slate-950 py-12 px-4 content-auto">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-white tracking-tight">
          Mes <span className="text-emerald-400">Compétences</span>
        </h2>
        <ul className="flex flex-wrap justify-center gap-3">
          {mySkills.map((s) => (
            <li
              key={s}
              className="px-5 py-2 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-300 font-medium text-sm md:text-base hover:border-emerald-500/50 hover:text-emerald-400"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
