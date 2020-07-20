<script>
  import { query } from "@/stores";
  let queryL = "fish";

  query.subscribe(value => {
    queryL = value;
  });

  function handleSearch() {
    query.set(queryL);
  }

  function handleKeypress(e) {
    if (e.code === "Enter") handleSearch();
  }
</script>

<style>
  .fullscreen-search {
    background-image: url("bg2.jpg");
    background-color: #434190;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: top center;
    background-size: cover;
  }
</style>

<div class="flex justify-center w-full min-h-screen mx-auto fullscreen-search">
  <div class="w-full max-w-lg px-4 mx-auto mt-24">
    <img src="beta_white.png" alt="betapic logo in white" class="mx-auto" />
    <div class="flex justify-center w-full py-1 -mb-8">
      <h2
        class="px-6 py-4 text-lg font-light tracking-wide text-white rounded
        bg-gradient-pink-purple">
        Discover tons of free photos
      </h2>
    </div>
    <div class="py-12 rounded-lg shadow-xl fullscreen-search-card ">

      <div class="flex justify-center w-full px-6 py-8">

        <div class="flex items-center w-full py-1 border-b-2 border-gray-100">
          <input
            class="w-full px-3 py-1 mr-3 leading-tight text-gray-100
            bg-transparent border-none appearance-none focus:outline-none"
            type="text"
            aria-label="search"
            bind:value={queryL}
            on:keypress={handleKeypress} />
          <button
            class="flex-shrink-0 p-2 text-sm font-light tracking-wide text-white
            transition-all duration-300 transform translate-y-0 bg-pink-600
            border-2 border-pink-600 rounded-full hover:bg-purple-900
            hover:border-purple-900 hover:-translate-y-1"
            type="button"
            on:click={handleSearch}>
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817
                4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd" />
            </svg>
          </button>

        </div>
      </div>

    </div>

  </div>

</div>
