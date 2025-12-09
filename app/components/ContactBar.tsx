import Link from "next/link";

export default function ContactBar() {
  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-10 px-4 py-8 bg-slate-900 border-t border-slate-800">
      <div className="text-center text-slate-300 hover:text-emerald-400 transition-colors">
        <span className="block text-lg md:text-xl font-bold">
          📧 mathias190305@gmail.com
        </span>
      </div>
      <div className="text-center text-slate-300 hover:text-emerald-400 transition-colors">
        <span className="block text-lg md:text-xl font-bold">
          📞 06 35 29 22 18
        </span>
      </div>
      <div className="text-center text-slate-300 hover:text-emerald-400 transition-colors">
        <span className="block text-lg md:text-xl font-bold">
          📍 Lens, France
        </span>
      </div>
      <div className="text-center text-slate-300 hover:text-emerald-400 transition-colors">
        <Link href="https://www.linkedin.com/in/mathias-morel/" target="_blank">
          <span className="block text-lg md:text-xl font-bold">
            🔗 Linkedin
          </span>
        </Link>
      </div>
      <div className="text-center text-slate-300 hover:text-emerald-400 transition-colors">
        <span className="block text-lg md:text-xl font-bold">
          🚗 Permis + voiture
        </span>
      </div>
    </div>
  );
}
