import { c as create_ssr_component, e as escape, f as add_attribute } from "./index.js";
const Seo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { ogTitle = null } = $$props;
  let { description } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.ogTitle === void 0 && $$bindings.ogTitle && ogTitle !== void 0)
    $$bindings.ogTitle(ogTitle);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `${$$result.head += `<!-- HEAD_svelte-6riy7c_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="${"description"}"${add_attribute("content", description, 0)}><meta property="${"og:title"}"${add_attribute("content", ogTitle ?? title, 0)}><meta property="${"og:description"}"${add_attribute("content", description, 0)}><meta property="${"og:image"}" content="${"https://www.owenoertell.com/assets/images/image_round_2.png"}"><meta name="${"twitter:card"}" content="${"summary_large_image"}"><!-- HEAD_svelte-6riy7c_END -->`, ""}`;
});
export {
  Seo as S
};
