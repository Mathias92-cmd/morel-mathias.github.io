import Link from "next/link";

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
      {infos.map((info) => {
        const itemClass =
          "flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors";

        if (info.text === "Linkedin" || info.text === "Github") {
          const url =
            info.text === "Linkedin"
              ? "https://www.linkedin.com/in/mathias-morel/"
              : "https://github.com/Mathias92-cmd";

          return (
            <Link
              key={info.text}
              href={url}
              target="_blank"
              className={itemClass}
            >
              <span className="text-2xl">{info.icon}</span>
              {info.text}
            </Link>
          );
        }

        return (
          <span key={info.text} className={itemClass}>
            <span className="text-2xl">{info.icon}</span>
            {info.text}
          </span>
        );
      })}
    </div>
  );
}
