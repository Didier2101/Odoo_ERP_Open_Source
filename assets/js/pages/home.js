import { plans, planRow } from "../plans-data.js";
import { button, buttonSecondary, callout, container, eyebrow, finePrint, section, sectionHeading } from "../ui.js";

export function render() {
  const barHeights = ["h-8", "h-12", "h-10", "h-16", "h-14", "h-20", "h-14"];
  const bars = barHeights.map((height) => `<span class="flex-1 rounded-t bg-gradient-to-t from-blue-800 to-blue-400 ${height}"></span>`).join("");
  return `
    <section class="relative overflow-hidden bg-[radial-gradient(ellipse_at_75%_25%,rgba(30,85,191,.2),transparent_48%),linear-gradient(180deg,#0b111d,#090d16)] py-14 sm:py-20 lg:py-24">
      <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(139,162,196,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,162,196,.05)_1px,transparent_1px)] bg-size-[46px_46px]"></div>
      <div class="${container} relative grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
        <div>
          <span class="${eyebrow}">Implementación Odoo 19 Community</span>
          <h1 class="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">Tu ERP autogestionado. <span class="text-blue-400">Bajo tu control.</span></h1>
          <p class="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">Implementación profesional para ferreterías, distribuidoras y comercios. Despliega Odoo en tu infraestructura y conserva el control de tus datos.</p>
          <div class="mt-6 flex flex-wrap gap-2">
            <span class="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-200 sm:text-sm"><i data-lucide="badge-check" class="size-4 text-emerald-400"></i>Community · LGPLv3</span>
            <span class="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-200 sm:text-sm"><i data-lucide="server" class="size-4 text-blue-300"></i>Local o remoto</span>
            <span class="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-200 sm:text-sm"><i data-lucide="graduation-cap" class="size-4 text-violet-300"></i>Formación incluida</span>
          </div>
          <div class="mt-7 flex flex-col gap-3 sm:flex-row">
            <a class="${button}" href="/planes/">Explorar soluciones<i data-lucide="arrow-right" class="size-4"></i></a>
            <a class="${buttonSecondary}" href="/contacto/"><i data-lucide="message-circle" class="size-4"></i>Hablar con el desarrollador</a>
          </div>
          <p class="${finePrint} mt-4">La implementación y el desarrollo se cotizan según alcance. El cliente aporta computador o servidor y paga dominio y servicios externos cuando apliquen; módulos de terceros pueden tener sus propios términos o costos.</p>
        </div>
        <div class="overflow-hidden rounded-2xl border border-slate-700 bg-[#0b111b] shadow-2xl shadow-black/40" aria-label="Vista ilustrativa de un panel de gestión">
          <div class="flex h-12 items-center justify-between border-b border-slate-800 px-4 text-xs text-slate-500"><span class="flex gap-1.5"><i class="size-2 rounded-full bg-slate-600"></i><i class="size-2 rounded-full bg-slate-600"></i><i class="size-2 rounded-full bg-slate-600"></i></span><span>ODOO · PANEL DE OPERACIÓN</span><i data-lucide="ellipsis" class="size-5"></i></div>
          <div class="grid min-h-80 grid-cols-[40px_1fr] sm:grid-cols-[48px_1fr]">
            <div class="flex flex-col items-center gap-5 border-r border-slate-800 bg-[#090e17] py-5 text-slate-600"><i data-lucide="grid-2x2" class="size-4 text-blue-400"></i><i data-lucide="shopping-cart" class="size-4"></i><i data-lucide="package" class="size-4"></i><i data-lucide="users" class="size-4"></i><i data-lucide="settings-2" class="size-4"></i></div>
            <div class="min-w-0 p-4 sm:p-6">
              <div class="flex items-start justify-between gap-2"><div><span class="text-[.62rem] tracking-wider text-slate-500">RESUMEN DEL NEGOCIO</span><strong class="mt-1 block text-base font-bold text-white sm:text-lg">Operación en orden</strong></div><span class="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[.65rem] text-emerald-300">Sistema listo</span></div>
              <div class="mt-5 grid grid-cols-2 gap-2.5">
                <div class="rounded-xl border border-slate-800 bg-slate-900/80 p-3"><span class="text-xs text-slate-400">Ventas de hoy</span><strong class="mt-2 block text-lg font-bold text-white">$2.480.000</strong><small class="mt-1 block text-[.65rem] text-slate-500">Panel ilustrativo</small></div>
                <div class="rounded-xl border border-slate-800 bg-slate-900/80 p-3"><span class="text-xs text-slate-400">Pedidos</span><strong class="mt-2 block text-lg font-bold text-white">38</strong><small class="mt-1 block text-[.65rem] text-slate-500">Actividad de ejemplo</small></div>
              </div>
              <div class="mt-3 rounded-xl border border-slate-800 bg-slate-900/80 p-3"><div class="mb-3 flex justify-between gap-2 text-xs"><strong>Actividad comercial</strong><span class="text-slate-500">Vista de ejemplo</span></div><div class="flex h-20 items-end gap-2">${bars}</div><div class="mt-2 flex justify-between text-[.6rem] text-slate-600"><span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span><span>Vie</span><span>Sáb</span><span>Dom</span></div></div>
              <div class="mt-3 flex items-center gap-2 rounded-xl border border-blue-400/15 bg-blue-400/[.06] p-3 text-xs leading-5 text-slate-300"><i data-lucide="shield-check" class="size-5 shrink-0 text-blue-300"></i>La arquitectura y el alojamiento se definen contigo.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="${section}">
      <div class="${container}">
        <div class="${sectionHeading}"><span class="${eyebrow}">Soluciones de instalación</span><h2 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Empieza por la infraestructura que tu operación necesita.</h2><p class="mt-4 max-w-2xl text-base leading-7 text-slate-400">Elige una solución para conocer sus detalles técnicos, alcance y requisitos.</p></div>
        <div class="divide-y divide-slate-800">${planRow(plans.monopuesto)}${planRow(plans["red-local"])}${planRow(plans["remoto-seguro"])}</div>
        <div class="${callout} mt-6"><div><h2 class="text-xl font-bold text-white">¿No sabes cuál se adapta a tu negocio?</h2><p class="mt-2 max-w-2xl text-sm leading-6 text-slate-400">Revisamos cantidad de usuarios, procesos, equipos y conectividad para proponerte una arquitectura adecuada.</p></div><a class="${buttonSecondary}" href="/contacto/">Solicitar orientación<i data-lucide="arrow-right" class="size-4"></i></a></div>
        <div class="mt-8 border-y border-slate-800 py-5 sm:flex sm:items-center sm:justify-between sm:gap-6"><div><h2 class="font-bold text-white">¿Prefieres el servicio oficial en la nube?</h2><p class="mt-1 max-w-2xl text-sm leading-6 text-slate-400">Odoo Online es alojado y administrado por Odoo. La prueba, disponibilidad de aplicaciones, límites y precio dependen de sus condiciones vigentes; las bases Online no admiten módulos personalizados con código.</p></div><div class="mt-4 flex shrink-0 flex-wrap gap-3 sm:mt-0"><a class="text-sm font-semibold text-blue-300 hover:text-blue-200" href="https://www.odoo.com/trial" target="_blank" rel="noopener noreferrer">Probar Odoo oficial<i data-lucide="arrow-up-right" class="ml-1 inline size-4"></i></a><a class="text-sm font-semibold text-blue-300 hover:text-blue-200" href="https://www.odoo.com/pricing" target="_blank" rel="noopener noreferrer">Ver precios y planes<i data-lucide="arrow-up-right" class="ml-1 inline size-4"></i></a>        <a class="text-sm font-semibold text-blue-300 hover:text-blue-200" href="https://www.odoo.com/documentation/19.0/administration/odoo_online.html" target="_blank" rel="noopener noreferrer">Qué es Odoo Online<i data-lucide="arrow-up-right" class="ml-1 inline size-4"></i></a></div></div>
      </div>
    </section>

    <section class="${section} pt-0">
      <div class="${container}">
        <div class="${sectionHeading}"><span class="${eyebrow}">Una plataforma para tu operación</span><h2 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Procesos conectados, con alcance claro.</h2><p class="mt-4 max-w-2xl text-base leading-7 text-slate-400">Explora aplicaciones y funcionalidades de Odoo. La disponibilidad específica depende de Community, los módulos instalados y la configuración del proyecto.</p></div>
        <ul class="divide-y divide-slate-800">
          <li class="flex gap-4 py-4"><i data-lucide="scan-line" class="mt-1 size-5 shrink-0 text-blue-300"></i><div><h3 class="font-bold text-white">Punto de venta</h3><p class="mt-1 text-sm leading-6 text-slate-400">Flujo de caja, productos y operación de tienda en el sistema.</p></div></li>
          <li class="flex gap-4 py-4"><i data-lucide="package" class="mt-1 size-5 shrink-0 text-blue-300"></i><div><h3 class="font-bold text-white">Inventario</h3><p class="mt-1 text-sm leading-6 text-slate-400">Productos, movimientos y unidades de medida con una configuración coherente.</p></div></li>
          <li class="flex gap-4 py-4"><i data-lucide="shopping-bag" class="mt-1 size-5 shrink-0 text-blue-300"></i><div><h3 class="font-bold text-white">Compras y ventas</h3><p class="mt-1 text-sm leading-6 text-slate-400">Pedidos, cotizaciones y relación con clientes y proveedores.</p></div></li>
          <li class="flex gap-4 py-4"><i data-lucide="chart-no-axes-combined" class="mt-1 size-5 shrink-0 text-blue-300"></i><div><h3 class="font-bold text-white">Gestión integrada</h3><p class="mt-1 text-sm leading-6 text-slate-400">Construye una base de trabajo compartida para las áreas del negocio.</p></div></li>
        </ul>
        <div class="mt-6 flex flex-col gap-3 sm:flex-row"><a class="${buttonSecondary}" href="/documentacion/">Explorar documentación<i data-lucide="arrow-right" class="size-4"></i></a><a class="${buttonSecondary}" href="/cursos/">Ir a capacitación<i data-lucide="graduation-cap" class="size-4"></i></a></div>
      </div>
    </section>
    <section class="pb-14 sm:pb-20"><div class="${container}"><div class="${callout}"><div><span class="${eyebrow}">Desarrollo de software transparente</span><h2 class="mt-3 text-xl font-bold text-white">Implementación profesional, con licencias y alcance claros.</h2><p class="mt-2 max-w-2xl text-sm leading-6 text-slate-400">Conoce el modelo de trabajo de Didier Chávez y qué incluye el acompañamiento técnico.</p></div><a class="${button}" href="/propuesta/">Conocer la propuesta<i data-lucide="arrow-right" class="size-4"></i></a></div></div></section>`;
}
