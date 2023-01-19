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
    <p>
      My research interests include machine learning, theory of computation,
      complexity theory, and optimization.
    </p>
  </div>

  <div class="space-y-5">
    <p>
      I also work for <a
        class="link"
        href="https://dickson.chemistry.gatech.edu/">Dickson Lab</a
      > at Georgia Tech, where I focus on developing a low budget blood assay technique.
      I currently TA for Introduction to Analysis of Algorithms (CS 4820).
    </p>

    <p />

    <p>
      Other interests: math, art, <a
        class="link"
        href="https://www.goodreads.com/user/show/117571286-owen">literature</a
      >, and
      <a class="link" href="https://en.wikipedia.org/wiki/Go_(game)">go</a>.
    </p>
  </div>
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #owen-is {
      @apply -mt-10;
    }
  }
</style>
