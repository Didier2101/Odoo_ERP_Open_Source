import { plans, whatsappLink } from "../plans-data.js";
import { badge, badgeBlue, button, buttonSecondary, checkIcon, checkItem, checkList, container, eyebrow, finePrint, iconBox, notice, pageDescription, pageTitle, pageTop, panel, panelTitle, section } from "../ui.js";

function checklist(items) {
  return `<ul class="${checkList}">${items.map((item) => `<li class="${checkItem}"><i data-lucide="check" class="${checkIcon}"></i>${item}</li>`).join("")}</ul>`;
}

export function render() {
  const plan = plans[document.body.dataset.plan];
  if (!plan) throw new Error(`No se encontró la ficha del plan "${document.body.dataset.plan}".`);

  const specs = plan.specs.map(([label, value]) => `<div class="flex items-start justify-between gap-4 border-b border-slate-800 py-3 text-sm last:border-0"><span class="text-slate-500">${label}</span><strong class="text-right font-semibold text-slate-200">${value}</strong></div>`).join("");
  return `
    <section class="${pageTop}"><div class="${container}">
      <a class="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200" href="/planes/"><i data-lucide="arrow-left" class="size-4"></i>Todos los planes</a>
      <div class="mt-6 flex flex-wrap items-center gap-3"><span class="${iconBox}"><i data-lucide="${plan.icon}" class="size-5"></i></span><span class="${badge} ${badgeBlue}">${plan.badge}</span><span class="text-xs font-semibold uppercase tracking-wide text-slate-500">Odoo 19 Community</span></div>
      <h1 class="${pageTitle}">${plan.title}</h1><p class="${pageDescription}">${plan.subtitle}. ${plan.description}</p>
    </div></section>
    <section class="${section}"><div class="${container} grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
      <div class="grid gap-4">
        <article class="${panel}"><h2 class="${panelTitle}">Qué resuelve este plan</h2><p class="text-sm leading-7 text-slate-400">${plan.intro}</p><p class="mt-4 text-sm leading-7 text-slate-300"><strong class="text-white">Recomendado para:</strong> ${plan.bestFor}</p></article>
        <article class="${panel}"><h2 class="${panelTitle}">Equipos y capacidad orientativa</h2><ul class="${checkList}">${plan.hardware.map((item) => `<li class="${checkItem}"><i data-lucide="cpu" class="mt-1 size-4 shrink-0 text-blue-300"></i>${item}</li>`).join("")}</ul><p class="mt-4 text-sm leading-6 text-slate-300"><strong class="text-white">A cargo del cliente:</strong> ${plan.clientSupplies}</p><p class="mt-3 text-xs leading-5 text-slate-500">Son referencias para una primera conversación, no requisitos oficiales de Odoo ni garantía de rendimiento. La capacidad se valida con usuarios simultáneos, volumen de datos, módulos, periféricos y crecimiento esperado.</p><a class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200" href="/documentacion/#infraestructura">Ver proveedores, tutoriales y fuentes oficiales<i data-lucide="arrow-up-right" class="size-4"></i></a></article>
        <article class="${panel}"><h2 class="${panelTitle}">Alcance técnico</h2>${checklist(plan.checklist)}</article>
        <article class="${panel}"><h2 class="${panelTitle}">Incluido en la propuesta</h2>${checklist(plan.includes)}</article>
        <article class="${panel}"><h2 class="${panelTitle}">Capacitación incluida</h2><p class="text-sm leading-7 text-slate-400">${plan.training}</p><a class="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200" href="https://www.youtube.com/@Odoo/courses" target="_blank" rel="noopener noreferrer">Abrir cursos oficiales en YouTube<i data-lucide="arrow-up-right" class="size-4"></i></a></article>
        <div class="${notice}">${plan.internetScopeNote}</div>
        <article class="${panel}"><h2 class="${panelTitle}">Requisitos y consideraciones</h2><ul class="${checkList}">
          <li class="${checkItem}"><i data-lucide="info" class="mt-1 size-4 shrink-0 text-blue-300"></i>El hardware, la conectividad y la disponibilidad se revisan antes de cerrar el alcance.</li>
          <li class="${checkItem}"><i data-lucide="info" class="mt-1 size-4 shrink-0 text-blue-300"></i>${plan.clientSupplies}</li>
          <li class="${checkItem}"><i data-lucide="info" class="mt-1 size-4 shrink-0 text-blue-300"></i>Los respaldos y las restauraciones deben probarse periódicamente.</li>
          <li class="${checkItem}"><i data-lucide="info" class="mt-1 size-4 shrink-0 text-blue-300"></i>El soporte y mantenimiento posterior se acuerdan en una propuesta aparte.</li>
        </ul></article>
      </div>
      <aside class="lg:sticky lg:top-24 lg:border-l lg:border-slate-800 lg:pl-6">
        <span class="${eyebrow}">Resumen del plan</span><h2 class="mt-3 text-xl font-bold text-white">Alcance y requisitos</h2><p class="mt-2 text-sm leading-6 text-slate-400">Revisa la infraestructura, capacidad y necesidades específicas antes de solicitar la instalación.</p>
        <div class="mt-3">${specs}</div>
        <a class="${button} mt-4 w-full bg-emerald-700 hover:bg-emerald-600" href="${whatsappLink(plan.whatsApp)}" target="_blank" rel="noopener noreferrer"><i data-lucide="message-circle" class="size-4"></i>Cotizar este plan</a>
        <a class="${buttonSecondary} mt-2 w-full" href="/contacto/"><i data-lucide="message-circle" class="size-4"></i>Consultar por WhatsApp</a>
        <p class="${finePrint} mt-4">Hardware, dominio, conectividad, VPS y servicios externos no están incluidos: el cliente los aporta o contrata cuando los necesite. La licencia LGPL de Odoo Community no implica una cuota por usuario.</p>
      </aside>
      <div class="mt-10 border-t border-slate-800 pt-7 lg:col-span-2">
        <span class="${eyebrow}">Inversión</span>
        <h2 class="mt-2 text-2xl font-bold tracking-tight text-white">Precio base de instalación</h2>
        <p class="mt-3 text-3xl font-extrabold tracking-tight text-white">${plan.price}</p>
        <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-400">Aplica al alcance descrito en este plan. Equipos y servicios externos no están incluidos; migraciones, cambios de alcance y trabajos adicionales se cotizan por separado.</p>
      </div>
    </div></section>`;
}
