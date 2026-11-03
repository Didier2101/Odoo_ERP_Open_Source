import { button, buttonSecondary, container, eyebrow, pageDescription, pageTitle, pageTop, section } from "../ui.js";

const applicationGroups = [
  {
    title: "1. Operaciones comerciales, ventas y finanzas",
    apps: [
      { name: "Ventas", technical: "sale_management", scope: "local", description: "Presupuestos, órdenes de venta, tarifas por cliente y seguimiento de pedidos pendientes de entrega o facturación. Las tarifas por empaque dependen de cómo se configuren los productos y las unidades.", audience: "Distribuidores, ferreterías y comercios mayoristas o minoristas." },
      { name: "Facturación", technical: "account", scope: "local", description: "Facturas, notas de crédito, cuentas por cobrar y pagar, y registro de pagos. La facturación electrónica legal en Colombia requiere revisar localización, DIAN y módulos habilitados.", audience: "Empresas que necesitan organizar sus cuentas y documentos comerciales." },
      { name: "Inventario", technical: "stock", scope: "local", description: "Almacenes, entradas y salidas, ajustes y trazabilidad. Se pueden configurar unidades y empaques, por ejemplo unidad, caja y bulto; las conversiones deben validarse para cada producto.", audience: "Ferreterías, distribuidores, tiendas y negocios con una o varias bodegas." },
      { name: "Compras", technical: "purchase", scope: "local", description: "Solicitudes de cotización a proveedores, comparación de alternativas, órdenes de compra y recepción de mercancía con actualización del inventario.", audience: "Empresas que compran y reponen inventario con varios proveedores." },
      { name: "Punto de venta", technical: "point_of_sale", scope: "local", description: "Interfaz de caja, búsqueda y escaneo de productos, pagos en efectivo y recibos. La integración con datáfonos o medios de pago depende de los equipos y proveedores compatibles.", audience: "Tiendas, ferreterías, minimercados y mostradores." },
      { name: "Comercio electrónico", technical: "website_sale", scope: "internet", description: "Tienda pública en línea conectada con el catálogo y el inventario. Requiere publicar el sitio y disponer de conexión a internet; pagos en línea requieren configuración del proveedor.", audience: "Comercios que venden por internet y atienden pedidos web." },
      { name: "Restaurante", technical: "pos_restaurant", scope: "local", description: "Funciones de POS para organizar mesas, salones y comandas de cocina, de acuerdo con los módulos y la configuración instalados.", audience: "Restaurantes, cafeterías y negocios de comidas." }
    ]
  },
  {
    title: "2. Presencia web y comunicación",
    apps: [
      { name: "Sitio web", technical: "website", scope: "internet", description: "Creador visual para publicar páginas y contenidos. Para que clientes externos lo visiten, el sitio debe publicarse con dominio y conexión a internet.", audience: "Empresas que necesitan presencia web, catálogo o páginas de información." },
      { name: "Conversaciones", technical: "mail", scope: "local + proveedor de correo", description: "Mensajes internos, notificaciones y notas asociadas a documentos funcionan dentro de Odoo. Enviar o recibir correos con clientes/proveedores no queda operativo por instalar el módulo: requiere internet y configurar correo saliente/entrante. Con Gmail o Google Workspace se debe configurar SMTP/OAuth y autorizar la cuenta según las políticas y límites de Google.", audience: "Equipos que colaboran sobre documentos; empresas que requieren notificaciones o correo externo configurado." },
      { name: "Calendario", technical: "calendar", scope: "local", description: "Eventos, reuniones, citas y recordatorios asociados a usuarios. Sincronizar con Google Calendar u otros servicios externos requiere internet, configurar la integración y autorizar las cuentas.", audience: "Equipos que coordinan reuniones, visitas o citas con proveedores." },
      { name: "Chat en vivo", technical: "im_livechat", scope: "internet", description: "Chat para visitantes del sitio web. El sitio debe estar publicado y ser accesible desde internet; los operadores necesitan conectividad al sistema para atender.", audience: "Comercios y empresas de servicios que atienden consultas en línea." },
      { name: "WhatsApp Business (integración externa)", technical: "API oficial / proveedor", scope: "internet + proveedor", description: "No es mensajería gratuita incluida por instalar Odoo Community. Requiere WhatsApp Business Platform, configuración y aprobación de Meta y, según el caso, un proveedor; pueden aplicar cobros y reglas para plantillas.", audience: "Empresas que quieren integrar notificaciones o atención al cliente por WhatsApp." }
    ]
  },
  {
    title: "3. Producción y operaciones internas",
    apps: [
      { name: "Manufactura", technical: "mrp", scope: "local", description: "Listas de materiales y órdenes para ensamblar, transformar o fabricar productos.", audience: "Fabricantes pequeños, talleres y empresas que ensamblan kits." },
      { name: "Reparación", technical: "repair", scope: "local", description: "Órdenes de reparación, artículos recibidos, piezas utilizadas y seguimiento del trabajo realizado, según la configuración instalada.", audience: "Talleres, servicios técnicos y comercios que reparan productos." },
      { name: "Flotilla", technical: "fleet", scope: "local", description: "Vehículos, asignaciones, kilometraje, costos y fechas de mantenimiento. Alertas legales como SOAT o revisión técnico-mecánica requieren registrar y mantener esos datos.", audience: "Empresas con vehículos de reparto, visitas o transporte." },
      { name: "Almuerzo", technical: "lunch", scope: "local", description: "Gestión interna de pedidos de comida y proveedores de almuerzo para empleados.", audience: "Empresas con personal que organiza pedidos de comida en grupo." }
    ]
  },
  {
    title: "4. Recursos humanos y gestión de personal",
    apps: [
      { name: "Empleados", technical: "hr", scope: "local", description: "Directorio, puestos, departamentos e información de personal.", audience: "Empresas que necesitan centralizar información de sus trabajadores." },
      { name: "Vacaciones y ausencias", technical: "hr_holidays", scope: "local", description: "Solicitudes y aprobación de permisos, ausencias y vacaciones.", audience: "Negocios que coordinan turnos y permisos de empleados." },
      { name: "Gastos", technical: "hr_expense", scope: "local", description: "Registro, revisión y aprobación de gastos asociados al trabajo.", audience: "Empresas con compras menores, viáticos o desplazamientos del personal." },
      { name: "Reclutamiento", technical: "hr_recruitment", scope: "local", description: "Seguimiento de vacantes y candidatos mediante etapas de selección.", audience: "Empresas que gestionan procesos de contratación." },
      { name: "Asistencias", technical: "hr_attendance", scope: "local", description: "Registro de entradas y salidas de empleados mediante los métodos configurados.", audience: "Negocios que necesitan llevar un control de asistencia." },
      { name: "Contratos de empleados", technical: "hr_contract", scope: "local", description: "Información y seguimiento administrativo de contratos, fechas y datos laborales, según edición y módulos instalados.", audience: "Empresas que organizan contratos y fechas del personal." },
      { name: "Gestión de habilidades", technical: "hr_skills", scope: "local", description: "Competencias, certificaciones y habilidades asociadas a los perfiles de empleados.", audience: "Empresas que necesitan identificar perfiles y capacidades de su equipo." },
      { name: "Empleos en línea", technical: "website_hr_recruitment", scope: "internet", description: "Publicación de vacantes y recepción de postulaciones a través del sitio web; requiere un sitio publicado y accesible por internet.", audience: "Empresas que reciben postulaciones desde su página pública." }
    ]
  },
  {
    title: "5. Gestión de proyectos y productividad",
    apps: [
      { name: "CRM", technical: "crm", scope: "local", description: "Prospectos, oportunidades, actividades y seguimiento del embudo comercial.", audience: "Equipos comerciales B2B, distribuidores y proveedores de servicios." },
      { name: "Proyectos", technical: "project", scope: "local", description: "Proyectos, tareas, responsables, etapas y seguimiento del trabajo. El control de horas puede depender de otras aplicaciones instaladas.", audience: "Agencias, equipos de instalación y empresas que trabajan por proyectos." },
      { name: "Actividades pendientes", technical: "project_todo", scope: "local", description: "Lista de tareas y pendientes, según disponibilidad del módulo en la edición y versión instaladas.", audience: "Equipos que organizan actividades internas." },
      { name: "Encuestas", technical: "survey", scope: "local / depende del uso", description: "Cuestionarios, evaluaciones y encuestas. Compartirlos con personas externas mediante enlaces públicos requiere publicar el servicio y acceso a internet.", audience: "Empresas que recopilan opiniones de clientes o realizan evaluaciones." }
    ]
  },
  {
    title: "6. Marketing y canales masivos",
    apps: [
      { name: "Marketing por correo", technical: "mass_mailing", scope: "internet + proveedor", description: "Diseño y envío de campañas por email. Requiere internet y configurar un servidor o proveedor de correo (por ejemplo SMTP/OAuth de Gmail o Google Workspace, sujeto a las políticas y cuotas de Google). La entrega depende también de la autenticación del dominio y las reglas antispam; pueden aplicar límites o costos externos.", audience: "Comercios y empresas que envían campañas a clientes con autorización." },
      { name: "Marketing por SMS", technical: "mass_mailing_sms", scope: "internet + proveedor", description: "Envío mediante un proveedor de SMS configurado en Odoo. Requiere internet, cuenta, credenciales y saldo o plan del proveedor; normalmente los mensajes tienen costo.", audience: "Empresas que notifican promociones, recordatorios o avisos a clientes con autorización." }
    ]
  }
];

