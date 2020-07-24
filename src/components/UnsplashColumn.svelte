<script>
  export let results = null;
</script>

{#if results}
  <div class="w-1/3 px-3 my-3">
    <h3
      class="text-3xl font-thin tracking-wide text-center text-gray-700 uppercase">
      pexels:
    </h3>
    {#each results as image, i}
      <!-- Article -->
      <article class="mt-6 overflow-hidden rounded-lg shadow-lg">

        <img
          class="block w-full h-auto placeholder-item lazy"
          src={image.urls.small}
          alt={`Pexels-result-${i}`} />

        <div class="flex items-center justify-between px-3 my-3">
          <a
            class="px-2 text-xs font-bold text-center text-blue-400"
            href={`${image.links.html}?utm_source=your_app_name&utm_medium=referral`}
            target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-8 mb-1">
              <path
                d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"
                fill="#000000"
                fill-rule="nonzero" />
            </svg>
            View on Unsplash
          </a>
          <a
            href={`${image.links.download}?utm_source=your_app_name&utm_medium=referral`}
            target="_blank"
            class="px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-purple-500"
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
          <p class="mr-2 text-xs text-right">
            <a
              href={`${image.user.links.html}?utm_source=your_app_name&utm_medium=referral`}
              target="_blank"
              class="pr-4">
              <img
                src={image.user.profile_image.small}
                alt={image.user.name}
                class="rounded-full" />
            </a>
          </p>
        </footer>

      </article>
    {/each}
  </div>
{/if}
