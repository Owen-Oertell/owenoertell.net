<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";
</script>

<Seo
  title="Owen Oertell"
  description="I am a computer science, math, and quantitative finance enthusiast."
/>

<p
  class="layout-md text-black text-xl leading-tight font-light mb-16"
  id="owen-is"
>
  <span class="g">is a</span> computer science<span class="g">,</span><br />
  math<span class="g">, and</span><br />
  quanitative finance <span class="g">enthusiast.</span>
</p>

<div class="layout-md text-lg space-y-14">
  <div class="space-y-5">
    <p>
      I study at Cornell University and reason about artificial intelligence at <a
        class="link"
        href="https://cuai.github.io/">CUAI</a
      >.
    </p>
  </div>

  <div class="space-y-5">
    <p>
      I also work for <a
        class="link"
        href="https://dickson.chemistry.gatech.edu/">Dickson Lab</a
      > at Georgia Tech, where I focus on developing a low budget blood assay technique.
      I currently TA for CS 4820: Introduction to Analysis of Algorithms
    </p>

    <p />

    <p>
      In addition, I am interested in math, physics, art, musical theatre, and
      biking.
    </p>
  </div>
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  em {
    @apply font-serif text-[110%] leading-[100%];
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors;
  }

  aside {
    @apply mt-0.5 text-base text-neutral-500;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #owen-is {
      @apply -mt-10;
    }
  }
</style>
