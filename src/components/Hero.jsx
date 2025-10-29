import { Rocket, Star, Shield, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-sky-500/10 to-amber-400/10" />
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 sm:pt-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
              <Star className="h-3.5 w-3.5 text-amber-500" />
              100% Free • Fast • Secure
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Orbix PDF
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Every tool you need to work with PDFs in one place. Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#tools"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 font-semibold shadow-sm hover:bg-slate-800 transition"
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#premium"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-3 font-semibold ring-1 ring-slate-200 hover:ring-slate-300 transition"
              >
                Explore Premium
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-600" />
                ISO27001 certified
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="h-4 w-4 text-sky-600" />
                Blazing fast
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-fuchsia-500/20 via-sky-500/20 to-amber-400/20 blur-3xl" />
            <div className="relative rounded-2xl border border-slate-200 bg-white/60 backdrop-blur p-4 shadow-xl">
              <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-white/10 grid place-items-center">
                    <Rocket className="h-6 w-6 text-amber-300" />
                  </div>
                  <p className="text-lg font-medium opacity-90">Drop your PDF to begin</p>
                  <p className="text-sm opacity-60">Drag & drop or choose a tool below</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-600">
                {[
                  "Merge",
                  "Split",
                  "Compress",
                  "PDF to Word",
                  "PDF to Excel",
                  "JPG to PDF",
                ].map((t) => (
                  <div key={t} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-center font-medium">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
