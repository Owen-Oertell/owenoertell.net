<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
  import Project from "./Project.svelte";

  // anonymous function redirect to resume pdf when user prints
  // window.onbeforeprint = () => {
  //  window.location.href = "https://resume.owenoertell.com/resume.pdf";
  //};
</script>

<Seo
  title="Owen Oertell – Resume"
  description="Researcher, software engineer."
/>

<section class="layout-md py-12">
  <h2 class="heading2">Education</h2>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">Cornell University</h3>
      <div class="text-neutral-500 mb-0.5">2022 — Current</div>
    </div>
    <p class="byline">
      B.S. in Computer Science. Minor in Mathematics.
    </p>
  </div>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">Georgia Institute of Technology</h3>
      <div class="text-neutral-500 mb-0.5">2021 — 2022</div>
    </div>
    <p class="byline">Full Time High School Dual Enrollment</p>
  </div>

  <h4 class="font-medium mt-4 mb-1">Teaching:</h4>
  <ul>
    <li>
      TA for CS 4820 (Introduction to Analysis of Algorithms), Fall 2023
    </li>
    <li>
      TA for CS 4820 (Introduction to Analysis of Algorithms), Spring 2023
    </li>
  </ul>

  <h4 class="font-medium mt-4 mb-1">Graduate-level technical coursework:</h4>
  <ul>
    <li>Foundations of Reinforcement Learning (CS 6789)</li>
    <li>Advanced Programming Languages (CS 6110)</li>
    <li>Computational Foundations of Machine Learning (GT CX 4803)</li>
  </ul>

  <h4 class="font-medium mt-4 mb-1">Undergraduate technical coursework:</h4>
  <ul>
    <li>Compilers (CS 4120)</li>
    <li>Introduction to Analysis of Algorithms (CS 4820)</li>
    <li>Object Oriented Programming & Data Structures (CS 2110)</li>
    <li>Discrete Mathematics (GT MATH 2603)</li>
    <li>Differential Equations (GT MATH 2552)</li>
    <li>Multivariable Calculus (GT MATH 2551)</li>
    <li>Linear Algebra (GT MATH 1554)</li>
  </ul>
</section>

<section class="layout-md py-5">
  <h2 class="heading2">Professional Experience</h2>

  <Workplace
    title="Undergraduate Researcher"
    company="Sun Lab, Cornell University"
    url="https://wensun.github.io"
    dates="September 2022 – Current"
    location="Ithaca, NY"
  >
    <li>
      Researching reinforcement learning theory and algorithms.
    </li>
    <li>
      Developing and implementing algorithms for reinforcement learning for diffusion models.
    </li>
  </Workplace>


  <Workplace
    title="Undergraduate Researcher"
    company="Cornell University Artificial Intelligence"
    url="https://cuai.github.io/"
    dates="September 2022 – Current"
    location="Ithaca, NY"
  >
    <li>
      Participating in reading groups for Reinforcement Learning, Computer
      Vision, and MLSystems.
    </li>
    <li>
      Developing novel techniques for active learning for taxonomy expansion via coarsened Shannon entropy with Prof. Emaad Manzoor.
    </li>
  </Workplace>

  <Workplace
    title="Lab Researcher"
    company="Dickson Lab, Georgia Institute of Technology"
    url="https://dickson.chemistry.gatech.edu/"
    dates="May 2020 – August 2022"
    location="Atlanta, GA"
  >
    <li>
      Adapted C code from bacterial genome to the human genome for novel copy
      number variation detection algorithm.
    </li>
    <li>
      Reduced memory consumption by 300GB while maintaining speed via
      parallelization and low-level C programming.
    </li>
    <li>
      Assisted in development of efficient blood assay technique for bacterial
      infection identification.
    </li>
    <li>
      Increased data gathering speed by 4x by writing code to use multiple
      cameras in parallel with single camera port.
    </li>
    <li>
      Co-authored low budget blood assay technique paper; submission for
      publication in process.
    </li>
  </Workplace>

  <Workplace
    title="Head of Engineering"
    company="Y STEM and Chess Inc. 501(c)(3)"
    url="https://ystemandchess.com"
    dates="April 2020 – July 2022"
    location="Boise, ID"
  >
    <li>Managed 30 undergraduate and professional SWEs.</li>
    <li>
      Led development of website: <a
        class="link"
        href="https://ystemandchess.com">YStemAndChess.com</a
      > to provide free mentoring of underprivileged children from around the world
      and expand Y STEM and Chess to tutor more than 800 children.
    </li>
    <li>Interviewed and hired interns and full time developers.</li>
    <li>
      Engineered and implemented scalable microservice architecture designs to
      minimize cost.
    </li>
    <li>Developed real-time chess pairing and mentoring system.</li>
    <li>
      Implemented recording storage system allowing parents and students to
      review lessons.
    </li>
  </Workplace>
