import { c as create_ssr_component, v as validate_component, d as each, f as add_attribute, e as escape } from "../../../chunks/index.js";
import { S as Seo } from "../../../chunks/Seo.js";
import { I as Icon } from "../../../chunks/Icon.js";
import strftime from "strftime";
const Arrow_up_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "7",
        "y1": "17",
        "x2": "17",
        "y2": "7"
      }
    ],
    ["polyline", { "points": "7 7 17 7 17 17" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({ name: "arrow-up-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ArrowUpRight = Arrow_up_right;
const utc = strftime.utc();
function formatTime(format, date) {
  return utc(format, new Date(date));
}
const WritingList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data: data2 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  return `<div class="${"grid gap-y-4"}">${each(data2, (item) => {
    return `<a${add_attribute("href", item.link, 0)} class="${"block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors"}" target="${"_blank"}" rel="${"noreferrer"}"><div class="${"flex flex-col sm:flex-row sm:items-end mb-1.5"}"><div class="${"text-lg text-black"}">${escape(item.title)}
          ${validate_component(ArrowUpRight, "ArrowUpRight").$$render(
      $$result,
      {
        size: 18,
        class: "inline text-neutral-400"
      },
      {},
      {}
    )}</div>
        <div class="${"sm:ml-auto mb-0.5 text-neutral-500"}">${escape(formatTime("%B %-d, %Y", item.date))}
        </div></div>
      <div class="${"text-lg leading-snug font-serif italic"}">${escape(item.summary)}</div>
    </a>`;
  })}</div>`;
});
var data = { papers: [{
  title: "Introduction to Machine Learning",
  date: "2021-11-7",
  summary: "Brief introduction to foundations of neural networks and backpropagation. Keynote talk given at Governor's Honors Program.\n",
  link: "https://files.owenoertell.com/presentations/intro-ml.pdf"
}] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Owen Oertell – Writing",
      description: "Past writing: academic papers, presentations, notes, tutorials, and technical blog posts."
    },
    {},
    {}
  )}

<section class="${"layout-md py-12"}"><h2 class="${"heading2"}">Academic Writing</h2>
  ${validate_component(WritingList, "WritingList").$$render($$result, { data: data.papers }, {}, {})}</section>`;
});
export {
  Page as default
};
