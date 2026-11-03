import { container, eyebrow, pageDescription, pageTitle, pageTop, section } from "../ui.js";

export function render() {
  return `
    <section class="${pageTop}"><div class="${container}"><span class="${eyebrow}">Información del sitio</span><h1 class="${pageTitle}">Avisos legales y privacidad</h1><p class="${pageDescription}">Información sobre el responsable de este sitio independiente, el tratamiento de consultas y el uso de marcas y recursos de terceros.</p></div></section>
    <section class="${section}"><div class="${container} max-w-3xl">
      <article class="border-b border-slate-800 pb-7">
        <h2 class="text-xl font-bold text-white">Responsable y contacto</h2>
        <p class="mt-3 text-sm leading-7 text-slate-400">Responsable del contenido del sitio y canal para consultas relacionadas con privacidad: Didier Chávez, por <a class="font-semibold text-blue-300 underline" href="https://wa.me/573028645014" target="_blank" rel="noopener noreferrer">WhatsApp al +57 302 864 5014</a>. No envíes información sensible por este canal. Para identificar una consulta sobre datos ya compartidos, explica el caso sin incluir contraseñas, códigos ni información financiera.</p>
      </article>
      <article class="border-b border-slate-800 py-7">
        <h2 class="text-xl font-bold text-white">Consultas y datos personales</h2>
        <ul class="mt-3 grid gap-3 text-sm leading-7 text-slate-400">
          <li>Este sitio no incluye formulario de contacto, cuenta de usuario, analítica propia ni almacenamiento de consultas en una base de datos. No escribas información privada o sensible en GitHub; es un perfil público y no un canal de soporte privado.</li>
          <li>Si decides iniciar una conversación por WhatsApp, el mensaje y los datos que incluyas serán procesados por WhatsApp/Meta y recibidos por Didier para responder a tu consulta. El tratamiento dentro de esa plataforma también se rige por las políticas de Meta. Evita enviar contraseñas, datos de pago o información sensible.</li>
          <li>El alojamiento puede registrar datos técnicos de las solicitudes. El sitio descarga Tailwind CSS y Lucide desde sus CDN, que pueden recibir datos de conexión del navegador al cargar cada página. La página de capacitación incorpora reproductores de YouTube; al cargarlos, Google puede recibir datos técnicos del navegador conforme a sus políticas. Los enlaces externos también se rigen por los términos y políticas de cada proveedor.</li>
          <li>Para solicitudes relacionadas con datos que hayas enviado por WhatsApp, escribe al mismo canal. La atención de solicitudes y los derechos aplicables se gestionan conforme a la normativa vigente y a las limitaciones legales. Antes de publicar comercialmente, el responsable debe revisar y completar la información de identificación y privacidad que exija la ley aplicable.</li>
        </ul>
      </article>
      <article class="border-b border-slate-800 py-7">
        <h2 class="text-xl font-bold text-white">Marcas, licencias y relación con Odoo</h2>
        <p class="mt-3 text-sm leading-7 text-slate-400">Este sitio pertenece a Didier Chávez y ofrece información sobre servicios independientes relacionados con Odoo. No es el sitio oficial de Odoo ni está afiliado, autorizado o respaldado por Odoo S.A. “Odoo” y los signos distintivos correspondientes pertenecen a sus titulares. No se utiliza el logotipo oficial ni se afirma tener condición de socio, partner o representante.</p>
        <p class="mt-3 text-sm leading-7 text-slate-400">El código de Odoo Community 19 se publica bajo LGPLv3. No significa que todo módulo, extensión, marca, servicio, configuración o contenido tenga esa licencia ni que todo uso sea gratuito. Verifica las licencias y permisos de cada componente y las condiciones vigentes de Odoo antes de instalar, modificar, redistribuir o comercializar. Consulta la <a class="font-semibold text-blue-300 underline" href="https://github.com/odoo/odoo/blob/19.0/LICENSE" target="_blank" rel="noopener noreferrer">licencia del código de Odoo Community</a>.</p>
        <p class="mt-3 text-sm leading-7 text-slate-400">La mención de una marca no concede permiso para utilizarla. Este aviso no determina si un nombre de dominio, rótulo, anuncio o uso concreto cumple las políticas del titular o la legislación aplicable. Comprueba los derechos antes de publicar y solicita asesoría jurídica independiente si existe duda, especialmente sobre el nombre de dominio.</p>
      </article>
      <article class="py-7">
        <h2 class="text-xl font-bold text-white">Alcance de la información</h2>
        <p class="mt-3 text-sm leading-7 text-slate-400">La información de planes, requisitos y aplicaciones es orientativa y puede cambiar. Disponibilidad, precios, licencias y condiciones de Odoo Online y otros proveedores deben confirmarse directamente con ellos. Las referencias de equipos no son una garantía de rendimiento. Este sitio no ofrece asesoría jurídica, tributaria ni contable; verifica las obligaciones legales, privacidad, DIAN y facturación con profesionales competentes. Ningún texto de esta página elimina o garantiza la ausencia de riesgos legales.</p>
        <div class="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm"><a class="font-semibold text-blue-300 underline" href="https://www.odoo.com/legal/terms" target="_blank" rel="noopener noreferrer">Términos oficiales de Odoo</a><a class="font-semibold text-blue-300 underline" href="https://www.odoo.com/pricing" target="_blank" rel="noopener noreferrer">Planes y precios oficiales</a><a class="font-semibold text-blue-300 underline" href="https://www.odoo.com/documentation/19.0/legal/licenses.html" target="_blank" rel="noopener noreferrer">Licencias en Odoo 19</a></div>
      </article>
    </div></section>`;
}
