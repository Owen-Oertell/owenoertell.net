import { c as create_ssr_component, b as subscribe, e as escape, d as each, f as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
const _400Italic = "";
const App = "";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-bgdsr9.svelte-bgdsr9.svelte-bgdsr9{display:flex;align-items:flex-start;justify-content:flex-end\n}nav.svelte-bgdsr9>.svelte-bgdsr9:not([hidden])~.svelte-bgdsr9:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.5rem * var(--tw-space-x-reverse));margin-left:calc(1.5rem * calc(1 - var(--tw-space-x-reverse)))\n}nav.svelte-bgdsr9.svelte-bgdsr9.svelte-bgdsr9{padding-top:0.125rem;padding-bottom:0.125rem;font-size:1.125rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(115 115 115 / var(--tw-text-opacity))\n}.page-title.svelte-bgdsr9.svelte-bgdsr9.svelte-bgdsr9{font-weight:300\n}@media(max-width: 580px){.page-title.svelte-bgdsr9.svelte-bgdsr9.svelte-bgdsr9{display:block;font-size:1.25rem;line-height:1.75rem\n    }.page-title.svelte-bgdsr9 .svelte-bgdsr9.svelte-bgdsr9:first-child{display:none\n    }}@media(max-width: 420px){nav.svelte-bgdsr9.svelte-bgdsr9.svelte-bgdsr9{flex-direction:column;align-items:flex-end\n    }nav.svelte-bgdsr9>.svelte-bgdsr9:not([hidden])~.svelte-bgdsr9:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0px * var(--tw-space-x-reverse));margin-left:calc(0px * calc(1 - var(--tw-space-x-reverse)))\n    }}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const links = [
    { name: "writings", href: "/writing" },
    {
      name: "publications",
      href: "/publications"
    },
    { name: "resume", href: "/resume" }
  ];
  let pageTitle = null;
  $$result.css.add(css$1);
  {
    {
      const link = links.find(({ href }) => $page.url.pathname.includes(href));
      if (link) {
        pageTitle = link.name.charAt(0).toUpperCase() + link.name.slice(1);
      } else {
        pageTitle = null;
      }
    }
  }
  $$unsubscribe_page();
  return `<header class="${"layout-md flex justify-between items-start"}" data-sveltekit-noscroll data-sveltekit-preload-code="${"eager"}"><h1 class="${"font-bold text-black text-2xl mb-6"}"><a href="${"/"}">Owen Oertell</a>
    ${pageTitle ? `<span class="${"page-title svelte-bgdsr9"}"><span class="${"text-neutral-400 svelte-bgdsr9"}">—</span>
        ${escape(pageTitle)}</span>` : ``}</h1>
  <nav class="${"svelte-bgdsr9"}">${each(links, (link) => {
    return `<a${add_attribute("href", link.href, 0)} class="${[
      "hover:text-black transition-colors svelte-bgdsr9",
      $page.url.pathname === link.href ? "text-black" : ""
    ].join(" ").trim()}">${escape(link.name)}
      </a>`;
  })}</nav>
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".row.svelte-x197ko.svelte-x197ko.svelte-x197ko{display:flex;align-items:center\n}.row.svelte-x197ko>.svelte-x197ko:not([hidden])~.svelte-x197ko:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))\n}.row.svelte-x197ko a.svelte-x197ko.svelte-x197ko{min-width:-moz-fit-content;min-width:fit-content;--tw-text-opacity:1;color:rgb(115 115 115 / var(--tw-text-opacity))\n}.row.svelte-x197ko hr.svelte-x197ko.svelte-x197ko{margin-top:0.125rem;width:100%;border-style:dotted;--tw-border-opacity:1;border-color:rgb(212 212 212 / var(--tw-border-opacity))\n}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"layout-md mt-20 text-lg flex flex-col"}"><div class="${"row svelte-x197ko"}">email
    <hr class="${"svelte-x197ko"}">
    <a class="${"link svelte-x197ko"}" href="${"mailto:ojo2@cornell.edu"}">ojo2@cornell.edu</a></div>
  <div class="${"row svelte-x197ko"}">github
    <hr class="${"svelte-x197ko"}">
    <a class="${"link svelte-x197ko"}" href="${"https://github.com/owen-oertell"}">@owen-oertell</a></div>
  <div class="${"row svelte-x197ko"}">scholar
    <hr class="${"svelte-x197ko"}">
    <a class="${"link svelte-x197ko"}" href="${"https://scholar.google.com/citations?user=y0B6gawAAAAJ&hl=en"}">owen-oertell</a></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1gx8tps_START -->${`
    <script async src="${"https://www.googletagmanager.com/gtag/js?id=G-DTJQ3J1NVE"}"><\/script>
    <script>window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-DTJQ3J1NVE");
    <\/script>`}<!-- HEAD_svelte-1gx8tps_END -->`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

${`<main>${slots.default ? slots.default({}) : ``}</main>`}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
