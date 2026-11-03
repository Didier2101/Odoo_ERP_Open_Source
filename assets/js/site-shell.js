const navigation = [
  { label: "Inicio", href: "/", key: "home" },
  { label: "Propuesta", href: "/propuesta/", key: "propuesta" },
  { label: "Planes", href: "/planes/", key: "plans" },
  { label: "Documentación", href: "/documentacion/", key: "documentation" },
  { label: "Capacitación", href: "/cursos/", key: "courses" },
  { label: "Contacto", href: "/contacto/", key: "contact" },
  { label: "Legal y privacidad", href: "/aviso-legal/", key: "legal" }
];

const whatsappUrl = "https://wa.me/573028645014?text=Hola%20Didier%2C%20quiero%20consultar%20la%20instalacion%20de%20Odoo%2019%20Open%20Source";

function navLinks(activePage, mobile = false) {
  return navigation.map(({ label, href, key }) =>
    `<a class="rounded-lg px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white ${activePage === key ? "bg-slate-800 text-white" : ""}" href="${href}"${activePage === key ? ' aria-current="page"' : ""}${mobile ? ' data-mobile-link' : ""}>${label}</a>`
  ).join("");
}

export function renderShell(activePage) {
  const activeNavigationKey = activePage === "plan-detail" ? "plans" : activePage;
  document.querySelector("#site-header").innerHTML = `
    <header class="sticky top-0 z-30 border-b border-white/10 bg-[#090d16]/95 text-white backdrop-blur-xl">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav class="flex min-h-[72px] items-center justify-between gap-2 sm:gap-4" aria-label="Navegación principal">
          <a class="inline-flex min-w-0 items-center gap-3" href="/" aria-label="Odoo ERP Open Source, inicio">
            <span class="grid size-10 shrink-0 place-items-center rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-950/30"><i data-lucide="boxes" class="size-5"></i></span>
            <span class="min-w-0"><span class="block text-xs font-extrabold tracking-tight sm:text-sm">Odoo ERP Open Source</span><span class="mt-0.5 block truncate text-[.68rem] text-slate-400">IMPLEMENTACIÓN INDEPENDIENTE · DIDIER CHÁVEZ</span></span>
          </a>
          <div class="hidden items-center gap-1 xl:flex">${navLinks(activeNavigationKey)}</div>
          <div class="flex shrink-0 items-center gap-2">
            <a class="hidden min-h-10 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-bold text-white transition hover:bg-blue-500 sm:inline-flex" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer"><i data-lucide="message-circle" class="size-4"></i>Cotizar</a>
            <button class="grid size-10 place-items-center rounded-lg border border-slate-700 bg-slate-900 text-white hover:bg-slate-800 xl:hidden" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-nav"><i data-lucide="menu" class="size-5"></i></button>
          </div>
        </nav>
        <div class="hidden border-t border-white/10 py-3 xl:hidden" id="mobile-nav" role="navigation" aria-label="Navegación móvil">
          <div class="grid gap-1">${navLinks(activeNavigationKey, true)}
            <a class="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white sm:hidden" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer"><i data-lucide="message-circle" class="size-4"></i>Cotizar por WhatsApp</a>
          </div>
        </div>
      </div>
    </header>`;

  document.querySelector("#site-footer").innerHTML = `
    <footer class="mt-8 border-t border-white/10 bg-[#080b12]">
      <div class="mx-auto max-w-5xl px-4 py-6 text-xs text-slate-400 sm:px-6 lg:px-8">© <span data-year></span> Didier Chávez</div>
    </footer>`;

  const toggle = document.querySelector("#site-header button[aria-controls='mobile-nav']");
  const mobileNav = document.querySelector("#mobile-nav");
  const closeMobileNav = () => {
    mobileNav.classList.add("hidden");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
    toggle.innerHTML = '<i data-lucide="menu" class="size-5"></i>';
    window.lucide?.createIcons();
  };
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    toggle.setAttribute("aria-label", expanded ? "Abrir menú" : "Cerrar menú");
    mobileNav.classList.toggle("hidden", expanded);
    toggle.innerHTML = `<i data-lucide="${expanded ? "menu" : "x"}" class="size-5"></i>`;
    window.lucide?.createIcons();
  });
  mobileNav.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileNav();
      toggle.focus();
    }
  });
  mobileNav.querySelectorAll("[data-mobile-link]").forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileNav();
    });
  });
}
