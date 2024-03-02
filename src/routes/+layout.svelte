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
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&family=M+PLUS+1:wght@700&family=Space+Grotesk:wght@300..700&display=swap"
    rel="stylesheet"
  />

  <script>
    const storedTheme = localStorage.getItem('theme') ?? 'light';
    document.documentElement.setAttribute('data-theme', storedTheme);
  </script>
</svelte:head>

<slot />

{#if beforeMount}
  <div
    out:fade={{ duration: 100 }}
    class="fixed left-0 top-0 z-50 flex h-lvh w-lvw items-center justify-center bg-indigo-900 text-white"
  >
    <h2 class="font-space text-2xl">Loading...</h2>
  </div>
{/if}
