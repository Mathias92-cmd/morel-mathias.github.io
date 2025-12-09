export default function Formation() {
  return (
    <section className="bg-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-white tracking-tight">
          Ma <span className="text-emerald-400">Formation</span>
        </h2>
        <div className="flex flex-col gap-6 max-w-2xl mx-auto">
          <div className="border border-slate-800 rounded-xl p-6 w-full">
            <h3 className="text-2xl font-semibold mb-2 text-emerald-400">
              BUT Informatique
            </h3>
            <h3 className="text-md font-medium text-slate-300">
              2023 - En cours
            </h3>
          </div>
          <div className="border border-slate-800 rounded-xl p-6 w-full">
            <h3 className="text-2xl font-semibold mb-2 text-emerald-400">
              BAC STI2D - OPTION SIN
            </h3>
            <h3 className="text-md font-medium text-slate-300">2020 - 2023</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
