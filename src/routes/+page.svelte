<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";
</script>

<Seo
  title="Owen Oertell"
  description="I am a computer science, math, and machine learning enthusiast."
/>
<!--
<p
  class="layout-md text-black text-xl leading-tight font-light mb-16"
  id="owen-is"
>
  <span class="g">is a</span> computer science<span class="g">,</span><br />
  math<span class="g">, and</span><br />
  quanitative finance <span class="g">enthusiast.</span>
</p>
-->
<div class="layout-md text-lg space-y-14 my-10">
  <div class="space-y-5">
    <p>
      I study at Cornell University and research artificial intelligence at <a
        class="link"
        href="https://www.nvidia.com/">NVIDIA</a
      >.
    </p>
    <p>
      My research interests include machine learning, theory of computation,
      complexity theory, and optimization.
    </p>
    <p>
      I am fortunate to work with professor <a
        class="link"
        href="https://wensun.github.io">Wen Sun</a
      > and professor <a
      class="link"
      href="https://www.cs.cornell.edu/~rdk/">Robert Kleinberg</a
    >, where I focus on developing and implementing algorithms for reinforcement learning.
    </p>
    <p>
      Last summer, I interned at <a class="link" href="https://www.drw.com/">DRW</a>.
    </p>
    <p>
      Other interests: math, art, music, <a
        class="link"
        href="https://www.goodreads.com/user/show/117571286-owen">literature</a
      >, and
      <a class="link" href="https://en.wikipedia.org/wiki/Go_(game)">go</a>.
    </p>
  </div>
</div>

<!--<style lang="postcss">
  //.g {
  //  @apply text-neutral-400;
  //}

  /* Correction for vertical navigation links on mobile. */
  //@media (max-width: 420px) {
  //  #owen-is {
  //    @apply -mt-10;
  //  }
  //}
</style>-->