const documentationLinks = {
  sale_management: "sales/sales.html",
  account: "finance/accounting.html",
  stock: "inventory_and_mrp/inventory.html",
  purchase: "inventory_and_mrp/purchase.html",
  point_of_sale: "sales/point_of_sale.html",
  website_sale: "websites/ecommerce.html",
  pos_restaurant: "sales/point_of_sale/restaurant.html",
  website: "websites/website.html",
  mail: "productivity/discuss.html",
  calendar: "productivity/calendar.html",
  im_livechat: "websites/livechat.html",
  "API oficial / proveedor": "general/email_communication.html",
  mrp: "inventory_and_mrp/manufacturing.html",
  repair: "inventory_and_mrp/repairs.html",
  fleet: "hr/fleet.html",
  lunch: "hr/lunch.html",
  hr: "hr/employees.html",
  hr_holidays: "hr/time_off.html",
  hr_expense: "finance/expenses.html",
  hr_recruitment: "hr/recruitment.html",
  hr_attendance: "hr/attendances.html",
  hr_contract: "hr/payroll/contracts.html",
  hr_skills: "hr/employees.html",
  website_hr_recruitment: "hr/recruitment.html",
  crm: "sales/crm.html",
  project: "services/project.html",
  project_todo: "services/project.html",
  survey: "marketing/surveys.html",
  mass_mailing: "marketing/email_marketing.html",
  mass_mailing_sms: "marketing/sms_marketing.html"
};

