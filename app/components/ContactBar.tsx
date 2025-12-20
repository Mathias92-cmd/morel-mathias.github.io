import Link from "next/link";
import { text } from "stream/consumers";

export default function ContactBar() {
  const infos = [
    { icon: "📧", text: "mathias190305@gmail.com" },
    { icon: "📞", text: "06 35 29 22 18" },
    { icon: "📍", text: "Lens, France" },
    { icon: "🔗", text: "Linkedin" },
    { icon: "🚗", text: "Permis + voiture" },
    { icon: "🔗", text: "Github" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-10 px-4 py-8 bg-slate-900 border-t border-slate-800">
      {infos.map((info) => (
        <div
          key={info.text}
          className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
        >
          <span className="text-2xl">{info.icon}</span>
          {info.text === "Linkedin" ? (
            <Link
              href="https://www.linkedin.com/in/mathias-morel/"
              target="_blank"
            >
              {info.text}
            </Link>
          ) : info.text === "Github" ? (
            <Link href="https://github.com/Mathias92-cmd" target="_blank">
              {info.text}
            </Link>
          ) : (
            <span>{info.text}</span>
          )}
        </div>
      ))}
    </div>
  );
}
