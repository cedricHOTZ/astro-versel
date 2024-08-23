import 'cookie';
import 'kleur/colors';
import './chunks/astro-designed-error-pages_B96d-sjs.mjs';
import { g as decodeKey } from './chunks/astro/server_DRe_Aqwr.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/ced/Desktop/astro-db1/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"button[data-astro-cid-bweis6se]{border:none;background-color:var(--primary);color:#fff;min-width:200px;height:50px;border-radius:.5rem;font-size:1.1rem;padding:0 .9rem;cursor:pointer}button[data-astro-cid-bweis6se]:hover{opacity:.9}\nform[data-astro-cid-vi4obb7v]{display:flex;flex-direction:column}.action[data-astro-cid-vi4obb7v]{margin-top:2rem}\nheader[data-astro-cid-qmpwvs2w]{width:100%;height:70px;display:flex;justify-content:center;align-items:center;font-family:system-ui,sans-serif;background-color:var(--front-background);border-bottom:1px solid var(--background)}.header-container[data-astro-cid-qmpwvs2w]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;max-width:var(--desktop-breakpoint);width:100%;padding:0 .8rem}.site-title[data-astro-cid-qmpwvs2w]{display:flex;align-items:center;text-decoration:none;color:var(--accent);font-size:1.2rem}.header-nav[data-astro-cid-qmpwvs2w]{display:flex;gap:1.2rem}.site-title[data-astro-cid-qmpwvs2w] img[data-astro-cid-qmpwvs2w]{margin-right:.5rem}.header-link[data-astro-cid-qmpwvs2w]{text-decoration:none;color:var(--accent);font-size:1.2rem}.header-link[data-astro-cid-qmpwvs2w]:hover{text-decoration:underline}:root{--primary: #0d9488;--secondary: #cdd1d5;--tertiary: #ec4899;--accent: white;--border: #d7d9d9;--text: #979daa;--front-background: #111827;--background: #1f2937;--desktop-breakpoint: 1280px;--mobile-breakpoint: 640px}html{font-family:system-ui,sans-serif;background-color:var(--background);box-sizing:border-box;color:var(--text)}*,*:before,*:after{box-sizing:inherit}body{display:grid;grid-template-rows:auto 1fr auto;min-height:100vh;margin:0}h1{color:var(--accent);font-size:3em}h2{color:var(--accent);font-size:1.6rem}h3{font-size:1.3rem;margin-block-start:.5rem;margin-block-end:.5rem;color:var(--secondary)}.paragraph{font-size:1.2rem;margin:1.7rem 0 2rem}input,textarea{border-radius:.5rem;margin:1rem;padding:1rem;font-size:1.3rem}input{height:3rem}textarea{height:10rem}.form-control{width:100%;display:flex;flex-direction:column;margin:.75rem 0}.link{color:var(--secondary);text-decoration:none}.link:hover{text-decoration:underline}main[data-astro-cid-sckkx6r4]{max-width:var(--desktop-breakpoint);width:100%;height:100%;margin:auto;padding:1rem 4rem}@media only screen and (max-width: 640px){main[data-astro-cid-sckkx6r4]{padding:1rem}}\n"}],"routeData":{"route":"/meal/add","isIndex":false,"type":"page","pattern":"^\\/meal\\/add\\/?$","segments":[[{"content":"meal","dynamic":false,"spread":false}],[{"content":"add","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/meal/add.astro","pathname":"/meal/add","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"button[data-astro-cid-bweis6se]{border:none;background-color:var(--primary);color:#fff;min-width:200px;height:50px;border-radius:.5rem;font-size:1.1rem;padding:0 .9rem;cursor:pointer}button[data-astro-cid-bweis6se]:hover{opacity:.9}\nimg[data-astro-cid-fv5zmkfs]{max-width:320px;object-fit:cover;border-radius:1.8rem}\nheader[data-astro-cid-qmpwvs2w]{width:100%;height:70px;display:flex;justify-content:center;align-items:center;font-family:system-ui,sans-serif;background-color:var(--front-background);border-bottom:1px solid var(--background)}.header-container[data-astro-cid-qmpwvs2w]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;max-width:var(--desktop-breakpoint);width:100%;padding:0 .8rem}.site-title[data-astro-cid-qmpwvs2w]{display:flex;align-items:center;text-decoration:none;color:var(--accent);font-size:1.2rem}.header-nav[data-astro-cid-qmpwvs2w]{display:flex;gap:1.2rem}.site-title[data-astro-cid-qmpwvs2w] img[data-astro-cid-qmpwvs2w]{margin-right:.5rem}.header-link[data-astro-cid-qmpwvs2w]{text-decoration:none;color:var(--accent);font-size:1.2rem}.header-link[data-astro-cid-qmpwvs2w]:hover{text-decoration:underline}:root{--primary: #0d9488;--secondary: #cdd1d5;--tertiary: #ec4899;--accent: white;--border: #d7d9d9;--text: #979daa;--front-background: #111827;--background: #1f2937;--desktop-breakpoint: 1280px;--mobile-breakpoint: 640px}html{font-family:system-ui,sans-serif;background-color:var(--background);box-sizing:border-box;color:var(--text)}*,*:before,*:after{box-sizing:inherit}body{display:grid;grid-template-rows:auto 1fr auto;min-height:100vh;margin:0}h1{color:var(--accent);font-size:3em}h2{color:var(--accent);font-size:1.6rem}h3{font-size:1.3rem;margin-block-start:.5rem;margin-block-end:.5rem;color:var(--secondary)}.paragraph{font-size:1.2rem;margin:1.7rem 0 2rem}input,textarea{border-radius:.5rem;margin:1rem;padding:1rem;font-size:1.3rem}input{height:3rem}textarea{height:10rem}.form-control{width:100%;display:flex;flex-direction:column;margin:.75rem 0}.link{color:var(--secondary);text-decoration:none}.link:hover{text-decoration:underline}main[data-astro-cid-sckkx6r4]{max-width:var(--desktop-breakpoint);width:100%;height:100%;margin:auto;padding:1rem 4rem}@media only screen and (max-width: 640px){main[data-astro-cid-sckkx6r4]{padding:1rem}}\n"}],"routeData":{"route":"/meal/[id]","isIndex":false,"type":"page","pattern":"^\\/meal\\/([^/]+?)\\/?$","segments":[[{"content":"meal","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/meal/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".hero-card[data-astro-cid-wtygnshs]{width:100%;height:30rem;border-radius:2rem;background-image:url(/images/burger.webp);background-size:cover;background-position:center}.hero-card__container[data-astro-cid-wtygnshs]{display:flex;flex-direction:column;height:100%;justify-content:center;align-items:center;background-color:#0000004d;border-radius:2rem;padding:4rem;text-shadow:rgb(210,201,163) 1px 0 10px}h1[data-astro-cid-wtygnshs]{color:#fff;text-align:center}.hero-card__text[data-astro-cid-wtygnshs]{width:100%;color:#fff;font-size:1.3rem;border-radius:.5rem;text-align:center}@media only screen and (max-width: 600px){.hero-card__text[data-astro-cid-wtygnshs]{font-size:1.1rem}}.meal-link[data-astro-cid-he5sby3l]{position:relative;display:flex;flex-direction:column;text-decoration:none;height:100%}.meal-link[data-astro-cid-he5sby3l]:hover{opacity:.9}.meal-card[data-astro-cid-he5sby3l]{width:100%;list-style-type:none;border-radius:1rem}.meal-card__img[data-astro-cid-he5sby3l]{object-fit:cover;width:100%;height:15rem;border-radius:1rem}h3[data-astro-cid-he5sby3l]{position:absolute;bottom:0;left:50%;width:100%;text-align:center;transform:translate(-50%);color:#fff;font-size:1.5rem;text-shadow:rgb(17,17,16) 1px 0 10px}.meal-list[data-astro-cid-r2tvoqnu]{list-style:\"none\";margin:0;padding:0;display:grid;grid-template-columns:repeat(3,1fr);gap:1.3rem}@media only screen and (max-width: 640px){.meal-list[data-astro-cid-r2tvoqnu]{grid-template-columns:repeat(1,1fr)}}\nheader[data-astro-cid-qmpwvs2w]{width:100%;height:70px;display:flex;justify-content:center;align-items:center;font-family:system-ui,sans-serif;background-color:var(--front-background);border-bottom:1px solid var(--background)}.header-container[data-astro-cid-qmpwvs2w]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;max-width:var(--desktop-breakpoint);width:100%;padding:0 .8rem}.site-title[data-astro-cid-qmpwvs2w]{display:flex;align-items:center;text-decoration:none;color:var(--accent);font-size:1.2rem}.header-nav[data-astro-cid-qmpwvs2w]{display:flex;gap:1.2rem}.site-title[data-astro-cid-qmpwvs2w] img[data-astro-cid-qmpwvs2w]{margin-right:.5rem}.header-link[data-astro-cid-qmpwvs2w]{text-decoration:none;color:var(--accent);font-size:1.2rem}.header-link[data-astro-cid-qmpwvs2w]:hover{text-decoration:underline}:root{--primary: #0d9488;--secondary: #cdd1d5;--tertiary: #ec4899;--accent: white;--border: #d7d9d9;--text: #979daa;--front-background: #111827;--background: #1f2937;--desktop-breakpoint: 1280px;--mobile-breakpoint: 640px}html{font-family:system-ui,sans-serif;background-color:var(--background);box-sizing:border-box;color:var(--text)}*,*:before,*:after{box-sizing:inherit}body{display:grid;grid-template-rows:auto 1fr auto;min-height:100vh;margin:0}h1{color:var(--accent);font-size:3em}h2{color:var(--accent);font-size:1.6rem}h3{font-size:1.3rem;margin-block-start:.5rem;margin-block-end:.5rem;color:var(--secondary)}.paragraph{font-size:1.2rem;margin:1.7rem 0 2rem}input,textarea{border-radius:.5rem;margin:1rem;padding:1rem;font-size:1.3rem}input{height:3rem}textarea{height:10rem}.form-control{width:100%;display:flex;flex-direction:column;margin:.75rem 0}.link{color:var(--secondary);text-decoration:none}.link:hover{text-decoration:underline}main[data-astro-cid-sckkx6r4]{max-width:var(--desktop-breakpoint);width:100%;height:100%;margin:auto;padding:1rem 4rem}@media only screen and (max-width: 640px){main[data-astro-cid-sckkx6r4]{padding:1rem}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/ced/Desktop/astro-db1/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/ced/Desktop/astro-db1/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/ced/Desktop/astro-db1/src/pages/meal/[id].astro",{"propagation":"none","containsHead":true}],["/Users/ced/Desktop/astro-db1/src/pages/meal/add.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/meal/add@_@astro":"pages/meal/add.astro.mjs","\u0000@astro-page:src/pages/meal/[id]@_@astro":"pages/meal/_id_.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/ced/Desktop/astro-db1/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_DrE6FHPp.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/logo.BBpTRhRo.png","/favicon.svg","/images/burger-meal.webp","/images/burger.webp","/images/tacos.webp","/404.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"NwlZCKKAZF8erHhjwMmDHJNmnV+nKWpnckfXInOH7ro=","experimentalEnvGetSecretEnabled":false});

export { manifest };
