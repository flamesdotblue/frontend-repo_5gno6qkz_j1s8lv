import Hero from "./components/Hero";
import ToolsGrid from "./components/ToolsGrid";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import { Rocket } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* Top navigation */}
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-extrabold text-xl">
            <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-slate-900 text-white">
              <Rocket className="h-4 w-4" />
            </span>
            Orbix PDF
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-700">
            <a href="#tools" className="hover:text-slate-900">Tools</a>
            <a href="#workflow" className="hover:text-slate-900">Workflows</a>
            <a href="#premium" className="hover:text-slate-900">Premium</a>
          </nav>
          <a href="#tools" className="ml-6 inline-flex items-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800">
            Use tools
          </a>
        </div>
      </header>

      {/* Content sections */}
      <main>
        <Hero />
        <ToolsGrid />
        <Highlights />

        {/* Premium callout */}
        <section id="premium" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8 sm:p-12">
              <div className="max-w-2xl">
                <h3 className="text-2xl sm:text-3xl font-bold">Get more with Premium</h3>
                <p className="mt-2 text-white/80">
                  Edit PDFs, advanced OCR for scanned documents, secure e‑Signatures, and custom workflows to connect tools and automate tasks.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href="#" className="rounded-lg bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-white/90">Get Premium</a>
                  <a href="#tools" className="rounded-lg bg-white/10 text-white px-5 py-3 font-semibold hover:bg-white/15">Keep using free tools</a>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
