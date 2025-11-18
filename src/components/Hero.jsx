import { ArrowRight, PlayCircle } from "lucide-react"

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(2,6,23,0.7), rgba(2,6,23,0.8)), url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 py-24 sm:py-28 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow">
          Hearts of Iron IV
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
          Grand strategy set in the tumult of World War II. Manage your nation’s industry, diplomacy, and armed forces to rewrite history.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="https://store.steampowered.com/app/394360/Hearts_of_Iron_IV/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 rounded-lg transition-colors"
          >
            Get on Steam
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com/results?search_query=hearts+of+iron+4+beginners+guide"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-lg backdrop-blur transition-colors"
          >
            <PlayCircle className="w-5 h-5" />
            Watch a guide
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
