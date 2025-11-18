import { Factory, Shield, Swords, LandPlot, Ship, Plane } from "lucide-react"

function Feature({ icon: Icon, title, description }) {
  return (
    <div className="p-6 bg-slate-800/40 border border-slate-700 rounded-xl hover:bg-slate-800/60 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-300">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-blue-200/80 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">What makes HOI4 special</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Feature
          icon={Factory}
          title="Industrial Power"
          description="Balance your civilian and military factories, manage resources, and optimize your production lines to outproduce your rivals."
        />
        <Feature
          icon={Swords}
          title="Strategic Warfare"
          description="Plan land offensives, control naval supremacy, and achieve air superiority to secure victory on every front."
        />
        <Feature
          icon={Shield}
          title="Politics & Diplomacy"
          description="Choose national focuses, forge alliances, and reshape ideology to steer your nation’s destiny."
        />
        <Feature
          icon={LandPlot}
          title="Land Forces"
          description="Design divisions with templates, manage supply, and execute encirclements for decisive breakthroughs."
        />
        <Feature
          icon={Ship}
          title="Naval Operations"
          description="Build fleets, raid convoys, and control sea lanes to support invasions and protect your logistics."
        />
        <Feature
          icon={Plane}
          title="Air Power"
          description="Deploy fighters, bombers, and CAS to dominate the skies and support ground operations."
        />
      </div>
    </section>
  )
}

export default Features
