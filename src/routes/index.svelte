<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import FullscreenSearch from "@/components/FullscreenSearch.svelte";
  import LoadingSkeleton from "@/components/LoadingSkeleton.svelte";
  import PexelsColumn from "@/components/PexelsColumn.svelte";
  import Tabs from "@/components/Tabs.svelte";
  import { results, loadingStatus } from "@/stores";
  const imagesloaded = require("imagesloaded");

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
    if (resultsL.pexels) {
      setTimeout(() => {
        loadingStatusL = false;
      }, 500);
    }
  });

  let loadingStatusL = false;
  loadingStatus.subscribe(value => {
    console.log({ loadingStatus: value });
    loadingStatusL = value;
  });
</script>

<svelte:head>
  <title>betapic</title>
</svelte:head>

{#if loadingStatusL === false && resultsL.pexels}
  <div class="container mx-auto">
    <div class="flex mt-4">
      <PexelsColumn results={resultsL.pexels} />
    </div>
  </div>
{:else if loadingStatusL}
  <LoadingSkeleton />
{:else}
  <FullscreenSearch />
{/if}
