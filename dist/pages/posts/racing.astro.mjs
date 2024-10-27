/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from '../../chunks/astro/server_r5EebU9E.mjs';
import 'kleur/colors';
import { $ as $$Index } from '../../chunks/index_DjFa4l1q.mjs';
export { renderers } from '../../renderers.mjs';

const html = "";

				const frontmatter = {"layout":"../index.astro","titleTag":"Signup for FloRacing Today!","content":{"title":"<span class='text-white'>The <span class='text-primary'>Best</span><br>Racing Events</span>","subtitle":"Stream thousands of dirt, drag, pavement, and snow races.","imageUrl":"https://d6fm3yzmawlcs.cloudfront.net/funnelAssets/dark-theme/floracing-hero-2.jpg","videoUrl":"https://d6fm3yzmawlcs.cloudfront.net/funnelAssets/videos/floracing_signup.mp4"}};
				const file = "/Users/hiumathy.lam/Documents/repos/astro-cms/webapp-funnel/src/pages/posts/racing.md";
				const url = "/webapp-funnel/posts/racing";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Index, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
