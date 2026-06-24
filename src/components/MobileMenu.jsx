import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "Start", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Preise", href: "/preise" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen((value) => !value)}
        className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-950 shadow-sm transition active:scale-95"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={open}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="Menü schließen"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[55] bg-zinc-950/35 backdrop-blur-sm"
          />

          <div className="fixed inset-x-3 top-24 z-[60] overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-2xl">
            <div className="px-5 py-5">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-zinc-400">
                Menü
              </p>

              <nav className="flex flex-col">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-4 py-4 text-lg font-medium text-zinc-900 transition hover:bg-zinc-50"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-4 grid gap-3">
                <a
                  href="/kontakt"
                  className="rounded-2xl bg-zinc-950 px-5 py-4 text-center text-sm font-medium text-white"
                  onClick={() => setOpen(false)}
                >
                  Angebot anfragen
                </a>

                <a
                  href="tel:+4915258996957"
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-center text-sm font-medium text-zinc-950"
                  onClick={() => setOpen(false)}
                >
                  Jetzt anrufen
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