</section>

<section class="layout-md py-5">
  <h2 class="heading2">Projects</h2>
  <Project
    name="PrepByAI"
    url="https://prepbyai.com"
    dates="July 2021"
    location="Atlanta, GA"
  >
    <li>
      Led development of website: PrepByAI.com, a free ACT preparation site.
    </li>
    <li>
      Built machine learning model to identify needs and suggest questions to
      improve performance using term frequency–inverse document frequency and
      k-means clustering.
    </li>
    <li>Over 500 regular users and 9,000+ questions answered to date.</li>
  </Project>
</section>

<section class="layout-md py-5">
  <h2 class="heading2">Publications</h2>
  <div class="mb-4">
    <em>Overdetermined Eigenvector Approach to Passive Angles-Only Relative Orbit Determination</em>
    <div class="pl-2">
      Jackson Kulik, <strong>Owen Oertell</strong>, and Dmitry Savransky.  Journal of Guidance, Control, and Dynamics, 2023. Under Review.
    </div>
  </div>
</section>


<section class="layout-md py-5">
  <h2 class="heading2">Awards and Honors</h2>

  <div class="mb-4">
    <ul>
      <li>Chamblee High School Magnet Salutatorian.</li>
      <li>
        Technology Student Association National Competition (each category 500+
        submissions): <ul>
          <li>
            2<sup>nd</sup> in software development for DataManager project.
          </li>
          <li>
            Top 25 for data science for pulsar star detection deep neural
            network.
          </li>
        </ul>
      </li>
      <li>
        Georgia Science and Engineering Fair Award for <em
          >Novel Application of Document Distance for CNV Detection</em
        >.
      </li>
      <li>National Merit Scholarship Recipient.</li>
      <li>Presidential Scholar Semi-finalist.</li>
    </ul>
  </div>
</section>

<section class="layout-md py-5">
  <h2 class="heading2">Technical Skills</h2>

  <div class="mb-4">
    <ul>
      <li>
        <b>Languages:</b> C (OpenACC, OpenMP), Python C++, Java, SQL, C#, JavaScript,
        Ruby, HTML/CSS
      </li>
      <li>
        <b>Developer Tools:</b> Jupyter Notebooks, Git, Docker, Kubernetes, VS Code,
        Amazon AWS, VIM, Makefiles
      </li>
      <li>
        <b>Libraries:</b> TensorFlow, Valgrind, Numpy, Pandas, OpenCV, Pillow, Matplotlib
      </li>
      <li>
        <b>Frameworks:</b> React.js, Angular.js, Electron.js, Node.js, Express.js,
        Svelte, Tailwind.css, .NET core
      </li>
      <li><b>Databases:</b> PostgreSQL, MongoDB</li>
    </ul>
  </div>
</section>
<section class="layout-md">
  <p>
    You can also view my resume as a pdf <a
      class="link"
      href="https://resume.owenoertell.com">here</a
    >.
  </p>
</section>

<style lang="postcss">
  b {
    @apply font-bold;
  }

  ul {
    @apply list-disc pl-7 marker:text-neutral-400;
  }

  .byline {
    @apply font-serif italic;
  }

</style>
