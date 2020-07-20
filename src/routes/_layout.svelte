<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { query, results } from "@/stores";
  import axios from "axios";

  import Nav from "../components/Nav.svelte";

  query.subscribe(value => {
    console.log({ indexQuery: value });
    handleSearch(value);
  });

  async function handleSearch(query) {
    if (query) {
      const pexels = await axios
        .get(`/pexels.json?query=${encodeURI(query)}`)
        .then(res => {
          results.set(res.data.photos);
        });
    }
  }
</script>

<Nav />

<main>
  <slot />
</main>
