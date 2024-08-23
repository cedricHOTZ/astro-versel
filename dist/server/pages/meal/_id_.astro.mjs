import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_K0wPpDs2.mjs';
import 'kleur/colors';
import { d as db, M as Meal } from '../../chunks/_astro_db_Duvznnk9.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BL8YfetP.mjs';
import { $ as $$Button } from '../../chunks/Button_DAw-rREL.mjs';
/* empty css                                   */
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const mealId = Astro2.params.id;
  if (Astro2.request.method === "POST") {
    await db.delete(Meal).where(eq(Meal.id, +mealId));
    return Astro2.redirect("/");
  }
  const result = await db.select().from(Meal).where(eq(Meal.id, +mealId));
  if (!result || result.length === 0) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  const meal = result[0];
  const { title, description, image, imageAlt, authorName } = meal;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Datail du plat", "data-astro-cid-fv5zmkfs": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-fv5zmkfs>${title}</h1> <img${addAttribute(image, "src")}${addAttribute(imageAlt, "alt")} data-astro-cid-fv5zmkfs> <p class="paragraph" data-astro-cid-fv5zmkfs>${description}</p> <p class="paragraphe" data-astro-cid-fv5zmkfs>
Auteur:${authorName} </p> <form method="POST" data-astro-cid-fv5zmkfs> ${renderComponent($$result2, "Button", $$Button, { "type": "submit", "data-astro-cid-fv5zmkfs": true }, { "default": ($$result3) => renderTemplate`Supprimer` })} </form> ` })} `;
}, "/Users/ced/Desktop/astro-db1/src/pages/meal/[id].astro", void 0);

const $$file = "/Users/ced/Desktop/astro-db1/src/pages/meal/[id].astro";
const $$url = "/meal/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
