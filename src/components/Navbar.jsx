import { Menu } from "lucide-react"
import { useState } from "react"

const links = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#guides", label: "Nation Guides" },
  { href: "#dlc", label: "DLC" },
  { href: "#templates", label: "Unit Templates" },
  { href: "#tech", label: "Tech Tree" },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 bg-slate-900/90 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#home" className="font-semibold text-white tracking-tight">HOI4 Hub</a>
        <nav className="hidden md:flex items-center gap-6 text-blue-200/90">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors text-sm">
              {l.label}
            </a>
          ))}
        </nav>
        <button className="md:hidden text-blue-100" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-800">
          <div className="px-6 py-3 grid gap-2 bg-slate-900/95">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-blue-100 hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
