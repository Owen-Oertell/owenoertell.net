import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import { S as Seo } from "../../chunks/Seo.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Owen Oertell",
      description: "machine learning."
    },
    {},
    {}
  )}
<div class="${"layout-md text-lg space-y-14 my-10"}"><div class="${"space-y-5"}"><p>I study at Cornell University and research artificial intelligence at <a class="${"link"}" href="${"https://www.nvidia.com/"}">NVIDIA</a>.
    </p>
    <p>My research interests include reinforcement learning, generative models (mainly diffusion and LLMs), and bandits.
    </p>
    <p>I am fortunate to work with professor <a class="${"link"}" href="${"https://wensun.github.io"}">Wen Sun</a> and professor <a class="${"link"}" href="${"https://www.cs.cornell.edu/~rdk/"}">Robert Kleinberg</a>.
    </p>
    <p>Last summer, I interned at <a class="${"link"}" href="${"https://www.drw.com/"}">DRW</a>.
    </p>
    <p>Other interests: math, art, music, and <a class="${"link"}" href="${"https://www.goodreads.com/user/show/117571286-owen"}">literature</a></p></div>
  <div>News: I am excited to share that both <a class="${"link"}" href="${"https://arxiv.org/pdf/2410.20660"}">TurboHopp</a> and <a class="${"link"}" href="${"https://arxiv.org/pdf/2404.16767"}">REBEL</a> have been accepted to NeurIPS 2024! 🎉
  </div></div>

`;
});
export {
  Page as default
};
