import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D7mBIwgW.mjs';
import { manifest } from './manifest_DrE6FHPp.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/meal/add.astro.mjs');
const _page3 = () => import('./pages/meal/_id_.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/meal/add.astro", _page2],
    ["src/pages/meal/[id].astro", _page3],
    ["src/pages/index.astro", _page4]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "abaf6cdc-d603-437c-99cf-a3575369835d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
