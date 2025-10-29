import { Laptop, Smartphone, Monitor, ShieldCheck, Zap, Workflow, Share2, CheckCircle2 } from "lucide-react";

export default function Highlights() {
  const items = [
    {
      icon: Zap,
      title: "Lightning fast",
      desc: "Optimized for speed so you can get more done in less time.",
    },
    {
      icon: ShieldCheck,
      title: "Secure by default",
      desc: "Encrypted connections and privacy-first processing.",
    },
    {
      icon: Share2,
      title: "Workflows",
      desc: "Automate repetitive tasks and reuse them anytime.",
    },
    {
      icon: CheckCircle2,
      title: "Accurate conversions",
      desc: "Best-in-class PDF ↔ Office conversions that preserve layout.",
    },
  ];

  return (
    <section id="workflow" className="relative py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Work your way
            </h2>
            <p className="mt-2 text-slate-600 max-w-xl">
              Batch edit offline with Desktop or keep going on Mobile. Create custom workflows and scale with flexible plans when your team grows.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((it) => (
                <div key={it.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="rounded-md bg-emerald-50 p-2 text-emerald-700 ring-1 ring-emerald-100">
                      <it.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{it.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{it.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-slate-50 p-6 text-center">
                  <Laptop className="mx-auto h-8 w-8 text-slate-700" />
                  <p className="mt-3 font-medium">Desktop</p>
                  <p className="text-sm text-slate-600">Work offline with no limits.</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-6 text-center">
                  <Smartphone className="mx-auto h-8 w-8 text-slate-700" />
                  <p className="mt-3 font-medium">Mobile</p>
                  <p className="text-sm text-slate-600">Keep going on the go.</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-6 text-center">
                  <Monitor className="mx-auto h-8 w-8 text-slate-700" />
                  <p className="mt-3 font-medium">Web</p>
                  <p className="text-sm text-slate-600">Nothing to install.</p>
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white p-5">
                <p className="text-sm/6 opacity-90">
                  Get more with Premium: edit PDFs, advanced OCR, secure e‑Signatures and custom workflows.
                </p>
                <a href="#premium" className="mt-3 inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