const questions = [
  ["¿Qué módulos puedo usar en un plan local?", "Los módulos internos pueden utilizarse desde la red local siempre que el servidor esté encendido y los equipos tengan conectividad con él. Los planes locales no incluyen publicar sitios o tiendas en internet, acceso remoto ni configurar correo externo, SMS, WhatsApp u otros proveedores. Esos servicios requieren conexión, credenciales y/o autorizaciones; algunos generan cargos y se cotizan aparte."],
  ["¿Un sistema local funciona sin internet?", "El acceso de los equipos a un servidor local puede funcionar por la red interna aunque no haya conexión a internet, siempre que la infraestructura esté correctamente configurada. La instalación inicial, actualizaciones, servicios externos, pasarelas de pago, correo, SMS y acceso desde fuera sí requieren internet. El comportamiento del POS sin conexión debe validarse con la versión, dispositivos y configuración reales."],
  ["¿Por qué elegir Odoo 19 Community?", "Odoo Community es software de código abierto y modular. La edición, los módulos instalados y su licencia determinan qué funcionalidades están disponibles; algunas aplicaciones o funciones pueden requerir Enterprise o módulos externos. Se confirma la compatibilidad antes del proyecto."],
  ["¿Cómo registro empaques, bultos y kilos?", "Se configuran unidades de medida y conversiones compatibles con los productos y procesos. Por ejemplo, se puede organizar la compra por bulto y controlar la venta por unidad si la configuración lo permite. Conviene acordar una unidad de inventario y probar las conversiones antes de cargar el catálogo."],
  ["¿Cómo protejo los respaldos locales?", "Programa copias de la base de datos y los archivos, conserva al menos una copia en una ubicación independiente y prueba periódicamente la restauración. La copia remota necesita conexión a internet; la política de respaldo se define según el plan contratado."],
  ["¿Facturación electrónica está incluida?", "El módulo account gestiona funciones contables y facturas, pero la facturación electrónica legal en Colombia requiere validar la localización, integración con DIAN, edición, módulos habilitados y configuración vigente. No se debe asumir que está incluida en una instalación base."],
  ["¿Instalar Odoo configura automáticamente Gmail o el correo?", "No. El módulo permite gestionar mensajes, pero enviar/recibir correo requiere configurar servidores de correo saliente/entrante y autorizar una cuenta. Para Gmail o Google Workspace se configura SMTP/OAuth conforme a las políticas actuales de Google, con conexión a internet y sujeto a sus cuotas y restricciones. La instalación local base no incluye esa configuración ni garantiza la entrega; se acuerda y prueba aparte."],
  ["¿Odoo envía SMS o WhatsApp sin proveedor?", "No. SMS requiere una cuenta, credenciales y saldo o plan de un proveedor. WhatsApp requiere la plataforma oficial de WhatsApp Business, aprobación y configuración de Meta y, según el caso, un proveedor con sus tarifas y políticas. Ambas integraciones necesitan internet y no vienen habilitadas por defecto en un plan local."],
  ["¿Todos los módulos mencionados están incluidos en Community?", "No necesariamente. Los nombres técnicos identifican módulos del ecosistema Odoo, pero la disponibilidad varía según versión, edición, dependencias y localización. Algunas funciones pueden necesitar Enterprise o módulos de terceros; se revisa el alcance exacto antes de cotizar."]
];

