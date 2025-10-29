import { Globe, Shield, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-xl font-bold text-slate-900">Orbix PDF</p>
            <p className="text-sm text-slate-600">© Orbix Pdf2025 ® - Your PDF Editor</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900 inline-flex items-center gap-1">
              <Shield className="h-4 w-4" />
              Privacy
            </a>
            <a href="#" className="hover:text-slate-900 inline-flex items-center gap-1">
              <Globe className="h-4 w-4" />
              English
            </a>
            <a href="#" className="hover:text-slate-900 inline-flex items-center gap-1">
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
