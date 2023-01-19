import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { S as Seo } from "../../chunks/Seo.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".g.svelte-oalmvi{--tw-text-opacity:1;color:rgb(163 163 163 / var(--tw-text-opacity))\n}@media(max-width: 420px){#owen-is.svelte-oalmvi{margin-top:-2.5rem\n    }}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Owen Oertell",
      description: "I am a computer science, math, and quantitative finance enthusiast."
    },
    {},
    {}
  )}

<p class="${"layout-md text-black text-xl leading-tight font-light mb-16 svelte-oalmvi"}" id="${"owen-is"}"><span class="${"g svelte-oalmvi"}">is a</span> computer science<span class="${"g svelte-oalmvi"}">,</span><br>
  math<span class="${"g svelte-oalmvi"}">, and</span><br>
  quanitative finance <span class="${"g svelte-oalmvi"}">enthusiast.</span></p>

<div class="${"layout-md text-lg space-y-14"}"><div class="${"space-y-5"}"><p>I study at Cornell University and reason about artificial intelligence at <a class="${"link"}" href="${"https://cuai.github.io/"}">CUAI</a>.
    </p>
    <p>My research interests include machine learning, theory of computation,
      complexity theory, and optimization.
    </p></div>

  <div class="${"space-y-5"}"><p>I also work for <a class="${"link"}" href="${"https://dickson.chemistry.gatech.edu/"}">Dickson Lab</a> at Georgia Tech, where I focus on developing a low budget blood assay technique.
      I currently TA for Introduction to Analysis of Algorithms (CS 4820).
    </p>

    <p></p>

    <p>Other interests: math, art, music, <a class="${"link"}" href="${"https://www.goodreads.com/user/show/117571286-owen"}">literature</a>, and
      <a class="${"link"}" href="${"https://en.wikipedia.org/wiki/Go_(game)"}">go</a>.
    </p></div>
</div>`;
});
export {
  Page as default
};
