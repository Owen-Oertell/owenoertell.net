<script lang="ts">
  import { ArrowUpRight, Diff } from "lucide-svelte";
  type Pub = {
    title: string;
    date: Date;
    authors: string;
    link: string;
    venue: string;
  };

  export let data: Pub[];
</script>

<div class="grid gap-y-4">
  {#each data as item}
    <a
      href={item.link}
      class="block -mx-3 px-3  hover:bg-neutral-100 transition-colors"
      target="_blank"
      rel="noreferrer"
    >
      <div class="flex flex-col sm:flex-row sm:items-end mb-1.5">
        <div class="text-black">
          {item.title}
          <ArrowUpRight size={18} class="inline text-neutral-400" />
        </div>
        <!-- <div class="sm:ml-auto mb-0.5 text-neutral-500">
          <div class="text-sm">
            {formatTime("%B %-d, %Y", item.date)}
          </div>
        </div> -->
      </div>
      <div><span class="leading-snug italic">
        {item.authors}
      </span></div>
      <div>
        <span class="text-neutral-500">{item.venue}</span>
      </div>
    </a>
  {/each}
</div>
