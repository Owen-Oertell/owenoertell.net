<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import WritingList from "./WritingList.svelte";
  import writing from "./writing.yaml";
</script>

<Seo
  title="Owen Oertell – Writings"
  description="writings"
/>

<section class="layout-md">
  Some of my writings about machine learning and research.
</section>

<section class="layout-md py-12">
  <WritingList data={writing} />
</section>

