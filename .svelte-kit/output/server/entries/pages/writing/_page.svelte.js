import { c as create_ssr_component, d as each, f as add_attribute, e as escape, v as validate_component } from "../../../chunks/index2.js";
import { S as Seo } from "../../../chunks/Seo.js";
import strftime from "strftime";
import { A as Arrow_up_right } from "../../../chunks/arrow-up-right.js";
import { d as data } from "../../../chunks/writing.js";
const utc = strftime.utc();
function formatTime(format, date) {
  return utc(format, new Date(date));
}
const WritingList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data: data2 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  return `<div class="${"grid gap-y-4"}">${each(data2, (item) => {
    return `<a${add_attribute("href", "/writing/" + item.slug, 0)} class="${"block -mx-3 px-3 hover:bg-neutral-100 transition-colors"}" rel="${"noreferrer"}"><div class="${"flex flex-col sm:flex-row sm:items-end mb-1.5"}"><div class="${"text-black"}">${escape(item.title)}
          ${validate_component(Arrow_up_right, "ArrowUpRight").$$render(
      $$result,
      {
        size: 18,
        class: "inline text-neutral-400"
      },
      {},
      {}
    )}
        </div></div>
      <div><span class="${"text-neutral-500"}">tags: ${escape(item.tags)}</span></div>
      <div class="${"sm:ml-auto mb-0.5 text-neutral-500"}"><div class="${"italic"}">${escape(formatTime("%B %-d, %Y", item.date))}
        </div></div>
      
    </a>`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Owen Oertell – Writings",
      description: "writings"
    },
    {},
    {}
  )}

<section class="${"layout-md"}">Some of my writings about machine learning and research.
</section>

<section class="${"layout-md py-12"}">${validate_component(WritingList, "WritingList").$$render($$result, { data }, {}, {})}</section>`;
});
export {
  Page as default
};
