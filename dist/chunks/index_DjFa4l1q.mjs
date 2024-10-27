/* empty css                         */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_r5EebU9E.mjs';
import 'kleur/colors';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
/* empty css                         */
import { $ as $$Layout } from './Layout_Cl0wR5Kv.mjs';

const Hero = (content) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "hero-section-wrapper",
      style: { backgroundImage: `url(${content.imageUrl})` },
      children: [
        /* @__PURE__ */ jsx(Fragment, { children: content.videoUrl ? /* @__PURE__ */ jsx("div", { className: "highlight-video-container", children: /* @__PURE__ */ jsx(
          "video",
          {
            className: "highlight-video",
            src: content.videoUrl,
            autoPlay: true,
            muted: true,
            loop: true,
            children: /* @__PURE__ */ jsx("source", { src: content.videoUrl, type: "video/mp4" })
          }
        ) }) : null }),
        /* @__PURE__ */ jsxs("div", { className: "content-wrapper p-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "title-content", children: [
            /* @__PURE__ */ jsx("h1", { dangerouslySetInnerHTML: { __html: content.title } }),
            /* @__PURE__ */ jsx("p", { className: "text-white", children: content.subtitle })
          ] }),
          /* @__PURE__ */ jsx("button", { className: "bg-primary hover:bg-primary-800 text-white font-bold py-2 px-4 rounded", children: "Get Started" })
        ] })
      ]
    }
  );
};

const $$Astro = createAstro("https://montejagger.github.io/webapp-funnel/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Signup to FloSports" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!-- Hero --> ${renderComponent($$result2, "Hero", Hero, { ...frontmatter.content })} </main> ` })}`;
}, "/Users/hiumathy.lam/Documents/repos/astro-cms/webapp-funnel/src/pages/index.astro", void 0);

const $$file = "/Users/hiumathy.lam/Documents/repos/astro-cms/webapp-funnel/src/pages/index.astro";
const $$url = "/webapp-funnel";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index as $, _page as _ };
