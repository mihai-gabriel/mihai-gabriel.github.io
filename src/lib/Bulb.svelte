<script>
  import { onMount } from 'svelte';

  let theme = 'light';

  const toggleTheme = () => {
    const toggledTheme = theme === 'light' ? 'dark' : 'light';

    if (document) {
      localStorage.setItem('theme', toggledTheme);
      document.documentElement.setAttribute('data-theme', toggledTheme);
      theme = toggledTheme;
    }
  };

  onMount(() => {
    theme = document.documentElement.dataset.theme ?? 'light';
  });
</script>

<svelte:document />

<div class="z-20 translate-y-0.5">
  <button on:click={toggleTheme}>
    {#if theme !== 'light'}
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        fill="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 text-yellow-500 lg:h-7 lg:w-7 xl:h-8 xl:w-8"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 text-indigo-800 lg:h-7 lg:w-7 xl:h-8 xl:w-8"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    {/if}
  </button>
</div>
