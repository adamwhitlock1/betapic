<script>
  import { createEventDispatcher } from "svelte";
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

<div
  class="px-4 py-3 shadow-xl md:flex md:items-center md:justify-between
  bg-gradient-purple-pink">
  <div class="w-2/3 min-w-0">
    <div
      class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9
      sm:truncate">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 570.17 117.48"
        class="w-40">

        <defs>
          <style>
            .cls-1,
            .cls-2 {
              fill: #fff;
            }
            .cls-2 {
              stroke: #fff;
              stroke-miterlimit: 10;
              stroke-width: 1.27px;
            }
          </style>
        </defs>
        <title>beta_pic_text</title>
        <path
          class="cls-1"
          d="M71.81,74.11q0,18.08-7.81,28.64T42.45,113.31a32.77,32.77,0,0,1-16.16-3.8A27.92,27.92,0,0,1,15.62,99.28l.14,13.91H11.86V1.75L15.76,0V47.79a30,30,0,0,1,10.56-11.5,29.36,29.36,0,0,1,16-4.2q13.81,0,21.66,11T71.81,72.6ZM67.76,72.6q0-16.27-6.51-26.43T42.38,36Q31,36,24.7,41.82a32.54,32.54,0,0,0-8.93,14.28V92a25.49,25.49,0,0,0,9.58,12.69q6.76,4.74,17.18,4.74,12.37,0,18.8-9.55t6.44-25.75Z" />
        <path
          class="cls-1"
          d="M117.46,113.31q-13.38,0-23.11-10.81T84.62,75.63V71q0-16.85,9.4-27.88t23.22-11q13.23,0,21.59,8.68t8.35,23.29v6H88.53v5.57q0,14.18,8.32,24t20.61,9.8A39.19,39.19,0,0,0,132.1,107a28.46,28.46,0,0,0,10.53-7.33l1.41,3.52a28.17,28.17,0,0,1-11,7.47A42,42,0,0,1,117.46,113.31ZM117.24,36a25.12,25.12,0,0,0-19.38,8.5Q90.12,53,89.11,65.72l.22.43h54V63.77q0-11.93-7.23-19.85T117.24,36Z" />
        <path
          class="cls-1"
          d="M176.7,0V33.54h16.11l-1.64,4H176.7v54.1q0,9.62,3.25,13.7a10.46,10.46,0,0,0,8.61,4.09q2.31,0,4.12-.14t5-.51l.72,3.54a27.23,27.23,0,0,1-4.45.8q-2.28.22-5.17.22-7.88,0-12-5.14t-4.09-16.56V37.52H157.43l-1.54-4h16.82V1.75Z" />
        <path
          class="cls-1"
          d="M266.74,111.8q-.94-5.14-1.27-7.7a44,44,0,0,1-.33-5.53V97.4a34,34,0,0,1-12.55,11.46,38.71,38.71,0,0,1-19,4.45q-10.85,0-17.11-5.89T210.26,92q0-10.56,9.62-17.21t25.82-6.65h19.46V56.68q0-9.76-6.26-15.22T241.29,36a44.92,44.92,0,0,0-13.92,2.1,34,34,0,0,0-11,5.79l-.07,9.62-3.91,2.1.07-14.11a49.13,49.13,0,0,1,13.13-6.76,47.38,47.38,0,0,1,15.73-2.64q12.58,0,20.18,6.36t7.59,18.37V96q0,3,.25,6a52.35,52.35,0,0,0,.83,5.86h9.4v3.91Zm-33.12-2.31a36.18,36.18,0,0,0,19.24-5,31.38,31.38,0,0,0,12.3-13.81V72.09H245.92q-14.39,0-23.07,5.61t-8.68,14.57a16,16,0,0,0,5.35,12.26Q224.87,109.48,233.62,109.48Z" />
        <path
          class="cls-2"
          d="M380.79,16.9q11.51,10,11.5,28.46,0,19.48-11.5,30.3T348.26,86.47H333.38v27.92H297.79V6.86h50.47Q369.28,6.86,380.79,16.9ZM355.4,56q3.14-3.45,3.14-9.59,0-6-3.14-9.28t-9-3.3h-13V59.47h13Q352.25,59.47,355.4,56Z" />
        <path class="cls-2" d="M410.54,5.67h35.59V114.39H410.54Z" />
        <path
          class="cls-2"
          d="M537.32,38.23a24.92,24.92,0,0,0-13-4.07,20.72,20.72,0,0,0-11.43,3.3,22,22,0,0,0-8,9.13,29.73,29.73,0,0,0-2.84,13.19A30.22,30.22,0,0,0,505,73.05a22.44,22.44,0,0,0,8,9.28,20.36,20.36,0,0,0,11.43,3.38,27.38,27.38,0,0,0,12.5-3.45,42.7,42.7,0,0,0,11.89-9.13l20.56,21.94a67.5,67.5,0,0,1-21.71,15.88,59.32,59.32,0,0,1-54.31-1.38A52.6,52.6,0,0,1,473,89.31a57.81,57.81,0,0,1-7.36-29.07,54.94,54.94,0,0,1,7.52-28.61,53.23,53.23,0,0,1,20.79-19.87,61.8,61.8,0,0,1,30-7.21A64.65,64.65,0,0,1,569.31,24.5L548.75,48.89A39.11,39.11,0,0,0,537.32,38.23Z" />
        <rect class="cls-1" y="109.62" width="15.69" height="3.58" />
      </svg>
    </div>
  </div>
  <div class="flex justify-end w-1/3 mt-4 md:mt-0 md:ml-4">
    <div class="flex items-center py-1 border-b border-b-2 border-white">
      <svg fill="currentColor" viewBox="0 0 20 20" class="w-8 h-8 text-white">
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1
          1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd" />
      </svg>
      <input
        class="w-full px-3 py-1 mr-3 leading-tight text-gray-100 bg-transparent
        border-none appearance-none focus:outline-none"
        type="text"
        aria-label="search"
        bind:value={queryL}
        on:keypress={handleKeypress} />
      <button
        class="flex-shrink-0 px-4 py-1 text-sm font-light tracking-wide
        text-white transition-all duration-300 transform translate-y-0
        bg-transparent border-2 border-transparent rounded hover:bg-purple-900
        hover:border-purple-900 hover:-translate-y-1"
        type="button"
        on:click={handleSearch}>
        search
      </button>

    </div>
  </div>
</div>
