function NationGuides() {
  const nations = [
    {
      name: "Germany (1936)",
      difficulty: "Intermediate",
      path: [
        "Rush industry focuses, then army innovations",
        "Build civs until ~1938 then swap to mils",
        "Template: 7 infantry + 2 artillery with support companies",
        "Air: 1k fighters on Western Germany, then move east",
      ],
      tip: "Justify on Netherlands/Belgium for naval access if needed.",
    },
    {
      name: "Italy (1936)",
      difficulty: "Beginner+",
      path: [
        "Secure Ethiopia, focus on industry and army",
        "Build dockyards + mils, prepare for Mediterranean control",
        "Use naval supremacy + air to invade Balkans/North Africa",
      ],
      tip: "Close the Med with Gibraltar + Suez to starve enemies.",
    },
    {
      name: "USA (1936)",
      difficulty: "Beginner",
      path: [
        "Maximise civilian industry and research boosts early",
        "Go partial mobilisation after world tension allows",
        "Focus on navy and air to project power globally",
      ],
      tip: "Use lend-lease to support allies before joining the war.",
    },
  ]

  return (
    <section id="guides" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Nation Quick Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nations.map((n) => (
          <div key={n.name} className="p-5 rounded-xl bg-slate-800/40 border border-slate-700">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold text-lg">{n.name}</h3>
              <span className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">{n.difficulty}</span>
            </div>
            <ul className="list-disc pl-5 text-blue-200/80 text-sm mt-3 space-y-1">
              {n.path.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
            <p className="text-blue-100 mt-3 text-sm"><span className="text-blue-300/90">Tip:</span> {n.tip}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NationGuides
