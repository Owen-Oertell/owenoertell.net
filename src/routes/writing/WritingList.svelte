<script lang="ts">
  import { formatTime } from "$lib/utils";
  import { ArrowUpRight, Diff } from "lucide-svelte";
  type Writing = {
    title: string;
    date: Date;
    slug: string;
    tags: string;
  };

  export let data: Writing[];
</script>

<div class="grid gap-y-4">
  {#each data as item}
    <a
      href={"/writing/" + item.slug}
      class="block -mx-3 px-3  hover:bg-neutral-100 transition-colors"
      rel="noreferrer"
    >
      <div class="flex flex-col sm:flex-row sm:items-end mb-1.5">
        <div class="text-black">
          {item.title}
          <ArrowUpRight size={18} class="inline text-neutral-400" />
        </div>
      </div>
      <div>
        <span class="text-neutral-500">tags: {item.tags}</span>
      </div>
      <div class="sm:ml-auto mb-0.5 text-neutral-500">
        <div class="italic">
          {formatTime("%B %-d, %Y", item.date)}
        </div>
      </div>
      
    </a>
  {/each}
</div>
