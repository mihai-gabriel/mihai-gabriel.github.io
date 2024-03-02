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
  <!-- TODO: Provide a different title for every page -->
  <meta name="title" content="Mihai Șucaliuc — Personal website" />
  <meta
    name="description"
    content="Personal website where I link all of my socials and provide a description of my experience and projects that I've worked on. This should work well on mobile too!"
  />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://mihaigabriel.dev/" />
  <meta property="og:title" content="Mihai Șucaliuc — Personal website" />
  <meta
    property="og:description"
    content="Personal website where I link all of my socials and provide a description of my experience and projects that I've worked on. This should work well on mobile too!"
  />
  <meta property="og:image" content="https://mihaigabriel.dev/preview.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://mihaigabriel.dev/" />
  <meta property="twitter:title" content="Mihai Șucaliuc — Personal website" />
  <meta
    property="twitter:description"
    content="Personal website where I link all of my socials and provide a description of my experience and projects that I've worked on. This should work well on mobile too!"
  />
  <meta property="twitter:image" content="https://mihaigabriel.dev/preview.png" />

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
