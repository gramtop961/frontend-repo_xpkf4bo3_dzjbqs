import Hero from './components/Hero'
import Features from './components/Features'
import Guide from './components/Guide'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_45%)] pointer-events-none"></div>

      {/* Content */}
      <div className="relative">
        <Hero />
        <Features />
        <Guide />
        <Footer />
      </div>
    </div>
  )
}

export default App
