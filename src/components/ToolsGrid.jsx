import { FileText, FileSpreadsheet, Presentation, Image, Scissors, Lock, Unlock, RotateCcw, Type, Hash, Wand2, Scan, Search } from "lucide-react";

const tools = [
  { name: "Merge PDF", desc: "Combine PDFs in the order you want.", icon: FileText },
  { name: "Split PDF", desc: "Extract pages into separate files.", icon: Scissors },
  { name: "Compress PDF", desc: "Reduce file size, keep quality.", icon: Wand2 },
  { name: "PDF to Word", desc: "Convert PDF to DOC/DOCX.", icon: FileText },
  { name: "PDF to PowerPoint", desc: "Convert PDF to PPT/PPTX.", icon: Presentation },
  { name: "PDF to Excel", desc: "Turn tables into spreadsheets.", icon: FileSpreadsheet },
  { name: "Word to PDF", desc: "Make docs easy to read.", icon: FileText },
  { name: "PowerPoint to PDF", desc: "Share slides easily.", icon: Presentation },
  { name: "Excel to PDF", desc: "Share spreadsheets as PDF.", icon: FileSpreadsheet },
  { name: "PDF to JPG", desc: "Export pages as images.", icon: Image },
  { name: "JPG to PDF", desc: "Create PDFs from images.", icon: Image },
  { name: "Rotate PDF", desc: "Rotate pages as needed.", icon: RotateCcw },
  { name: "Unlock PDF", desc: "Remove password security.", icon: Unlock },
  { name: "Protect PDF", desc: "Encrypt with a password.", icon: Lock },
  { name: "Watermark", desc: "Stamp text or images.", icon: Type },
  { name: "Page numbers", desc: "Add page numbering.", icon: Hash },
  { name: "Scan to PDF", desc: "Capture from mobile.", icon: Scan },
  { name: "OCR PDF", desc: "Make scanned PDFs searchable.", icon: Search },
];

export default function ToolsGrid() {
  return (
    <section id="tools" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-white" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              All the PDF tools you need
            </h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Work smarter with a complete suite: organize, optimize, convert, edit, and secure your PDFs in seconds.
            </p>
          </div>
          <a href="#workflow" className="hidden sm:inline-flex text-slate-700 hover:text-slate-900 font-medium">Create a workflow →</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <button
              key={tool.name}
              className="group relative rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-sky-50 text-sky-700 p-2 ring-1 ring-sky-100">
                  <tool.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{tool.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{tool.desc}</p>
                </div>
              </div>
              <span className="pointer-events-none absolute right-5 top-5 text-slate-300 group-hover:text-sky-400" aria-hidden>
                →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
