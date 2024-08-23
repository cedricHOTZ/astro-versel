import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, e as addAttribute, f as renderHead, a as renderSlot, d as createAstro } from './astro/server_DRe_Aqwr.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_CCrfvzaj.mjs';
/* empty css                         */
import 'clsx';

const logo = new Proxy({"src":"/_astro/logo.BBpTRhRo.png","width":630,"height":638,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ced/Desktop/astro-db1/src/assets/logo.png";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-qmpwvs2w> <section class="header-container" data-astro-cid-qmpwvs2w> <a href="/" class="site-title" data-astro-cid-qmpwvs2w> ${renderComponent($$result, "Image", $$Image, { "src": logo, "width": 45, "alt": "Delice Gourmands Logo", "data-astro-cid-qmpwvs2w": true })} <span data-astro-cid-qmpwvs2w>Délices Gourmands</span> </a> <nav class="header-nav" data-astro-cid-qmpwvs2w> <a href="/meal/add" class="header-link" data-astro-cid-qmpwvs2w>Proposer un plat</a> </nav> </section> </header> `;
}, "/Users/ced/Desktop/astro-db1/src/components/common/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer style="height: 7dvh;background-color: #141528;"> <section class="header-container" style="height: 100%;"> <div class="" style="background-color: rgba(0, 0, 0, 0.2);text-align: center;display: flex; justify-content: center; align-items: center; height: 100%;">
© 2024 Copyright:
<a class="text-white" style="color:white ;margin-left:12px ; text-decoration: none;" target="_blank" href="https://hotz-cedric.fr/"> HOTZ Cédric</a> </div> </section>  </footer>`;
}, "/Users/ced/Desktop/astro-db1/src/components/common/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "/Users/ced/Desktop/astro-db1/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
