import { button, buttonSecondary, container, eyebrow, pageDescription, pageTitle, pageTop, section } from "../ui.js";

const courses = [
  { title: "Ventas y cotizaciones", tag: "01 · Clientes y pedidos", icon: "file-text", playlistId: "PL1-aSABtP6AAXaqT3KBZQZBKUXYS92QqD", description: "Tutoriales oficiales sobre cotizaciones, pedidos y gestión de ventas." },
  { title: "Facturación y contabilidad", tag: "02 · Finanzas", icon: "receipt-text", playlistId: "PL1-aSABtP6ADAzBTqJWOw6WeYTT8AeKZ_", description: "Tutoriales oficiales de Accounting sobre contabilidad, facturas y procesos financieros." },
  { title: "Inventario y control de stock", tag: "03 · Productos y almacén", icon: "package", playlistId: "PL1-aSABtP6ACBCPEZqo3sGGK48sP3xS4U", description: "Tutoriales oficiales sobre productos, operaciones de almacén y control de inventario." },
  { title: "Compras y proveedores", tag: "04 · Abastecimiento", icon: "truck", playlistId: "PL1-aSABtP6AAuKSgxCoLQEeSihruQuauG", description: "Tutoriales oficiales sobre cotizaciones, pedidos de compra y proveedores." },
  { title: "Punto de venta y caja", tag: "05 · Ventas presenciales", icon: "scan-line", playlistId: "PL1-aSABtP6ACWF_7fU-Z2H_JVwNo8_Bie", description: "Tutoriales oficiales para configurar y operar el punto de venta." }
];

export function render() {
  const learningPaths = courses.map((course) => {
    const playlistUrl = `https://www.youtube.com/playlist?list=${course.playlistId}`;
    return `
      <li class="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex gap-4"><i data-lucide="${course.icon}" class="mt-1 size-5 shrink-0 text-blue-300"></i><div><span class="text-xs font-semibold uppercase tracking-wider text-slate-400">${course.tag}</span><h3 class="mt-1 font-bold text-white">${course.title}</h3><p class="mt-1 text-sm leading-6 text-slate-400">${course.description}</p></div></div>
        <a class="inline-flex min-h-10 shrink-0 items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200 sm:ml-8" href="${playlistUrl}" target="_blank" rel="noopener noreferrer">Abrir lista en YouTube<i data-lucide="arrow-up-right" class="size-4"></i></a>
      </li>`;
  }).join("");
  const playlistPlayers = courses.map((course) => {
    const playlistUrl = `https://www.youtube.com/playlist?list=${course.playlistId}`;
    return `
      <article class="grid items-start gap-4 border-b border-slate-800 py-6 last:border-0 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] lg:gap-8">
        <div class="aspect-video w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950"><iframe class="size-full" src="https://www.youtube-nocookie.com/embed/videoseries?list=${course.playlistId}" title="Lista de reproducción Odoo: ${course.title}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="space-y-3"><span class="text-xs font-bold uppercase tracking-wider text-blue-300">${course.tag}</span><h3 class="text-xl font-bold text-white">${course.title}</h3><p class="text-sm leading-6 text-slate-400">${course.description}</p><a class="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 underline decoration-blue-300/40 underline-offset-4 hover:text-blue-200" href="${playlistUrl}" target="_blank" rel="noopener noreferrer">Ver lista completa en YouTube<i data-lucide="arrow-up-right" class="size-4"></i></a></div>
      </article>`;
  }).join("");

  return `
    <section class="${pageTop}"><div class="${container}"><span class="${eyebrow}">Centro de capacitación</span><h1 class="${pageTitle}">Aprendizaje autónomo para que tu equipo gane confianza.</h1><p class="${pageDescription}">Accede desde esta página a tutoriales oficiales de Odoo organizados por los procesos principales de un comercio.</p></div></section>
    <section class="${section}"><div class="${container}">
      <div class="border-y border-slate-800 py-5 sm:flex sm:items-center sm:justify-between sm:gap-6"><div><h2 class="font-bold text-white">Contenido oficial del canal Odoo</h2><p class="mt-1 max-w-2xl text-sm leading-6 text-slate-400">Consulta sus cursos y tutoriales publicados. La selección, idioma y disponibilidad de videos puede cambiar directamente en YouTube.</p></div><a class="${button} mt-4 shrink-0 sm:mt-0" href="https://www.youtube.com/@Odoo/courses" target="_blank" rel="noopener noreferrer">Abrir cursos<i data-lucide="external-link" class="size-4"></i></a></div>
      <div class="mb-5 mt-10"><span class="${eyebrow}">Listas oficiales integradas</span><h2 class="mt-2 text-2xl font-bold text-white sm:text-3xl">Reproduce las listas desde esta página.</h2><p class="mt-2 text-sm leading-6 text-slate-400">Cada reproductor permite avanzar por los videos de su lista; también puedes abrirla directamente en YouTube.</p></div>
      <div class="divide-y divide-slate-800 border-y border-slate-800">${playlistPlayers}</div>
      <div class="mt-5 rounded-xl border border-amber-400/20 bg-amber-400/[.06] p-4 text-sm leading-6 text-slate-300"><strong class="text-amber-200">Importante:</strong> los tutoriales oficiales pueden mostrar más módulos, opciones o funcionalidades que las incluidas en nuestros planes. El contenido no amplía el alcance contratado ni significa que esas funciones estén configuradas o incluidas; se revisan y cotizan aparte cuando se soliciten. Las pantallas y pasos pueden variar según versión, edición, localización y configuración.</div>
      <div class="mb-5 mt-10"><span class="${eyebrow}">Rutas de aprendizaje</span><h2 class="mt-2 text-2xl font-bold text-white sm:text-3xl">Más procesos para explorar.</h2><p class="mt-2 text-sm leading-6 text-slate-400">Abre las búsquedas de tutoriales del canal oficial de Odoo.</p></div>
      <ul class="divide-y divide-slate-800 border-y border-slate-800">${learningPaths}</ul>
      <p class="mt-4 text-xs leading-5 text-slate-400">Los reproductores integrados son contenido de YouTube. Al cargarlos, YouTube/Google puede recibir datos técnicos del navegador conforme a sus políticas. Los cursos, idioma, orden y disponibilidad pueden cambiar.</p>
      <div class="mt-6 flex flex-col gap-3 sm:flex-row"><a class="${buttonSecondary}" href="/documentacion/">Consultar documentación<i data-lucide="book-open" class="size-4"></i></a><a class="${button}" href="/contacto/">Solicitar capacitación<i data-lucide="message-circle" class="size-4"></i></a></div>
    </div></section>`;
}
