function DLC() {
  const dlcs = [
    {
      title: "Together for Victory",
      focus: "Commonwealth gameplay",
      adds: ["Autonomy system", "Expanded focus trees"],
      rec: "For fans of UK/Commonwealth runs",
    },
    {
      title: "Death or Dishonor",
      focus: "Central/Eastern Europe",
      adds: ["New nation trees", "Equipment conversion"],
      rec: "Great for alt-history in the Balkans",
    },
    {
      title: "Waking the Tiger",
      focus: "China & Germany",
      adds: ["Command power", "General traits overhaul"],
      rec: "Solid mechanics upgrade",
    },
    {
      title: "Man the Guns",
      focus: "Naval overhaul",
      adds: ["Ship designer", "Naval mines"],
      rec: "Must-have for naval enjoyers",
    },
    {
      title: "La Résistance",
      focus: "Espionage",
      adds: ["Intel Agency", "Resistance mechanics"],
      rec: "If you enjoy spies and occupation play",
    },
    {
      title: "No Step Back",
      focus: "Eastern Front",
      adds: ["Supply rework", "Tank designer"],
      rec: "Huge mechanics overhaul – highly recommended",
    },
    {
      title: "By Blood Alone",
      focus: "Air & Italy",
      adds: ["Plane designer", "Italian rework"],
      rec: "Great if you love air warfare",
    },
  ]

  return (
    <section id="dlc" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">DLC Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dlcs.map((d) => (
          <div key={d.title} className="p-5 rounded-xl bg-slate-800/40 border border-slate-700">
            <h3 className="text-white font-semibold text-lg">{d.title}</h3>
            <p className="text-blue-200/80 text-sm mt-1">Focus: {d.focus}</p>
            <ul className="list-disc pl-5 text-blue-200/80 text-sm mt-3 space-y-1">
              {d.adds.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <p className="text-blue-100 mt-3 text-sm"><span className="text-blue-300/90">Recommendation:</span> {d.rec}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DLC
