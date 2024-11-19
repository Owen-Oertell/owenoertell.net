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
    <p class="byline">B.S. in Computer Science; Minor in Mathematics</p>
  </div>

  <h4 class="font-medium mt-4 mb-1">Teaching:</h4>
  <ul>
    <li>TA for CS 4789 (Introduction to Reinforcement Learning). Sp24</li>
    <li>TA for CS 4820 (Introduction to Analysis of Algorithms). Fa23, Sp23</li>
  </ul>

</section>

<section class="layout-md py-5">
  <h2 class="heading2">Professional Experience</h2>

  <Workplace
    title="Research Intern"
    company="NVIDIA"
    url="https://nvidia.com"
    dates="August 2024 – December 2024"
    location="Santa Clara, CA"
  >
    <li>
      ML + Compilers
    </li>
  </Workplace>

  <Workplace 
    title="Software Engineering Intern"
    company="DRW Holdings"
    url="https://drw.com"
    dates="June 2024 – August 2024"
    location="Chicago, IL"
  >
    <li>
      Commodities desk
    </li>
  </Workplace>


  <Workplace
    title="Researcher"
    company="Sun Lab, Cornell University"
    url="https://wensun.github.io"
    dates="September 2022 – Current"
    location="Ithaca, NY"
  >
    <li>Reinforcement learning</li>
  </Workplace>
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
