import { useState } from "react"

function TechTree() {
  const categories = [
    { key: "industry", label: "Industry" },
    { key: "infantry", label: "Infantry" },
    { key: "armor", label: "Armor" },
    { key: "air", label: "Air" },
    { key: "naval", label: "Naval" },
  ]

  const techs = {
    industry: [
      { year: 1936, name: "Basic Machine Tools" },
      { year: 1937, name: "Improved Machine Tools" },
      { year: 1939, name: "Advanced Machine Tools" },
      { year: 1941, name: "Construction I-II-III" },
    ],
    infantry: [
      { year: 1936, name: "Infantry Equipment I" },
      { year: 1939, name: "Infantry Equipment II" },
      { year: 1942, name: "Infantry Equipment III" },
    ],
    armor: [
      { year: 1936, name: "Light Tank I" },
      { year: 1939, name: "Medium Tank I" },
      { year: 1941, name: "Medium Tank II" },
    ],
    air: [
      { year: 1936, name: "Fighter I" },
      { year: 1939, name: "Fighter II" },
      { year: 1943, name: "Fighter III" },
    ],
    naval: [
      { year: 1936, name: "Destroyer I" },
      { year: 1938, name: "Submarine II" },
      { year: 1940, name: "Battleship II" },
    ],
  }

  const [active, setActive] = useState("industry")

  return (
    <section id="tech" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Tech Tree (overview)</h2>
        <div className="flex items-center gap-2">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`text-sm px-3 py-1.5 rounded border transition-colors ${
                active === c.key
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "bg-slate-800/40 border-slate-700 text-blue-100 hover:bg-slate-800/60"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {techs[active].map((t) => (
          <div key={t.name} className="p-4 rounded-lg bg-slate-800/40 border border-slate-700">
            <div className="text-xs text-blue-300/80">{t.year}</div>
            <div className="text-white font-medium">{t.name}</div>
          </div>
        ))}
      </div>

      <p className="text-blue-200/80 text-sm mt-4">This is a simplified view. In-game tech paths include ahead-of-time penalties and dependencies.</p>
    </section>
  )
}

export default TechTree
