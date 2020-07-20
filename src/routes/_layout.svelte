<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  import Nav from "../components/Nav.svelte";

  export let results;

  const results$ = writable(results);
  $: $results$ = results;

  setContext("results", results$);

  function handleSearch(event) {
    console.log(encodeURI(event.detail.query));
    results = event.detail.query;
  }
</script>

<Nav on:search={handleSearch} />

<main>
  <slot />
</main>
