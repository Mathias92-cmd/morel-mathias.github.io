export default function Experience() {
  const experiences = [
    {
      year: "2025 (avril - juin 2025)",
      summary: "Stage en développement - Azenda",
      description: [
        "Développement de la partie administrateur d'une application mobile",
        "Mise en place d'une interface avec React et React Router pour la navigation",
        "Écriture de tests automatisés avec Playwright afin d'assurer la fiabilité des fonctionnalités",
        "Utilisation de Valibot pour la validation des formulaires et la sécurisation des entrées",
      ],
    },
    {
      year: "2025",
      summary: "Projet universitaire - Application de location de voitures",
      description: [
        "Réalisation en équipe d'une application web complète de location de véhicules",
        "Développement du front-end en Angular et du back-end en Laravel",
        "Travail collaboratif avec gestion de projet et intégration continue",
      ],
    },
  ];

  return (
    <section className="bg-slate-900 py-12 px-4 content-auto">
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Expériences <span className="text-emerald-400">Professionnelles</span>
        </h2>

        {experiences.map((xp) => (
          <div
            key={xp.summary}
            className="border border-slate-800 rounded-xl p-6 w-full text-left bg-slate-900/60"
          >
            <h3 className="text-lg font-semibold text-emerald-400 mb-4">
              {xp.summary}{" "}
              <span className="text-slate-400 text-sm font-normal">
                ({xp.year})
              </span>
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {xp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
