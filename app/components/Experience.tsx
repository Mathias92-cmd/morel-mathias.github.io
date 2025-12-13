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
    <section className="bg-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-white tracking-tight">
          Expériences <span className="text-emerald-400">Professionnelles</span>
        </h2>

        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {experiences.map((xp) => (
            <div
              key={`${xp.summary}-${xp.year}`}
              className="border border-slate-800 rounded-xl p-6 w-full text-left bg-slate-900/60"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <span className="text-emerald-400 font-semibold text-lg">
                  {xp.summary}
                </span>
                <span className="text-slate-400 text-sm">{xp.year}</span>
              </div>

              <ul className="mt-4 list-disc list-inside space-y-2 text-slate-200">
                {xp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
