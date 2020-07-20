<script>
  import { fade, fly } from "svelte/transition";
  import FullscreenSearch from "@/components/FullscreenSearch.svelte";
  import Tabs from "@/components/Tabs.svelte";
  import { results } from "@/stores";

  let tabItems = [
    { label: "Pexels", value: 1 },
    { label: "Unsplash", value: 2 },
    { label: "Pixabay", value: 3 }
  ];

  let currentTab;

  let resultsL = null;
  results.subscribe(value => {
    console.log({ results: value });
    resultsL = value;
  });
</script>

<style>

</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

{#if resultsL.length > 0}
  <Tabs bind:activeTabValue={currentTab} items={tabItems} />
  {#if 1 === currentTab}
    <div class="flex flex-wrap px-6 -mx-1 lg:-mx-4">

      <!-- Column -->
      {#each resultsL as image, i}
        <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

          <!-- Article -->
          <article class="overflow-hidden rounded-lg shadow-lg">

            <img
              class="block w-full h-auto"
              src={image.src.small}
              alt={`Pixabay-result-${i}`} />

            <footer
              class="flex items-center justify-between p-2 leading-none md:p-4">
              <img
                alt="Placeholder"
                class="block rounded-full"
                src="https://picsum.photos/32/32/?random" />
              <p class="ml-2 text-sm">{image.photographer}</p>
            </footer>

          </article>
        </div>
      {/each}
    </div>
  {/if}

  {#if 2 === currentTab}
    <h3>Tab 2 content</h3>
  {/if}

  {#if 3 === currentTab}
    <h3>Tab 3 content</h3>
  {/if}
  <pre transition:fade>{JSON.stringify(resultsL)}</pre>
{:else}
  <FullscreenSearch />
{/if}
