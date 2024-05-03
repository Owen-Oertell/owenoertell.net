<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import WritingList from "./WritingList.svelte";
  import writing from "./writing.yaml";
</script>

<Seo
  title="Owen Oertell – Writing"
  description="Past writing: academic publications, presentations, notes, tutorials, and technical blog posts."
/>

<section class="layout-md py-12">
  <h2 class="heading2">2024</h2>
  <WritingList data={writing.papers2024} />
  
  <h2 class="heading2 mt-10">2023</h2>
  <WritingList data={writing.papers2023} />
</section>

<section class="layout-md py-12">
  <h2 class="heading2">Presentations</h2>
  <WritingList data={writing.presentations} />
</section>

