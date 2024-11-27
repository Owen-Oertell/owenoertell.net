import { c as create_ssr_component, d as each, f as add_attribute, e as escape, v as validate_component } from "../../../chunks/index2.js";
import { S as Seo } from "../../../chunks/Seo.js";
import { A as Arrow_up_right } from "../../../chunks/arrow-up-right.js";
const PubList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data: data2 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  return `<div class="${"grid gap-y-4"}">${each(data2, (item) => {
    return `<a${add_attribute("href", item.link, 0)} class="${"block -mx-3 px-3 hover:bg-neutral-100 transition-colors"}" target="${"_blank"}" rel="${"noreferrer"}"><div class="${"flex flex-col sm:flex-row sm:items-end mb-1.5"}"><div class="${"text-black"}">${escape(item.title)}
          ${validate_component(Arrow_up_right, "ArrowUpRight").$$render(
      $$result,
      {
        size: 18,
        class: "inline text-neutral-400"
      },
      {},
      {}
    )}</div>
        </div>
      <div><span class="${"leading-snug italic"}">${escape(item.authors)}
      </span></div>
      <div><span class="${"text-neutral-500"}">${escape(item.venue)}</span></div>
    </a>`;
  })}</div>`;
});
var data = {
  papers2024: [
    {
      title: "TurboHopp: Accelerated Molecule Scaffold Hopping with Consistency Models",
      date: new Date(17300736e5),
      link: "https://arxiv.org/pdf/2410.20660",
      authors: "Kiwoong Yoo, Owen Oertell, Junhyun Lee, Sanghoon Lee, Jaewoo Kang.\n",
      venue: "NeurIPS 2024"
    },
    {
      title: "REBEL: Reinforcement Learning via Regressing Relative Rewards",
      date: new Date(17140032e5),
      link: "https://arxiv.org/pdf/2404.16767",
      authors: "Zhaolin Gao, Jonathan D. Chang, Wenhao Zhan, Owen Oertell, Gokul Swamy, Kianté Brantley, Thorsten Joachims, J. Andrew Bagnell, Jason D. Lee, Wen Sun.\n",
      venue: "NeurIPS 2024"
    },
    {
      title: "RL for Consistency Models: Reward Guided Text-to-Image Generation with Fast Inference",
      date: new Date(1709856e6),
      link: "https://arxiv.org/pdf/2404.03673",
      authors: "Owen Oertell, Jonathan Daniel Chang, Yiyi Zhang, Kianté Brantley, and Wen Sun.\n",
      venue: "RLC 2024"
    },
    {
      title: "More Benefits of Being Distributional: Second-Order Bounds for Reinforcement Learning",
      date: new Date(17067456e5),
      authors: "Kaiwen Wang, Owen Oertell, Alekh Agarwal, Nathan Kallus, and Wen Sun.\n",
      venue: "ICML 2024",
      link: "https://arxiv.org/pdf/2402.07198"
    },
    {
      title: "Dataset Reset Policy Optimization for RLHF",
      date: new Date(17067456e5),
      link: "https://arxiv.org/pdf/2404.08495",
      authors: "Jonathan Daniel Chang, Wenhao Zhan, Owen Oertell, Kianté Brantley, Dipendra Misra, Jason D. Lee, and Wen Sun\n",
      venue: "Preprint"
    }
  ],
  papers2023: [
    {
      title: "A Kernel Method Approach to Orbital Debris Blast Point Determination",
      date: new Date(17022528e5),
      link: "https://arc.aiaa.org/doi/10.2514/6.2024-1864",
      authors: "Jackson Kulik, Owen Oertell, and Dmitry Savransky.\n",
      venue: "AIAA 2024."
    },
    {
      title: "Overdetermined Eigenvector Approach to Passive Angles-Only Relative Orbit Determination",
      date: new Date(16847136e5),
      link: "https://arc.aiaa.org/doi/10.2514/1.G007744",
      authors: "Jackson Kulik, Owen Oertell, and Dmitry Savransky.\n",
      venue: "Journal of Guidance, Control, and Dynamics 2023."
    }
  ]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Owen Oertell – Publications",
      description: "publications"
    },
    {},
    {}
  )}

<section class="${"layout-md"}">To view the most up-to-date list of my publications, please visit my <a href="${"https://scholar.google.com/citations?user=y0B6gawAAAAJ&hl=en"}" class="${"link"}">Google Scholar</a> page.
</section>

<section class="${"layout-md py-12"}"><h2 class="${"heading2"}">2024</h2>
  ${validate_component(PubList, "PubList").$$render($$result, { data: data.papers2024 }, {}, {})}
  
  <h2 class="${"heading2 mt-10"}">2023</h2>
  ${validate_component(PubList, "PubList").$$render($$result, { data: data.papers2023 }, {}, {})}</section>`;
});
export {
  Page as default
};
