<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { query, results, loadingStatus } from "@/stores";
  import axios from "axios";

  import Nav from "../components/Nav.svelte";

  query.subscribe(value => {
    console.log({ indexQuery: value });
    handleSearch(value);
  });

  async function handleSearch(query) {
    if (query) {
      loadingStatus.set(true);
      const pexels = await axios
        .get(`/pexels.json?query=${encodeURI(query)}`)
        .then(res => res.data.photos);

      const pixabay = await axios
        .get(`/pixabay.json?query=${encodeURI(query)}`)
        .then(res => res.data.hits);

      results.set({
        pexels,
        pixabay
      });

      setTimeout(() => {
        loadingStatus.set(false);
      }, 750);
    }
  }
</script>

<Nav />

<main>
  <slot />
</main>
