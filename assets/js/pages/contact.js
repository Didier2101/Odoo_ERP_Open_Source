import { button, buttonSecondary, container, eyebrow, pageDescription, pageTitle, pageTop, section } from "../ui.js";

export function render() {
  return `
    <section class="${pageTop}"><div class="${container}"><span class="${eyebrow}">Contacto directo</span><h1 class="${pageTitle}">Hablemos de tu proyecto.</h1><p class="${pageDescription}">Soy Didier Chávez, desarrollador de software. Para consultas sobre implementación o capacitación, contáctame por WhatsApp. También puedes conocer mis proyectos en GitHub.</p></div></section>
    <section class="${section}"><div class="${container} max-w-3xl">
      <h2 class="text-xl font-bold text-white">Canales de contacto</h2>
      <p class="mt-2 text-sm leading-7 text-slate-400">No se reciben solicitudes mediante formularios ni por correo desde este sitio. Si escribes por WhatsApp, evita compartir contraseñas, datos financieros u otra información sensible.</p>
      <p class="mt-3 text-sm leading-6 text-slate-400">Los mensajes no se responden de inmediato; responderé cuando tenga disponibilidad. Este canal no ofrece atención urgente ni soporte 24/7.</p>
      <div class="mt-6 flex flex-col gap-3 sm:flex-row">
        <a class="${button}" href="https://wa.me/573028645014?text=Hola%20Didier%2C%20quiero%20consultar%20sobre%20implementacion%20de%20Odoo" target="_blank" rel="noopener noreferrer"><i data-lucide="message-circle" class="size-4"></i>WhatsApp · +57 302 864 5014<i data-lucide="arrow-up-right" class="size-4"></i></a>
        <a class="${buttonSecondary}" href="https://github.com/Didier2101" target="_blank" rel="noopener noreferrer"><i data-lucide="code-xml" class="size-4"></i>GitHub · Didier2101<i data-lucide="arrow-up-right" class="size-4"></i></a>
      </div>
      <p class="mt-5 text-xs leading-5 text-slate-500">WhatsApp y GitHub son servicios externos sujetos a sus propias políticas y condiciones. GitHub es un perfil público; no publiques allí datos personales, credenciales ni información privada. Consulta los <a class="underline hover:text-slate-300" href="/aviso-legal/">avisos legales y de privacidad</a>.</p>
    </div></section>`;
}
