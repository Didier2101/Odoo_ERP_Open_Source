import { button, buttonSecondary, container, eyebrow, notice, pageDescription, pageTitle, pageTop, section, sectionHeading } from "../ui.js";

export function render() {
  const steps = [
    ["01 · Descubrimiento", "Entender el negocio", "Procesos, productos, usuarios, puntos de operación y requerimientos."],
    ["02 · Arquitectura", "Diseñar la solución", "Infraestructura, red, modalidad de acceso y estrategia de respaldo."],
    ["03 · Implementación", "Configurar y probar", "Instalación, configuración inicial y validación de los flujos acordados."],
    ["04 · Entrega", "Formar al equipo", "Inducción práctica básica y enlaces a los tutoriales oficiales de YouTube para profundizar."]
  ];
  return `
    <section class="${pageTop}"><div class="${container}"><span class="${eyebrow}">Propuesta de valor</span><h1 class="${pageTitle}">Desarrollo enfocado en tu operación, con alcance claro.</h1><p class="${pageDescription}">Un proyecto bien implementado comienza por entender cómo trabaja tu negocio, preparar la infraestructura y capacitar a las personas que usarán el sistema.</p></div></section>
    <section class="${section}"><div class="${container}">
      <div class="divide-y divide-slate-800">
        <article class="flex gap-4 py-5 first:pt-0"><i data-lucide="user-round-cog" class="mt-1 size-5 shrink-0 text-blue-300"></i><div><h2 class="font-bold text-white">Tu desarrollador</h2><p class="mt-1 text-sm leading-7 text-slate-400">Soy Didier Chávez, desarrollador de software. Te acompaño desde la planeación técnica hasta la puesta en marcha y la formación inicial del equipo.</p></div></article>
        <article class="flex gap-4 py-5"><i data-lucide="scale" class="mt-1 size-5 shrink-0 text-blue-300"></i><div><h2 class="font-bold text-white">Licencias y alcance</h2><p class="mt-1 text-sm leading-7 text-slate-400">El código de Odoo Community 18 se publica bajo LGPLv3. Cada módulo, extensión y servicio externo puede tener sus propios términos; se revisan antes de implementar. La cotización cubre únicamente los servicios de instalación, configuración y acompañamiento acordados.</p></div></article>
        <article class="flex gap-4 py-5"><i data-lucide="database" class="mt-1 size-5 shrink-0 text-blue-300"></i><div><h2 class="font-bold text-white">Infraestructura del cliente</h2><p class="mt-1 text-sm leading-7 text-slate-400">El cliente compra y aporta el computador o servidor, conserva sus cuentas y dominios, y administra los servicios de terceros. Definimos el alojamiento, los accesos y la estrategia de respaldos en el alcance del proyecto.</p></div></article>
        <article class="flex gap-4 py-5 last:pb-0"><i data-lucide="graduation-cap" class="mt-1 size-5 shrink-0 text-blue-300"></i><div><h2 class="font-bold text-white">Autonomía para tu equipo</h2><p class="mt-1 text-sm leading-7 text-slate-400">La puesta en marcha se complementa con orientación y recursos de aprendizaje para que el personal pueda consultar procedimientos y aprender a su propio ritmo.</p></div></article>
      </div>
      <div class="${sectionHeading} mb-2 mt-14"><span class="${eyebrow}">Cómo trabajamos</span><h2 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Un alcance claro, paso a paso.</h2></div>
      <ol class="divide-y divide-slate-800">
        ${steps.map(([tag, title, description]) => `<li class="flex gap-4 py-4"><span class="shrink-0 text-xs font-bold uppercase tracking-wider text-blue-300">${tag}</span><div><h3 class="font-bold text-white">${title}</h3><p class="mt-1 text-sm leading-6 text-slate-400">${description}</p></div></li>`).join("")}
      </ol>
      <div class="${notice} mt-6">La estabilidad, disponibilidad, seguridad y continuidad dependen del hardware, la conectividad, los respaldos, las actualizaciones y la operación acordada. Ninguna arquitectura elimina por sí sola estos riesgos.</div>
      <div class="mt-6 flex flex-col gap-3 sm:flex-row"><a class="${button}" href="/planes/">Revisar planes<i data-lucide="arrow-right" class="size-4"></i></a><a class="${buttonSecondary}" href="/contacto/">Hablar con Didier<i data-lucide="message-circle" class="size-4"></i></a></div>
    </div></section>`;
}
