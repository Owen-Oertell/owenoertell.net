<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import WritingList from "./WritingList.svelte";
  import writing from "./writing.yaml";
</script>

<Seo
  title="Owen Oertell – Publications"
  description="publications"
/>

<section class="layout-md">
  To view the most up-to-date list of my publications, please visit my <a href="https://scholar.google.com/citations?user=y0B6gawAAAAJ&hl=en" class="link">Google Scholar</a> page.
</section>

<section class="layout-md py-12">
  <h2 class="heading2">2024</h2>
  <WritingList data={writing.papers2024} />
  
  <h2 class="heading2 mt-10">2023</h2>
  <WritingList data={writing.papers2023} />
</section>