const scopeLabels = {
  local: "Red local",
  internet: "Requiere internet",
  "internet + proveedor": "Internet y proveedor externo",
  "local + proveedor de correo": "Local + correo configurado aparte",
  "local / depende del uso": "Local o público según uso"
};

function renderApp(app) {
  const documentationUrl = `https://www.odoo.com/documentation/19.0/applications/${documentationLinks[app.technical]}`;
  const scopeClass = app.scope === "local"
    ? "border-emerald-400/20 bg-emerald-400/[.06] text-emerald-300"
    : app.scope.includes("proveedor")
      ? "border-amber-400/20 bg-amber-400/[.06] text-amber-200"
      : "border-blue-400/20 bg-blue-500/[.08] text-blue-200";
  return `
    <article class="min-w-0 border-b border-slate-800 py-5 last:border-0 sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:gap-6">
      <div class="flex flex-wrap items-center justify-between gap-2 sm:items-start"><div><h3 class="font-bold text-white">${app.name}</h3><code class="mt-1 inline-block text-xs text-blue-300">${app.technical}</code></div><span class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[.65rem] font-semibold ${scopeClass}"><span class="size-1.5 rounded-full bg-current"></span>${scopeLabels[app.scope]}</span></div>
      <div><p class="text-sm leading-6 text-slate-400">${app.description}</p><p class="mt-2 text-xs leading-5 text-slate-400"><strong class="text-slate-300">Dirigido a:</strong> ${app.audience}</p><a class="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 underline decoration-blue-300/40 underline-offset-4 hover:text-blue-200" href="${documentationUrl}" target="_blank" rel="noopener noreferrer">Documentación oficial de Odoo 19<i data-lucide="arrow-up-right" class="size-3.5"></i></a></div>
    </article>`;
}

