<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import FullscreenSearch from "@/components/FullscreenSearch.svelte";
  import LoadingSkeleton from "@/components/LoadingSkeleton.svelte";
  import PexelsColumn from "@/components/PexelsColumn.svelte";
  import PixabayColumn from "@/components/PixabayColumn.svelte";
  import UnsplashColumn from "@/components/UnsplashColumn.svelte";
  import { results, loadingStatus } from "@/stores";

  let resultsL = null;
  results.subscribe(value => {
    resultsL = value;
    if (resultsL.pexels) {
      setTimeout(() => {
        loadingStatusL = false;
      }, 500);
    }
  });

  let loadingStatusL = false;
  loadingStatus.subscribe(value => {
    loadingStatusL = value;
  });
</script>

<svelte:head>
  <title>betapic</title>
</svelte:head>

{#if loadingStatusL === false && resultsL.pexels}
  <div class="container mx-auto">
    <div class="block mt-4 md:flex">
      <PexelsColumn results={resultsL.pexels} />
      <PixabayColumn results={resultsL.pixabay} />
      <UnsplashColumn results={resultsL.unsplash} />
    </div>
  </div>
{:else if loadingStatusL}
  <LoadingSkeleton />
{:else}
  <FullscreenSearch />
{/if}
