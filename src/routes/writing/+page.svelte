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
  <h2 class="heading2">Publications</h2>
  <WritingList data={writing.papers} />
</section>
<section class="layout-md py-12">
  <h2 class="heading2">Presentations</h2>
  <WritingList data={writing.presentations} />
</section>

