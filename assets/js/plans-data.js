import { badge, badgeBlue, buttonSecondary, checkIcon, checkItem, planRowBase } from "./ui.js";

const basicTraining = "Incluye una sesión práctica para enseñar el uso básico acordado. Para profundizar en otros procesos, el cliente puede consultar los tutoriales gratuitos del canal oficial de Odoo en YouTube; cursos extensos y acompañamiento adicional se cotizan aparte.";

export const plans = {
  monopuesto: {
    slug: "monopuesto",
    route: "/planes/monopuesto/",
    title: "Monopuesto local",
    price: "$890.000 COP",
    subtitle: "Odoo en Docker sobre Windows · 1 PC o caja",
    icon: "monitor",
    badge: "Para empezar",
    description: "Una instalación local de Odoo para un único equipo. Ideal para organizar la operación de una caja mientras conoces el sistema.",
    intro: "Preparamos un entorno controlado para utilizar Odoo Community desde un computador del negocio. Revisamos compatibilidad, almacenamiento, respaldos y las necesidades reales del equipo antes de instalar.",
    internetScopeNote: "Este plan cubre el uso local en un equipo. No incluye publicar sitios o tiendas en internet, acceso remoto ni configurar correo externo (Gmail/Workspace), SMS o WhatsApp. Estas funciones requieren conexión, cuentas autorizadas y configuración de proveedores; algunas tienen costos y se cotizan aparte. La descarga inicial y las actualizaciones necesitan conexión a internet.",
    hardware: [
      "Lo mínimo para Docker Desktop en Windows: procesador x64 compatible con SLAT, virtualización activada en BIOS/UEFI, WSL 2 y 8 GB de RAM.",
      "Punto de partida recomendado para uso diario: procesador moderno de 4 núcleos, 16 GB de RAM y SSD de 512 GB; reserva espacio adicional para la base de datos y los respaldos.",
      "Windows debe estar en una versión vigente y compatible. La capacidad final depende del volumen de productos, operaciones, usuarios y aplicaciones."
    ],
    clientSupplies: "El cliente aporta el computador Windows, la conexión eléctrica y de red y, cuando aplique, compra y mantiene sus propios periféricos. El equipo no está incluido en la instalación.",
    checklist: ["Revisión del equipo y requisitos", "Instalación de Docker Desktop y Odoo", "Configuración inicial y base de datos", "Orientación para respaldos y restauración", "Entrega guiada del sistema"],
    includes: ["Instalación en un computador aportado por el cliente", "Acceso desde el computador configurado", "Aplicaciones Community acordadas", "Guía de operación inicial"],
    training: basicTraining,
    specs: [["Usuarios simultáneos", "1 usuario"], ["Puesto", "1 equipo"], ["Acceso", "Local"]],
    bestFor: "Comercios que comienzan con un punto de trabajo y quieren validar procesos en Odoo.",
    whatsApp: "Hola Didier, quiero cotizar el plan Monopuesto Local para Odoo 19."
  },
  "red-local": {
    slug: "red-local",
    route: "/planes/red-local/",
    title: "Red local / servidor dedicado",
    price: "$2.800.000 COP",
    subtitle: "Proxmox VE + Docker · varias cajas y vendedores",
    icon: "server",
    badge: "Para equipos",
    description: "Una instalación central para que varios usuarios compartan inventario y operación dentro del mismo establecimiento.",
    intro: "Diseñamos la instalación alrededor de tu red física, los puestos de trabajo y el nivel de disponibilidad esperado. El dimensionamiento del servidor y cualquier redundancia se acuerdan antes de cotizar.",
    internetScopeNote: "Este plan cubre el uso interno por la red del establecimiento. No incluye publicar sitios o tiendas en internet, acceso remoto ni configurar correo externo (Gmail/Workspace), SMS o WhatsApp. Estas funciones requieren conexión, cuentas autorizadas y configuración de proveedores; algunas tienen costos y se cotizan aparte. La descarga inicial y las actualizaciones necesitan conexión a internet.",
    hardware: [
      "Base orientativa para un servidor pequeño: CPU x64 con virtualización Intel VT-x/AMD-V, al menos 4 núcleos, 16 GB de RAM, SSD/NVMe de 500 GB y red Gigabit.",
      "Para más usuarios, más datos o varias aplicaciones: considerar 8 núcleos, 32 GB de RAM, 1 TB NVMe y almacenamiento redundante; el dimensionamiento se confirma con la carga real.",
      "Añadir UPS y una estrategia de copias independiente del servidor. Proxmox por sí solo no proporciona alta disponibilidad ni reemplaza los respaldos."
    ],
    clientSupplies: "El cliente compra y aporta el servidor, los equipos de los usuarios, la red local, la UPS y el medio o servicio externo de respaldo que se acuerde. No se incluye hardware ni servicio de alojamiento.",
    checklist: ["Levantamiento de usuarios, puestos y red", "Dimensionamiento del servidor", "Configuración de Proxmox VE y contenedores", "Acceso multiusuario en red local", "Política de copias de seguridad", "Pruebas y entrega guiada"],
    includes: ["Instalación en un servidor aportado por el cliente", "Acceso desde puestos en la red local", "Configuración de aplicaciones acordadas", "Documentación básica de operación"],
    training: basicTraining,
    specs: [["Usuarios simultáneos", "Según servidor"], ["Infraestructura", "Servidor local"], ["Acceso", "Red del establecimiento"]],
    bestFor: "Negocios con varias cajas, vendedores o personal de inventario que necesitan compartir información.",
    whatsApp: "Hola Didier, quiero cotizar el plan de Red Local para Odoo 19."
  },
  "remoto-seguro": {
    slug: "remoto-seguro",
    route: "/planes/remoto-seguro/",
    title: "Acceso remoto seguro",
    price: "$3.900.000 COP",
    subtitle: "Proxmox + Docker + Cloudflare Zero Trust",
    icon: "globe-2",
    badge: "Acceso global",
    description: "Accede a tu instancia desde fuera del negocio con un túnel seguro y sin abrir puertos entrantes en el router.",
    intro: "Extendemos una instalación local con acceso remoto, dominio y controles de acceso acordados. La topología se valida con el cliente; el servicio externo y el dominio pueden estar sujetos a límites, condiciones o costos de sus proveedores.",
    internetScopeNote: "Este plan agrega acceso remoto al sistema, pero no incluye automáticamente tienda web, e-commerce, chat público ni correo externo (Gmail/Workspace), SMS o WhatsApp. Estos servicios requieren conexión, cuentas autorizadas y configuración de proveedores; pueden generar costos adicionales y se cotizan por separado.",
    hardware: [
      "Servidor de referencia: CPU x64 con virtualización Intel VT-x/AMD-V, 4 núcleos, 16 GB de RAM, SSD/NVMe de 500 GB y red Gigabit; para más carga, considerar 8 núcleos, 32 GB y 1 TB NVMe.",
      "Conexión a internet estable en el negocio, con velocidad de subida adecuada al número de usuarios remotos; router y red administrados por el cliente.",
      "UPS y copias externas recomendadas. Estas cifras son una base para cotizar, no una garantía de rendimiento o disponibilidad; el tamaño se confirma según uso, datos y concurrencia."
    ],
    clientSupplies: "El cliente compra y aporta el servidor, los equipos de trabajo, la conexión a internet y el dominio. También crea y conserva las cuentas del registrador y de Cloudflare, sus credenciales y cualquier servicio de terceros. Dominio, VPS, hardware y servicios externos no están incluidos.",
    checklist: ["Instalación base en servidor local", "Configuración del túnel Cloudflare", "Vinculación del dominio del cliente", "HTTPS y validación de conectividad", "Revisión de usuarios y controles de acceso", "Prueba de acceso desde web y móvil"],
    includes: ["Configuración sobre servidor aportado por el cliente", "Acceso remoto por dominio", "Sin publicar puertos entrantes del router", "Documentación del flujo de acceso"],
    training: basicTraining,
    specs: [["Usuarios simultáneos", "Según servidor"], ["Infraestructura", "Servidor local + túnel"], ["Acceso", "Web y móvil"]],
    bestFor: "Propietarios o equipos que requieren consultar el sistema fuera del local.",
    whatsApp: "Hola Didier, quiero cotizar el plan de Acceso Remoto Seguro para Odoo 19."
  }
};

