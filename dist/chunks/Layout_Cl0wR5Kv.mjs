import { b as createAstro, c as createComponent, r as renderTemplate, d as addAttribute, e as renderHead, f as renderSlot } from './astro/server_r5EebU9E.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://montejagger.github.io/webapp-funnel/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/webapp-funnel/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <a href="/webapp-funnel">Landing Page</a> <a href="/webapp-funnel/signup">Sign up</a> ${renderSlot($$result, $$slots["default"])} <ul> <li><a href="/webapp-funnel/posts/wrestling/">Wrestling</a></li> <li><a href="/webapp-funnel/posts/racing/">Racing</a></li> </ul> </body></html>`;
}, "/Users/hiumathy.lam/Documents/repos/astro-cms/webapp-funnel/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
