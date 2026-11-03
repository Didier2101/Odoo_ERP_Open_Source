import { renderShell } from "./site-shell.js";

const page = document.body.dataset.page;
const pageModules = {
  home: () => import("./pages/home.js"),
  propuesta: () => import("./pages/propuesta.js"),
  plans: () => import("./pages/plans.js"),
  "plan-detail": () => import("./pages/plan-detail.js"),
  documentation: () => import("./pages/documentation.js"),
  courses: () => import("./pages/courses.js"),
  contact: () => import("./pages/contact.js"),
  legal: () => import("./pages/legal.js")
};

const loadPage = pageModules[page];
if (!loadPage) {
  throw new Error(`No hay un módulo registrado para la página "${page}".`);
}

renderShell(page);
const pageModule = await loadPage();
document.querySelector("#page-content").innerHTML = pageModule.render();
document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});
if (window.lucide) {
  window.lucide.createIcons();
}

document.dispatchEvent(new CustomEvent("odoo:page-ready", { detail: { page } }));
