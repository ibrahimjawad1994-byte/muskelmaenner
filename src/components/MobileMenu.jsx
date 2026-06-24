import { useEffect, useState } from "react";
import { Home, Menu, Package, Phone, ShieldCheck, Tag, X } from "lucide-react";
import { company } from "../config/company";

const navigation = [
  {
    label: "Startseite",
    sub: "Überblick",
    href: "/",
    icon: Home,
  },
  {
    label: "Leistungen",
    sub: "Unsere Services",
    href: "/leistungen",
    icon: Package,
  },
  {
    label: "Preise",
    sub: "Transparente Preise",
    href: "/preise",
    icon: Tag,
  },
  {
    label: "Kontakt",
    sub: "Wir sind für Sie da",
    href: "/kontakt",
    icon: Phone,
  },
];

const whatsappText =
  "Hallo Muskelmänner! Ich möchte eine Entrümpelung anfragen.";

const waHref = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
  whatsappText,
)}`;

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Menü öffnen"
        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-950 shadow-lg shadow-zinc-950/10 transition active:scale-95"
      >
        <Menu size={27} strokeWidth={2} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <button
            type="button"
            aria-label="Menü schließen"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-zinc-950/35 backdrop-blur-sm"
          />

          <aside className="absolute right-0 top-0 flex h-dvh w-[86vw] max-w-[390px] flex-col overflow-y-auto bg-zinc-950 px-7 py-7 text-white shadow-2xl">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            </div>

            <div className="relative">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Menü schließen"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl text-white/80 transition hover:bg-white/10"
                >
                  <X size={30} strokeWidth={1.8} />
                </button>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white text-zinc-950">
                  <div className="flex flex-col items-center justify-center leading-none">
                    <span className="font-serif text-[34px] leading-[0.72] tracking-[-0.08em]">
                      M
                    </span>
                    <span className="-mt-1 font-serif text-[34px] leading-[0.72] tracking-[-0.08em]">
                      M
                    </span>
                  </div>
                </div>

                <div className="min-w-0">
                  <p className="truncate font-serif text-2xl tracking-[0.18em]">
                    MUSKELMÄNNER
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="h-px w-8 bg-white/30" />
                    <p className="truncate text-[9px] uppercase tracking-[0.28em] text-zinc-400">
                      Entrümpelung Berlin
                    </p>
                  </div>
                </div>
              </div>

              <nav className="mt-12">
                {navigation.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-5 border-b border-white/10 py-6"
                    >
                      <Icon
                        size={34}
                        strokeWidth={1.6}
                        className="shrink-0 text-white/65"
                      />

                      <div className="min-w-0 flex-1">
                        <p className="text-lg font-semibold text-white">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm text-zinc-400">{item.sub}</p>
                      </div>

                      <span className="text-3xl font-light text-white/60">
                        ›
                      </span>
                    </a>
                  );
                })}
              </nav>

              <div className="mt-8 grid gap-4">
                <a
                  href={`tel:${company.phoneTel}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 rounded-3xl border border-white/15 bg-white/5 p-4"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-zinc-950">
                    <Phone size={25} />
                  </span>

                  <span>
                    <span className="block text-base text-zinc-300">
                      Jetzt anrufen
                    </span>
                    <span className="block text-lg font-semibold text-white">
                      {company.phoneDisplay}
                    </span>
                  </span>
                </a>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  data-analytics-event="whatsapp_click"
                  data-analytics-label="Mobile Menu WhatsApp"
                  className="flex items-center gap-4 rounded-3xl bg-white p-4 text-zinc-950"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-zinc-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="h-7 w-7 fill-current"
                    >
                      <path d="M19.11 17.38c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.12-.41-2.13-1.31-.79-.7-1.32-1.56-1.47-1.82-.16-.27-.02-.41.12-.55.13-.13.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.45-.82-1.98-.22-.53-.45-.45-.6-.46h-.51c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.13.18 1.9 2.9 4.6 4.07.64.27 1.14.43 1.53.55.64.2 1.22.17 1.68.1.51-.08 1.58-.65 1.8-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.31zM16.01 3C8.83 3 3 8.82 3 16c0 2.54.74 4.99 2.13 7.09L3.5 28.5l5.56-1.6A12.95 12.95 0 0016.01 29C23.18 29 29 23.18 29 16S23.18 3 16.01 3zm0 23.67c-2.09 0-4.14-.56-5.93-1.63l-.42-.25-3.3.95.88-3.22-.27-.44A10.63 10.63 0 015.33 16c0-5.88 4.79-10.67 10.68-10.67 2.85 0 5.53 1.11 7.54 3.13A10.6 10.6 0 0126.68 16c0 5.88-4.79 10.67-10.67 10.67z" />
                    </svg>
                  </span>

                  <span>
                    <span className="block text-lg font-semibold">
                      WhatsApp Anfrage
                    </span>
                    <span className="block text-sm text-zinc-500">
                      Schnell & unkompliziert
                    </span>
                  </span>
                </a>
              </div>

              <div className="mt-9 flex items-start gap-4 text-zinc-300">
                <ShieldCheck size={28} className="shrink-0 text-white" />
                <div>
                  <p className="font-serif text-xl text-white">
                    Schnell. Sauber. Zuverlässig.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Entrümpelung in Berlin & Brandenburg
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
