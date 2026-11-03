import { plans, planRow } from "../plans-data.js";
import { button, buttonSecondary, container, eyebrow, notice, pageDescription, pageTitle, pageTop, section } from "../ui.js";

export function render() {
  const rows = [
    ["Puestos de trabajo", "Uno", "Varios en el local", "Varios, según servidor"],
    ["Infraestructura", "PC Windows", "Servidor local", "Servidor + túnel seguro"],
    ["Equipo y servicios", "PC del cliente", "Servidor y red del cliente", "Servidor, dominio y cuentas del cliente"],
    ["Acceso fuera del local", "No incluido", "No incluido", "Sí, con dominio"],
    ["Servicios web y campañas", "No incluidos", "No incluidos", "Se cotizan aparte"],
    ["Correo externo, SMS y WhatsApp", "No incluidos", "No incluidos", "No incluidos; proveedor y configuración aparte"]
  ];
  return `
    <section class="${pageTop}"><div class="${container}"><span class="${eyebrow}">Planes de instalación · Odoo 19 Community</span><h1 class="${pageTitle}">Una solución independiente para cada forma de trabajar.</h1><p class="${pageDescription}">Compara arquitectura y alcance. Cada plan tiene su propia página con detalle de instalación, requisitos y checklist técnico. La disponibilidad de módulos se confirma según edición y compatibilidad.</p></div></section>
    <section class="${section}"><div class="${container}">
      <div class="divide-y divide-slate-800">${planRow(plans.monopuesto)}${planRow(plans["red-local"])}${planRow(plans["remoto-seguro"])}</div>
      <p class="mt-4 text-sm leading-6 text-slate-400"><strong class="text-slate-200">Capacitación:</strong> en cada instalación doy una inducción práctica básica sobre el alcance acordado. No es un curso completo ni soporte continuo; para profundizar en más funciones, el cliente puede avanzar con los <a class="font-semibold text-blue-300 underline" href="https://www.youtube.com/@Odoo/courses" target="_blank" rel="noopener noreferrer">tutoriales oficiales gratuitos de Odoo en YouTube</a>. Sesiones o acompañamiento adicional se cotizan aparte.</p>
      <div class="mt-8 border-y border-slate-800 py-5 sm:flex sm:items-center sm:justify-between sm:gap-6"><div><h2 class="font-bold text-white">También puedes contratar Odoo Online directamente</h2><p class="mt-1 max-w-2xl text-sm leading-6 text-slate-400">Es la plataforma oficial alojada por Odoo. Revisa con Odoo sus planes, precio, condiciones y compatibilidad: Odoo Online no admite módulos personalizados con código.</p></div><div class="mt-4 flex shrink-0 flex-wrap gap-3 sm:mt-0"><a class="text-sm font-semibold text-blue-300 hover:text-blue-200" href="https://www.odoo.com/trial" target="_blank" rel="noopener noreferrer">Prueba oficial<i data-lucide="arrow-up-right" class="ml-1 inline size-4"></i></a><a class="text-sm font-semibold text-blue-300 hover:text-blue-200" href="https://www.odoo.com/pricing" target="_blank" rel="noopener noreferrer">Planes y precios<i data-lucide="arrow-up-right" class="ml-1 inline size-4"></i></a></div></div>
      <div class="${notice} mt-6">El cliente compra y aporta el computador o servidor, los equipos de usuario y la conectividad. En el plan remoto, también son del cliente la cuenta de Cloudflare y el dominio (incluida su compra y renovación); cuentas y servicios externos se contratan y pagan por separado. Los planes Monopuesto y Red local cubren el uso interno: no incluyen tienda web, e-commerce, chat público, empleos en línea, campañas masivas ni acceso remoto. Ningún plan incluye configurar correo externo (Gmail/Workspace), SMS o WhatsApp: requieren internet, cuentas autorizadas y proveedores compatibles; pueden generar costos y se cotizan aparte.</div>
      <div class="mt-12"><span class="${eyebrow}">Comparación rápida</span><h2 class="mt-3 text-3xl font-bold tracking-tight text-white">¿Qué cambia entre las opciones?</h2></div>
      <div class="mt-5 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/80">
        <table class="w-full min-w-[650px] border-collapse text-left text-sm">
          <thead><tr class="text-slate-400"><th class="border-b border-slate-800 p-4">Característica</th><th class="border-b border-slate-800 p-4">Monopuesto</th><th class="border-b border-slate-800 p-4">Red local</th><th class="border-b border-slate-800 p-4">Remoto seguro</th></tr></thead>
          <tbody>${rows.map(([name, ...values]) => `<tr><th class="border-b border-slate-800 p-4 font-medium text-slate-300">${name}</th>${values.map((value) => `<td class="border-b border-slate-800 p-4 text-slate-400">${value}</td>`).join("")}</tr>`).join("")}
            <tr><th class="p-4 font-medium text-slate-300">Detalle</th><td class="p-4"><a class="${buttonSecondary} px-3 py-2 text-xs" href="${plans.monopuesto.route}">Ver plan<i data-lucide="arrow-up-right" class="size-4"></i></a></td><td class="p-4"><a class="${buttonSecondary} px-3 py-2 text-xs" href="${plans["red-local"].route}">Ver plan<i data-lucide="arrow-up-right" class="size-4"></i></a></td><td class="p-4"><a class="${buttonSecondary} px-3 py-2 text-xs" href="${plans["remoto-seguro"].route}">Ver plan<i data-lucide="arrow-up-right" class="size-4"></i></a></td></tr>
          </tbody>
        </table>
      </div>
      <p class="mt-4 text-xs leading-5 text-slate-500">La licencia LGPL de Odoo Community no implica una cuota por usuario. El hardware, dominio, conectividad, VPS, mantenimiento, módulos adicionales y servicios externos corren por cuenta del cliente y pueden tener costos propios; no se garantiza la entrega de mensajes ni la disponibilidad de proveedores.</p>
      <div class="mt-7"><a class="${button}" href="/contacto/">Pedir una cotización<i data-lucide="arrow-right" class="size-4"></i></a></div>
    </div></section>`;
}
