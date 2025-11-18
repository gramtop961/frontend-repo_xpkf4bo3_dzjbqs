import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import NationGuides from './components/NationGuides'
import DLC from './components/DLC'
import UnitTemplates from './components/UnitTemplates'
import TechTree from './components/TechTree'
import Guide from './components/Guide'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_45%)] pointer-events-none"></div>

      <div className="relative" id="home">
        <Navbar />
        <Hero />
        <div id="features"><Features /></div>
        <NationGuides />
        <DLC />
        <UnitTemplates />
        <TechTree />
        <Guide />
        <Footer />
      </div>
    </div>
  )
}

export default App
