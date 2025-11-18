function UnitTemplates() {
  const templates = [
    {
      name: "Infantry 7/2",
      use: "General purpose attack early-mid game",
      comps: ["7x Infantry", "2x Artillery", "Support: Engineers, Artillery, Recon, AA (optional)"]
    },
    {
      name: "Infantry 14/4",
      use: "Late-game breakthrough with strong industry",
      comps: ["14x Infantry", "4x Artillery", "Support: Engineers, Arty, Recon, Logistics"]
    },
    {
      name: "Armored Mediums",
      use: "Fast breakthroughs & encirclements",
      comps: ["6x Medium Tank", "4x Motorized/Mechanized", "Support: Engineers, Maintenance, Logistics"]
    },
    {
      name: "Marines/Amphibious",
      use: "Naval invasions and river crossings",
      comps: ["9x Marines", "Support: Engineers, Arty, Logistics, Recon"]
    }
  ]

  return (
    <section id="templates" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Popular Unit Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((t) => (
          <div key={t.name} className="p-5 rounded-xl bg-slate-800/40 border border-slate-700">
            <h3 className="text-white font-semibold text-lg">{t.name}</h3>
            <p className="text-blue-200/80 text-sm mt-1">Use: {t.use}</p>
            <ul className="list-disc pl-5 text-blue-200/80 text-sm mt-3 space-y-1">
              {t.comps.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default UnitTemplates
