<script>
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  export let text = 'Title';

  let textTransition = false;

  onMount(() => (textTransition = true));
</script>

<div class="relative">
  <h1
    class="pointer-events-none absolute top-1 -z-10 w-full font-lexend text-2xl font-bold tracking-tight text-yellow-300 md:text-3xl lg:text-4xl xl:text-5xl dark:hidden"
  >
    {text}
  </h1>
  {#if textTransition}
    <a href="/">
      <h1
        in:fly={{ delay: 600, opacity: 0, y: -10, duration: 800, easing: cubicOut }}
        class="font-lexend text-2xl font-bold tracking-tight text-indigo-600 drop-shadow-md md:text-3xl lg:text-4xl xl:text-5xl dark:text-white"
      >
        {text}
      </h1>
    </a>
  {/if}
</div>
