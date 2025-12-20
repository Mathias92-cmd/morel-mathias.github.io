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
    <section className="bg-slate-950 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-white tracking-tight">
          Mes <span className="text-emerald-400">Compétences</span>
        </h2>
        <ul className="flex flex-wrap justify-center gap-3">
          {mySkills.map((s) => (
            <li key={s} className="skill-badge">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
