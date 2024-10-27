/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_r5EebU9E.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Cl0wR5Kv.mjs';
export { renderers } from '../renderers.mjs';

const $$Signup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Create an Account" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="h-screen flex flex-col items-center sm:m-8 gap-8"> <h1 class="text-3xl lg:text-5xl">Create Your Account</h1> <div class="bg-gray-50 border rounded w-full max-w-xs"> <form class="flex flex-col px-8 py-12 gap-4"> <div class="flex flex-col gap-2"> <label for="email">Email</label> <input type="email" name="email" class="shadow border rounded px-3 py-2" placeholder="Email" required> </div> <div class="flex flex-col gap-2"> <label for="password">Password</label> <input type="password" name="password" class="shadow border rounded px-3 py-2" placeholder="******************" required> </div> <div class="flex justify-between"> <a type="button" class="text-gray-600 text-sm">Forgot Password?</a> </div> <button type="submit" class="bg-primary-700 text-white rounded px-4 py-2">Sign up</button> </form> </div> </main> ` })}`;
}, "/Users/hiumathy.lam/Documents/repos/astro-cms/webapp-funnel/src/pages/signup.astro", void 0);

const $$file = "/Users/hiumathy.lam/Documents/repos/astro-cms/webapp-funnel/src/pages/signup.astro";
const $$url = "/webapp-funnel/signup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Signup,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
