import { c as create_ssr_component, e as escape, f as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import { S as Seo } from "../../../chunks/Seo.js";
const Workplace = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { company } = $$props;
  let { url } = $$props;
  let { dates } = $$props;
  let { location } = $$props;
  let { defaultHidden = false } = $$props;
  let hidden = defaultHidden;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.company === void 0 && $$bindings.company && company !== void 0)
    $$bindings.company(company);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.dates === void 0 && $$bindings.dates && dates !== void 0)
    $$bindings.dates(dates);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  if ($$props.defaultHidden === void 0 && $$bindings.defaultHidden && defaultHidden !== void 0)
    $$bindings.defaultHidden(defaultHidden);
  return `<div class="${["mb-8", hidden ? "cursor-pointer" : ""].join(" ").trim()}"><h3 class="${"text-black text-lg leading-tight mb-1"}">${escape(title)} at <a class="${"link"}"${add_attribute("href", url, 0)}>${escape(company)}</a></h3>
  <p class="${"font-light mb-2"}"><span class="${"whitespace-nowrap"}">${escape(dates)}</span>
    <span class="${"px-0.5 text-gray-500"}">•</span>
    <span class="${"whitespace-nowrap"}">${escape(location)}</span></p>
  ${!hidden ? `<ul class="${"list-disc pl-7 marker:text-neutral-400"}">${slots.default ? slots.default({}) : ``}</ul>` : ``}</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'ul.svelte-jhqa1u.svelte-jhqa1u{list-style-type:disc;padding-left:1.75rem\n}ul.svelte-jhqa1u .svelte-jhqa1u::marker{color:rgb(163 163 163 )\n}ul.svelte-jhqa1u.svelte-jhqa1u::marker{color:rgb(163 163 163 )\n}.byline.svelte-jhqa1u.svelte-jhqa1u{font-family:Newsreader, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;font-style:italic\n}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Owen Oertell – Resume",
      description: "Researcher, software engineer."
    },
    {},
    {}
  )}

<section class="${"layout-md py-12"}"><h2 class="${"heading2"}">Education</h2>

  <div class="${"mb-4"}"><div class="${"flex justify-between items-end"}"><h3 class="${"text-black text-lg"}">Cornell University</h3>
      <div class="${"text-neutral-500 mb-0.5"}">2022 — Current</div></div>
    <p class="${"byline svelte-jhqa1u"}">B.S. in Computer Science; Minor in Mathematics</p></div>

  <h4 class="${"font-medium mt-4 mb-1"}">Teaching:</h4>
  <ul class="${"svelte-jhqa1u"}"><li class="${"svelte-jhqa1u"}">TA for CS 4789 (Introduction to Reinforcement Learning). Sp24</li>
    <li class="${"svelte-jhqa1u"}">TA for CS 4820 (Introduction to Analysis of Algorithms). Fa23, Sp23</li></ul></section>

<section class="${"layout-md py-5"}"><h2 class="${"heading2"}">Professional Experience</h2>

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Research Intern",
      company: "NVIDIA",
      url: "https://nvidia.com",
      dates: "August 2024 – December 2024",
      location: "Santa Clara, CA"
    },
    {},
    {
      default: () => {
        return `<li>ML + Compilers
    </li>`;
      }
    }
  )}

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Software Engineering Intern",
      company: "DRW Holdings",
      url: "https://drw.com",
      dates: "June 2024 – August 2024",
      location: "Chicago, IL"
    },
    {},
    {
      default: () => {
        return `<li>Commodities desk
    </li>`;
      }
    }
  )}


  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Researcher",
      company: "Sun Lab, Cornell University",
      url: "https://wensun.github.io",
      dates: "September 2022 – Current",
      location: "Ithaca, NY"
    },
    {},
    {
      default: () => {
        return `<li>Reinforcement learning</li>`;
      }
    }
  )}
</section>`;
});
export {
  Page as default
};