export function whatsappLink(message) {
  return `https://wa.me/573028645014?text=${encodeURIComponent(message)}`;
}

export function planRow(plan) {
  const items = plan.checklist.slice(0, 4).map((item) => `<li class="${checkItem}"><i data-lucide="check" class="${checkIcon}"></i>${item}</li>`).join("");
  return `
    <article class="${planRowBase}">
      <div class="flex min-w-0 items-start gap-4">
        <i data-lucide="${plan.icon}" class="mt-1 size-5 shrink-0 text-blue-300"></i>
        <div class="min-w-0">
          <div class="flex flex-wrap items-center gap-x-3 gap-y-1"><h3 class="text-lg font-bold tracking-tight text-white">${plan.title}</h3><span class="${badge} ${badgeBlue}">${plan.badge}</span></div>
          <p class="mt-1 text-sm leading-6 text-slate-500">${plan.subtitle}</p>
          <p class="mt-2 text-sm leading-6 text-slate-400">${plan.description}</p>
          <ul class="mt-3 grid gap-2 sm:grid-cols-2">${items}</ul>
          <p class="mt-3 text-xs leading-5 text-slate-500">${plan.training}</p>
        </div>
      </div>
      <a class="${buttonSecondary} w-full sm:w-auto" href="${plan.route}">Ver requisitos<i data-lucide="arrow-right" class="size-4"></i></a>
    </article>`;
}
