<script>
  export let results = null;
</script>

{#if results}
  <div class="w-full px-3 my-3 md:w-1/3">
    <h3
      class="text-3xl font-thin tracking-wider text-center text-gray-600 uppercase">
      pexels:
    </h3>
    {#each results as image, i}
      <!-- Article -->
      <article class="mt-6 overflow-hidden rounded-lg shadow-lg">

        <img
          class="block w-full h-auto placeholder-item lazy"
          src={image.src.medium}
          alt={`Pexels-result-${i}`} />

        <div class="flex items-center justify-between px-3 my-3">
          <a
            class="px-2 text-xs font-bold text-center text-blue-400"
            href={image.url}
            target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 200 200"
              class="w-8 h-8 mx-auto">
              <defs>
                <path
                  id="a"
                  d="M18.595 108.857h35.92V74.82H65.36c16.04 0 29.045-12.688
                  29.045-28.339
                  0-15.65-13.004-28.338-29.045-28.338H18.595v90.714zM73.109
                  127H0V0h65.36C91.667 0 113 20.81 113 46.481c0 23.097-17.265
                  42.26-39.89 45.87V127z" />
              </defs>
              <g fill="none" fill-rule="evenodd">
                <rect width="200" height="200" fill="#FFF" rx="30" />
                <g transform="translate(52 37)">
                  <mask id="b" fill="#fff">
                    <use xlink:href="#a" />
                  </mask>
                  <use fill="#FFF" fill-rule="nonzero" xlink:href="#a" />
                  <g fill-rule="nonzero" mask="url(#b)">
                    <path
                      fill="#ef3d3b"
                      d="M4.2 0h94.6c9.5 0 17.2 7.73 17.2
                      17.265v4.316H-13v-4.316C-13 7.73-5.3 0 4.2 0z" />
                    <path fill="#ee6e26" d="M-13 21.581h129v21.581H-13z" />
                    <path fill="#fbc324" d="M-13 42.419h129V64H-13z" />
                    <path fill="#00a081" d="M-13 64h129v21.581H-13z" />
                    <path fill="#3d6db5" d="M-13 85.581h129v21.581H-13z" />
                    <path
                      fill="#785ca7"
                      d="M-13 106.419h129v4.316C116 120.27 108.3 128 98.8
                      128H4.2c-9.5 0-17.2-7.73-17.2-17.265v-4.316z" />
                  </g>
                </g>
              </g>
            </svg>
            View on Pexels
          </a>
          <a href={image.src.original} target="_blank" class="px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-blue-500"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <path
                d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0
                -2.1 8.4" />
              <line x1="12" y1="13" x2="12" y2="22" />
              <polyline points="9 19 12 22 15 19" />
            </svg>
          </a>
        </div>

        <footer
          class="flex items-center justify-between p-2 font-light leading-none md:p-4">
          <p class="pl-1 text-xs text-gray-600">
            {image.width}w x {image.height}h
          </p>
          <p class="ml-2 text-xs text-right text-gray-600">
            <a href={image.photographer_url} target="_blank">
              by: {image.photographer}
            </a>
          </p>
        </footer>

      </article>
    {/each}
  </div>
{/if}
