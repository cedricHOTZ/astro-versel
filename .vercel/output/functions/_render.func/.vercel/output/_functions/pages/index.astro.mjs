import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, d as createAstro, b as renderComponent } from '../chunks/astro/server_DRe_Aqwr.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_ate7B0-M.mjs';
import { d as db, M as Meal } from '../chunks/_astro_db_Duvznnk9.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hero-card" data-astro-cid-wtygnshs> <div class="hero-card__container" data-astro-cid-wtygnshs> <h1 data-astro-cid-wtygnshs>Découvrez les Meilleurs Plats du Monde</h1> <p class="hero-card__text" data-astro-cid-wtygnshs>
Préparez-vous à un voyage culinaire exceptionnel !
</p> </div> </div> `;
}, "/Users/ced/Desktop/astro-db1/src/components/common/Hero.astro", void 0);

const $$Astro$1 = createAstro();
const $$MealCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MealCard;
  const {
    meal: { id, title, image, imageAlt }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="meal-card" data-astro-cid-he5sby3l> <a class="meal-link"${addAttribute(`/meal/${id}`, "href")} data-astro-cid-he5sby3l> <img${addAttribute(image, "src")}${addAttribute(imageAlt, "alt")} class="meal-card__img" data-astro-cid-he5sby3l> <h3 data-astro-cid-he5sby3l>${title}</h3> </a> </li> `;
}, "/Users/ced/Desktop/astro-db1/src/components/meal/MealCard.astro", void 0);

const $$Astro = createAstro();
const $$MealList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MealList;
  const { meals } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="meal-list" data-astro-cid-r2tvoqnu> ${meals.map((meal) => renderTemplate`${renderComponent($$result, "MealCard", $$MealCard, { "meal": meal, "data-astro-cid-r2tvoqnu": true })}`)} </ul> `;
}, "/Users/ced/Desktop/astro-db1/src/components/meal/MealList.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const meals = await db.select().from(Meal);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Liste des plats" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<h2>Liste des plats</h2> <p class="paragraph">
Retrouvez la liste de nos délicieux plats proposés par la communauté.
</p> ${renderComponent($$result2, "MeaLList", $$MealList, { "meals": meals })} ` })}`;
}, "/Users/ced/Desktop/astro-db1/src/pages/index.astro", void 0);

const $$file = "/Users/ced/Desktop/astro-db1/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
