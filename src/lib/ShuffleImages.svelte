<script>
  /** @type {string[]} */
  export let images = [];
</script>

<main class="relative flex min-h-[500px] max-w-screen-xl justify-center">
  {#each images as image, idx}
    <img
      src={image}
      alt="Bug tracker project showcase"
      class="w-sm absolute rounded-md shadow-md shadow-indigo-500/60"
    />
  {/each}
</main>