export function render() {
  const groups = applicationGroups.map(({ title, apps }) => `
    <section class="mt-12 first:mt-0">
      <div class="mb-5"><span class="text-xs font-bold uppercase tracking-[.18em] text-blue-400">Módulos Odoo</span><h2 class="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">${title}</h2></div>
      <div class="divide-y divide-slate-800">${apps.map(renderApp).join("")}</div>
    </section>`).join("");
  const faqs = questions.map(([question, answer]) => `<details class="group border-b border-slate-800 py-4 last:border-0"><summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-100 marker:hidden">${question}<span class="text-xl text-blue-300 transition group-open:rotate-45">+</span></summary><p class="mt-3 text-sm leading-7 text-slate-400">${answer}</p></details>`).join("");

  return `
    <section class="${pageTop}"><div class="${container}"><span class="${eyebrow}">Centro de documentación</span><h1 class="${pageTitle}">Qué ofrece Odoo y qué procesos puede cubrir.</h1><p class="${pageDescription}">Explora los módulos, el tipo de empresa para el que pueden ser útiles y qué funciones requieren conexión a internet. La disponibilidad de cada app se valida para Odoo 19 y la edición elegida.</p></div></section>
    <section class="${section}"><div class="${container}">
      <div class="border-y border-slate-800 py-5 sm:flex sm:items-center sm:justify-between sm:gap-6"><div><h2 class="font-bold text-white">Los planes locales son para operación interna.</h2><p class="mt-2 max-w-3xl text-sm leading-6 text-slate-400">Ventas, caja, inventario y compras pueden organizarse en la red del negocio. Sitios públicos, tienda online, chat web, correo externo, campañas, SMS, WhatsApp y acceso remoto requieren internet y/o proveedores; no vienen incluidos automáticamente en una instalación local.</p></div><a class="${buttonSecondary} mt-4 shrink-0 sm:mt-0" href="/planes/">Ver planes<i data-lucide="arrow-right" class="size-4"></i></a></div>
      <div class="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400"><span class="inline-flex items-center gap-2"><i class="size-2 rounded-full bg-emerald-400"></i>Uso interno en red local</span><span class="inline-flex items-center gap-2"><i class="size-2 rounded-full bg-blue-400"></i>Requiere acceso a internet</span><span class="inline-flex items-center gap-2"><i class="size-2 rounded-full bg-amber-300"></i>Proveedor externo o configuración adicional</span></div>
      ${groups}
      <div class="mt-6 rounded-xl border border-blue-400/15 bg-blue-400/[.06] p-4 text-sm leading-6 text-slate-300">Los nombres técnicos corresponden al ecosistema de módulos de Odoo. La presencia de un módulo no garantiza que todas sus funciones estén incluidas en Community ni que esté disponible sin dependencias. La edición, localización colombiana, instalación y condiciones del proveedor se confirman antes de cotizar. “Local” significa acceso a través de la red del negocio, no operación garantizada sin servidor, red o configuración.</div>
      <div class="mt-8 border-y border-slate-800 py-5 sm:flex sm:items-center sm:justify-between sm:gap-6"><div><h2 class="font-bold text-white">¿Buscas el servicio oficial alojado?</h2><p class="mt-1 max-w-2xl text-sm leading-6 text-slate-400">Odoo Online es administrado por Odoo. Consulta directamente sus planes y condiciones. La plataforma no admite módulos personalizados con código.</p></div><div class="mt-4 flex shrink-0 gap-4 sm:mt-0"><a class="text-sm font-semibold text-blue-300 hover:text-blue-200" href="https://www.odoo.com/trial" target="_blank" rel="noopener noreferrer">Prueba oficial<i data-lucide="arrow-up-right" class="ml-1 inline size-4"></i></a><a class="text-sm font-semibold text-blue-300 hover:text-blue-200" href="https://www.odoo.com/pricing" target="_blank" rel="noopener noreferrer">Precios<i data-lucide="arrow-up-right" class="ml-1 inline size-4"></i></a></div></div>
      <div class="mb-4 mt-14"><span class="${eyebrow}">Guías rápidas</span><h2 class="mt-2 text-3xl font-bold tracking-tight text-white">Preguntas frecuentes</h2></div>
      <div class="rounded-2xl border border-slate-800 bg-slate-900/80 px-5 sm:px-7">${faqs}</div>
      <section id="infraestructura" class="mt-16 scroll-mt-24">
        <span class="${eyebrow}">Preparación del proyecto</span>
        <h2 class="mt-2 text-3xl font-bold tracking-tight text-white">Equipos, cuentas y servicios externos</h2>
        <p class="mt-3 max-w-3xl text-sm leading-7 text-slate-400">El hardware y las cuentas pertenecen al cliente. El cliente compra y mantiene el computador o servidor, internet, dominio y cualquier VPS o proveedor contratado. En el plan remoto, el cliente crea y conserva su cuenta de Cloudflare y la cuenta donde compró el dominio; nosotros trabajamos con autorización, sin apropiarnos de sus credenciales. Precios, disponibilidad, condiciones y límites dependen del proveedor y pueden cambiar.</p>
        <div class="mt-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/80">
          <table class="w-full min-w-[700px] border-collapse text-left text-sm">
            <thead><tr class="text-slate-300"><th class="border-b border-slate-800 p-4">Escenario</th><th class="border-b border-slate-800 p-4">Punto de partida orientativo</th><th class="border-b border-slate-800 p-4">A cargo del cliente</th></tr></thead>
            <tbody>
              <tr><th class="border-b border-slate-800 p-4 font-medium text-slate-200">Un puesto con Windows</th><td class="border-b border-slate-800 p-4 text-slate-400">Docker Desktop requiere como base x64 con SLAT, virtualización activada, WSL 2 y 8 GB RAM. Para trabajar, recomendamos como referencia CPU moderna de 4 núcleos, 16 GB RAM y SSD de 512 GB.</td><td class="border-b border-slate-800 p-4 text-slate-400">PC Windows compatible, periféricos y respaldos.</td></tr>
              <tr><th class="border-b border-slate-800 p-4 font-medium text-slate-200">Servidor en red local</th><td class="border-b border-slate-800 p-4 text-slate-400">Como base para dimensionar: x64 con VT-x/AMD-V, 4 núcleos, 16 GB RAM, SSD/NVMe de 500 GB y red Gigabit. Más usuarios o carga pueden requerir 8 núcleos, 32 GB RAM, 1 TB NVMe y redundancia de almacenamiento.</td><td class="border-b border-slate-800 p-4 text-slate-400">Servidor, PCs, red, UPS y copia de seguridad independiente.</td></tr>
              <tr><th class="p-4 font-medium text-slate-200">Servidor con acceso remoto</th><td class="p-4 text-slate-400">Parte de la referencia del servidor local. Además necesita internet estable, subida suficiente para la concurrencia y dominio. La carga y disponibilidad deben medirse según el uso real.</td><td class="p-4 text-slate-400">Servidor, internet, dominio, cuenta Cloudflare y cualquier servicio de terceros.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mt-4 rounded-xl border border-amber-400/20 bg-amber-400/[.06] p-4 text-sm leading-6 text-amber-100">Estas cifras de producción son estimaciones iniciales para conversar y cotizar, no una certificación ni un mínimo oficial de Odoo. Proxmox publica mínimos de evaluación que no se deben usar como especificación de producción. La capacidad depende de concurrencia, datos, módulos, dispositivos, respaldos y crecimiento. Docker Desktop requiere una suscripción de pago en organizaciones con más de 250 empleados o más de USD 10 millones de ingresos anuales; revisa sus <a class="font-semibold text-amber-50 underline" href="https://www.docker.com/pricing/" target="_blank" rel="noopener noreferrer">términos comerciales</a>.</div>
        <div class="mt-7 divide-y divide-slate-800 border-y border-slate-800">
          <article class="py-5"><h3 class="font-bold text-white">Alojamiento y dominio</h3><p class="mt-1 text-sm leading-6 text-slate-400">El hosting compartido no equivale a un VPS compatible para alojar Odoo. El VPS es opcional, de pago y cambia la arquitectura del proyecto. El cliente crea la cuenta y compra/renueva cualquier servicio.</p><div class="mt-2 flex flex-wrap gap-x-5 gap-y-2"><a class="text-sm font-semibold text-blue-300 hover:text-blue-200" href="https://www.hostinger.com/" target="_blank" rel="noopener noreferrer">Hostinger<i data-lucide="arrow-up-right" class="ml-1 inline size-4"></i></a><a class="text-sm font-semibold text-blue-300 hover:text-blue-200" href="https://hpanel.hostinger.com/" target="_blank" rel="noopener noreferrer">Cuenta Hostinger<i data-lucide="arrow-up-right" class="ml-1 inline size-4"></i></a><a class="text-sm font-semibold text-blue-300 hover:text-blue-200" href="https://www.hostinger.com/vps-hosting" target="_blank" rel="noopener noreferrer">VPS<i data-lucide="arrow-up-right" class="ml-1 inline size-4"></i></a><a class="text-sm font-semibold text-blue-300 hover:text-blue-200" href="https://www.hostinger.com/tutorials/how-to-buy-a-domain-name" target="_blank" rel="noopener noreferrer">Guía para comprar dominio<i data-lucide="arrow-up-right" class="ml-1 inline size-4"></i></a></div></article>
          <article class="py-5"><h3 class="font-bold text-white">Cloudflare y dominio</h3><p class="mt-1 text-sm leading-6 text-slate-400">El cliente crea y conserva la cuenta. Si registra el dominio con otro proveedor, sigue el procedimiento oficial para agregarlo y configurar DNS/nameservers.</p><div class="mt-2 flex flex-wrap gap-x-5 gap-y-2"><a class="text-sm font-semibold text-blue-300 hover:text-blue-200" href="https://dash.cloudflare.com/sign-up" target="_blank" rel="noopener noreferrer">Crear cuenta<i data-lucide="arrow-up-right" class="ml-1 inline size-4"></i></a><a class="text-sm font-semibold text-blue-300 hover:text-blue-200" href="https://developers.cloudflare.com/fundamentals/account/create-account/" target="_blank" rel="noopener noreferrer">Guía de cuenta<i data-lucide="arrow-up-right" class="ml-1 inline size-4"></i></a><a class="text-sm font-semibold text-blue-300 hover:text-blue-200" href="https://developers.cloudflare.com/fundamentals/manage-domains/add-site/" target="_blank" rel="noopener noreferrer">Agregar dominio<i data-lucide="arrow-up-right" class="ml-1 inline size-4"></i></a><a class="text-sm font-semibold text-blue-300 hover:text-blue-200" href="https://developers.cloudflare.com/registrar/get-started/register-domain/" target="_blank" rel="noopener noreferrer">Comprar en Cloudflare<i data-lucide="arrow-up-right" class="ml-1 inline size-4"></i></a><a class="text-sm font-semibold text-blue-300 hover:text-blue-200" href="https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/get-started/create-remote-tunnel/" target="_blank" rel="noopener noreferrer">Guía de Tunnel<i data-lucide="arrow-up-right" class="ml-1 inline size-4"></i></a></div></article>
          <article class="py-5"><h3 class="font-bold text-white">Requisitos técnicos</h3><p class="mt-1 text-sm leading-6 text-slate-400">Consulta los requisitos oficiales de Proxmox VE y Docker Desktop. Las especificaciones de hardware anteriores son orientativas, no una garantía de rendimiento. Las condiciones de licencia comercial de Docker Desktop dependen del tamaño e ingresos de la organización.</p><div class="mt-2 flex flex-wrap gap-x-5 gap-y-2"><a class="text-sm font-semibold text-blue-300 hover:text-blue-200" href="https://pve.proxmox.com/pve-docs/chapter-pve-installation.html" target="_blank" rel="noopener noreferrer">Requisitos Proxmox VE<i data-lucide="arrow-up-right" class="ml-1 inline size-4"></i></a><a class="text-sm font-semibold text-blue-300 hover:text-blue-200" href="https://docs.docker.com/desktop/setup/install/windows-install/" target="_blank" rel="noopener noreferrer">Requisitos Docker Desktop<i data-lucide="arrow-up-right" class="ml-1 inline size-4"></i></a><a class="text-sm font-semibold text-blue-300 hover:text-blue-200" href="https://www.docker.com/pricing/" target="_blank" rel="noopener noreferrer">Licencias Docker<i data-lucide="arrow-up-right" class="ml-1 inline size-4"></i></a></div></article>
        </div>
        <p class="mt-4 text-xs leading-5 text-slate-400">Los enlaces llevan a páginas de proveedores o documentación oficial; no implican afiliación ni que sus servicios estén incluidos. Verifica precios y condiciones antes de contratar. Las guías y requisitos pueden cambiar.</p>
      </section>
      <div class="mt-6 flex flex-col gap-3 sm:flex-row"><a class="${buttonSecondary}" href="/cursos/">Ir a tutoriales<i data-lucide="play" class="size-4"></i></a><a class="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-500" href="/contacto/">Consultar mi caso<i data-lucide="message-circle" class="size-4"></i></a></div>
    </div></section>`;
}
