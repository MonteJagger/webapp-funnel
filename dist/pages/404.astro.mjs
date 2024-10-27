/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_r5EebU9E.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Cl0wR5Kv.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1>Uh Oh! Page Does Not Exist 😱</h1> </main> ` })}`;
}, "/Users/hiumathy.lam/Documents/repos/astro-cms/webapp-funnel/src/pages/404.astro", void 0);

const $$file = "/Users/hiumathy.lam/Documents/repos/astro-cms/webapp-funnel/src/pages/404.astro";
const $$url = "/webapp-funnel/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
