import { c as create_ssr_component, e as escape, f as add_attribute, v as validate_component } from "../../../chunks/index.js";
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
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { url } = $$props;
  let { dates } = $$props;
  let { location } = $$props;
  let { defaultHidden = false } = $$props;
  let hidden = defaultHidden;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.dates === void 0 && $$bindings.dates && dates !== void 0)
    $$bindings.dates(dates);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  if ($$props.defaultHidden === void 0 && $$bindings.defaultHidden && defaultHidden !== void 0)
    $$bindings.defaultHidden(defaultHidden);
  return `<div class="${["mb-8", hidden ? "cursor-pointer" : ""].join(" ").trim()}"><h3 class="${"text-black text-lg leading-tight mb-1"}"><a class="${"link"}"${add_attribute("href", url, 0)}>${escape(name)}</a></h3>
  <p class="${"font-light mb-2"}"><span class="${"whitespace-nowrap"}">${escape(dates)}</span>
    <span class="${"px-0.5 text-gray-500"}">•</span>
    <span class="${"whitespace-nowrap"}">${escape(location)}</span></p>
  ${!hidden ? `<ul class="${"list-disc pl-7 marker:text-neutral-400"}">${slots.default ? slots.default({}) : ``}</ul>` : ``}</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'b.svelte-jhqa1u.svelte-jhqa1u{font-weight:700\n}ul.svelte-jhqa1u.svelte-jhqa1u{list-style-type:disc;padding-left:1.75rem\n}ul.svelte-jhqa1u .svelte-jhqa1u::marker{color:rgb(163 163 163 )\n}ul.svelte-jhqa1u.svelte-jhqa1u::marker{color:rgb(163 163 163 )\n}.byline.svelte-jhqa1u.svelte-jhqa1u{font-family:Newsreader, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;font-style:italic\n}',
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
    <p class="${"byline svelte-jhqa1u"}">B.S. in Computer Science, Electrical Computer Engineering. Minor in
      Mathematics
    </p></div>

  <div class="${"mb-4"}"><div class="${"flex justify-between items-end"}"><h3 class="${"text-black text-lg"}">Georgia Institute of Technology</h3>
      <div class="${"text-neutral-500 mb-0.5"}">2021 — 2022</div></div>
    <p class="${"byline svelte-jhqa1u"}">Full Time High School Dual Enrollment</p></div>

  <h4 class="${"font-medium mt-4 mb-1"}">Teaching:</h4>
  <ul class="${"svelte-jhqa1u"}"><li class="${"svelte-jhqa1u"}">TA for CS 4820 (Introduction to Analysis of Algorithms), Spring 2023
    </li></ul>

  <h4 class="${"font-medium mt-4 mb-1"}">Graduate-level technical coursework:</h4>
  <ul class="${"svelte-jhqa1u"}"><li class="${"svelte-jhqa1u"}">Foundations of Reinforcement Learning (CS 6789)</li>
    <li class="${"svelte-jhqa1u"}">Advanced Programming Languages (CS 6110)</li>
    <li class="${"svelte-jhqa1u"}">Computational Foundations of Machine Learning (GT CX 4803)</li></ul>

  <h4 class="${"font-medium mt-4 mb-1"}">Undergraduate technical coursework:</h4>
  <ul class="${"svelte-jhqa1u"}"><li class="${"svelte-jhqa1u"}">Compilers (CS 4120)</li>
    <li class="${"svelte-jhqa1u"}">Introduction to Analysis of Algorithms (CS 4820)</li>
    <li class="${"svelte-jhqa1u"}">Object Oriented Programming &amp; Data Structures (CS 2110)</li>
    <li class="${"svelte-jhqa1u"}">Discrete Mathematics (GT MATH 2603)</li>
    <li class="${"svelte-jhqa1u"}">Differential Equations (GT MATH 2552)</li>
    <li class="${"svelte-jhqa1u"}">Multivariable Calculus (GT MATH 2551)</li>
    <li class="${"svelte-jhqa1u"}">Linear Algebra (GT MATH 1554)</li></ul></section>

<section class="${"layout-md py-12"}"><h2 class="${"heading2"}">Professional Experience</h2>

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Undergraduate Researcher",
      company: "Cornell University Artificial Intelligence",
      url: "https://cuai.github.io/",
      dates: "September 2022 – Current",
      location: "Ithaca, NY"
    },
    {},
    {
      default: () => {
        return `<li>Participating in reading groups for Reinforcement Learning, Computer
      Vision, and MLSystems.
    </li>
    <li>Researching methods for reinforcement learning based program synthesis. In
      direct collaboration with Meta AI.
    </li>`;
      }
    }
  )}

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Lab Researcher",
      company: "Dickson Lab, Georgia Institute of Technology",
      url: "https://dickson.chemistry.gatech.edu/",
      dates: "May 2020 – Current",
      location: "Atlanta, GA"
    },
    {},
    {
      default: () => {
        return `<li>Adapted C code from bacterial genome to the human genome for novel copy
      number variation detection algorithm.
    </li>
    <li>Reduced memory consumption by 300GB while maintaining speed via
      parallelization and low-level C programming.
    </li>
    <li>Assisted in development of efficient blood assay technique for bacterial
      infection identification.
    </li>
    <li>Increased data gathering speed by 4x by writing code to use multiple
      cameras in parallel with single camera port.
    </li>
    <li>Co-authored low budget blood assay technique paper; submission for
      publication in process.
    </li>`;
      }
    }
  )}

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Head of Engineering",
      company: "Y STEM and Chess Inc. 501(c)(3)",
      url: "https://ystemandchess.com",
      dates: "April 2020 – July 2022",
      location: "Boise, ID"
    },
    {},
    {
      default: () => {
        return `<li>Managed 30 undergraduate and professional SWEs.</li>
    <li>Led development of website: <a class="${"link"}" href="${"https://ystemandchess.com"}">YStemAndChess.com</a> to provide free mentoring of underprivileged children from around the world
      and expand Y STEM and Chess to tutor more than 800 children.
    </li>
    <li>Interviewed and hired interns and full time developers.</li>
    <li>Engineered and implemented scalable microservice architecture designs to
      minimize cost.
    </li>
    <li>Developed real-time chess pairing and mentoring system.</li>
    <li>Implemented recording storage system allowing parents and students to
      review lessons.
    </li>`;
      }
    }
  )}</section>

<section class="${"layout-md py-12"}"><h2 class="${"heading2"}">Projects</h2>
  ${validate_component(Project, "Project").$$render(
    $$result,
    {
      name: "PrepByAI",
      url: "https://prepbyai.com",
      dates: "July 2021",
      location: "Atlanta, GA"
    },
    {},
    {
      default: () => {
        return `<li>Led development of website: PrepByAI.com, a free ACT preparation site.
    </li>
    <li>Built machine learning model to identify needs and suggest questions to
      improve performance using term frequency–inverse document frequency and
      k-means clustering.
    </li>
    <li>Over 500 regular users and 9,000+ questions answered to date.</li>`;
      }
    }
  )}</section>

<section class="${"layout-md py-12"}"><h2 class="${"heading2"}">Awards and Honors</h2>

  <div class="${"mb-4"}"><ul class="${"svelte-jhqa1u"}"><li class="${"svelte-jhqa1u"}">Chamblee High School Magnet Salutatorian.</li>
      <li class="${"svelte-jhqa1u"}">Technology Student Association National Competition (each category 500+
        submissions): <ul class="${"svelte-jhqa1u"}"><li class="${"svelte-jhqa1u"}">2<sup class="${"svelte-jhqa1u"}">nd</sup> in software development for DataManager project.
          </li>
          <li class="${"svelte-jhqa1u"}">Top 25 for data science for pulsar star detection deep neural
            network.
          </li></ul></li>
      <li class="${"svelte-jhqa1u"}">Georgia Science and Engineering Fair Award for <em class="${"svelte-jhqa1u"}">Novel Application of Document Distance for CNV Detection</em>.
      </li>
      <li class="${"svelte-jhqa1u"}">National Merit Scholarship Recipient.</li>
      <li class="${"svelte-jhqa1u"}">Presidential Scholar Semi-finalist.</li></ul></div></section>

<section class="${"layout-md py-12"}"><h2 class="${"heading2"}">Technical Skills</h2>

  <div class="${"mb-4"}"><ul class="${"svelte-jhqa1u"}"><li class="${"svelte-jhqa1u"}"><b class="${"svelte-jhqa1u"}">Languages:</b> C (OpenACC, OpenMP), Python C++, Java, SQL, C#, JavaScript,
        Ruby, HTML/CSS
      </li>
      <li class="${"svelte-jhqa1u"}"><b class="${"svelte-jhqa1u"}">Developer Tools:</b> Jupyter Notebooks, Git, Docker, Kubernetes, VS Code,
        Amazon AWS, VIM, Makefiles
      </li>
      <li class="${"svelte-jhqa1u"}"><b class="${"svelte-jhqa1u"}">Libraries:</b> TensorFlow, Valgrind, Numpy, Pandas, OpenCV, Pillow, Matplotlib
      </li>
      <li class="${"svelte-jhqa1u"}"><b class="${"svelte-jhqa1u"}">Frameworks:</b> React.js, Angular.js, Electron.js, Node.js, Express.js,
        Svelte, Tailwind.css, .NET core
      </li>
      <li class="${"svelte-jhqa1u"}"><b class="${"svelte-jhqa1u"}">Databases:</b> PostgreSQL, MongoDB</li></ul></div></section>
<section class="${"layout-md"}"><p>You can also view my resume as a pdf <a class="${"link"}" href="${"https://resume.owenoertell.com"}">here</a>.
  </p>
</section>`;
});
export {
  Page as default
};
