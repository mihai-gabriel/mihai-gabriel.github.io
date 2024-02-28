<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let beforeMount = true;

  onMount(() => {
    const loadingPage = setTimeout(() => {
      beforeMount = false;
    }, 200);

    return () => clearTimeout(loadingPage);
  });
</script>

<svelte:head>
  <script>
    const storedTheme = localStorage.getItem('theme') ?? 'light';
    document.documentElement.setAttribute('data-theme', storedTheme);
  </script>
</svelte:head>

<slot />

{#if beforeMount}
  <div
    out:fade={{ duration: 200 }}
    class="fixed left-0 top-0 z-50 flex h-lvh w-lvw items-center justify-center bg-indigo-900 text-white"
  >
    <h2 class="font-space text-2xl">Loading...</h2>
  </div>
{/if}
