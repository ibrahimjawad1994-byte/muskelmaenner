import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  {
    label: "Start",
    href: "/",
  },
  {
    label: "Leistungen",
    href: "/leistungen",
  },
  {
    label: "Preise",
    href: "/preise",
  },
  {
    label: "Kontakt",
    href: "/kontakt",
  },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-white"
        aria-label="Menü öffnen"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-4 w-full border-y border-zinc-200 bg-white shadow-lg">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-6">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-zinc-100 py-4 text-base font-medium text-zinc-800 last:border-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="/kontakt"
              className="mt-6 rounded-2xl bg-zinc-900 px-5 py-3 text-center text-sm font-medium text-white"
            >
              Angebot anfragen
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
