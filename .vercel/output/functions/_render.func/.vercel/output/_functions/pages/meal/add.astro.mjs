import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DRe_Aqwr.mjs';
import 'kleur/colors';
import { d as db, M as Meal } from '../../chunks/_astro_db_Duvznnk9.mjs';
import { $ as $$Button } from '../../chunks/Button_jcmdFL1o.mjs';
import { $ as $$Layout } from '../../chunks/Layout_ate7B0-M.mjs';
/* empty css                                  */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Add;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const title = formData.get("title");
    const description = formData.get("description");
    const image = formData.get("image");
    const imageAlt = formData.get("imageAlt");
    const authorName = formData.get("authorName");
    const arrayBuffer = await image.arrayBuffer();
    const imageBase64 = Buffer.from(arrayBuffer).toString("base64");
    await db.insert(Meal).values({
      title,
      description,
      published: /* @__PURE__ */ new Date(),
      image: `data:image/webp;base64,${imageBase64}`,
      imageAlt,
      authorName
      // Assurez-vous que 'authorName' est un champ valide dans 'Meal'
    });
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Proposer un plat", "data-astro-cid-vi4obb7v": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-vi4obb7v>Proposer un plat</h1> <form method="post" enctype="multipart/form-data" data-astro-cid-vi4obb7v> <div class="form-control" data-astro-cid-vi4obb7v> <label for="authorName" data-astro-cid-vi4obb7v>Nom de l'auteur</label> <input type="text" name="authorName" id="authorName" placeholder="Ex: John Doe" data-astro-cid-vi4obb7v> </div> <div class="form-control" data-astro-cid-vi4obb7v> <label for="title" data-astro-cid-vi4obb7v>Titre</label> <input type="text" name="title" id="title" placeholder="Ex: Tacos" data-astro-cid-vi4obb7v> </div> <div class="form-control" data-astro-cid-vi4obb7v> <label for="description" data-astro-cid-vi4obb7v>Description</label> <textarea name="description" id="description" placeholder="Ex: Découvrez notre taco croustillant" data-astro-cid-vi4obb7v></textarea> </div> <div class="form-control" data-astro-cid-vi4obb7v> <label for="image" data-astro-cid-vi4obb7v>Image</label> <input type="file" name="image" id="image" data-astro-cid-vi4obb7v> </div> <div class="form-control" data-astro-cid-vi4obb7v> <label for="imageAlt" data-astro-cid-vi4obb7v>Description de l'image</label> <input type="text" name="imageAlt" id="imageAlt" placeholder="Ex: Une image de tacos" data-astro-cid-vi4obb7v> </div> <section class="action" data-astro-cid-vi4obb7v> ${renderComponent($$result2, "Button", $$Button, { "type": "submit", "data-astro-cid-vi4obb7v": true }, { "default": ($$result3) => renderTemplate`Ajouter` })} </section> </form> ` })} `;
}, "/Users/ced/Desktop/astro-db1/src/pages/meal/add.astro", void 0);

const $$file = "/Users/ced/Desktop/astro-db1/src/pages/meal/add.astro";
const $$url = "/meal/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Add,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
