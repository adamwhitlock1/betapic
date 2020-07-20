<script>
  let query = "";
  import { getContext } from "svelte";
  const results$ = getContext("results");
  $: results = $results$;
  $: console.log(results);
</script>

<style>

</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1 class="text-2xl font-light m-2">Home</h1>

{#if results}
  <pre>{JSON.stringify(results)}</pre>
{/if}
