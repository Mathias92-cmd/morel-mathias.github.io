import Link from "next/link";

export default function Project() {
  const projects = [
    {
      name: "Tableau de bord en Django",
      description:
        "Création d'un tableau de bord interactif permettant de suivre les évolutions de différentes monnaies en utilisant Django.",
      project_link:
        "https://github.com/Mathias92-cmd/TableauDeBord?tab=readme-ov-file",
    },
    {
      name: "Application de Quiz en React",
      description:
        "Conception d'une application de quiz avec React, associée à MongoDB pour la gestion des données, permettant d'approfondir mes compétences en développement front-end et bases NoSQL.",
      project_link: "https://github.com/Mathias92-cmd/Quiz-App",
    },
    {
      name: "Apexdle",
      description:
        "Développement d'un jeu de mots inspiré de Wordle, nommé Apexdle, utilisant Angular",
      project_link: "https://github.com/Mathias92-cmd/Apexdle",
    },
  ];

  return (
    <section className="bg-slate-950 py-12 px-4 content-auto">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-white tracking-tight">
          Projets <span className="text-emerald-400">Réalisés</span>
        </h2>
        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border border-slate-800 rounded-xl p-6 w-full text-left bg-slate-900/60"
            >
              <h3 className="text-2xl font-semibold mb-2 text-emerald-400">
                {project.name}
              </h3>
              <p className="text-slate-200">{project.description}</p>
              {project.project_link && (
                <Link
                  href={project.project_link}
                  className="text-emerald-400 hover:underline mt-4 inline-block"
                  target="_blank"
                >
                  Voir le projet
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
