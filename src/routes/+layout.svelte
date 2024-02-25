<script>
  import '../app.css';
  import Title from '$lib/Title.svelte';
  import Socials from '$lib/Socials.svelte';
  import JapaneseText from '$lib/JapaneseText.svelte';
  import Bulb from '$lib/Bulb.svelte';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';

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

<div class="-z-10 h-lvh w-full font-space dark:bg-slate-800">
  <div class="container relative z-0 mx-auto flex h-full max-w-screen-xl flex-col py-20">
    <div class="flex flex-col items-start space-y-1 rounded-xl">
      <Title text="Mihai Gabriel" />
      <h2 class="font-space text-2xl font-light tracking-tight dark:text-white">
        Frontend Developer
      </h2>
    </div>

    <JapaneseText />

    <div class="flex min-h-[80%] flex-row space-x-10">
      <ul class="mt-12 space-y-6 font-lexend text-xl font-light uppercase dark:text-zinc-100">
        <li class="decoration-2 underline-offset-8" class:underline={$page.url.pathname === '/'}>
          <a href="/">About</a>
        </li>
        <li class="decoration-2 underline-offset-8">
          <a href="/experience" class:underline={$page.url.pathname === '/experience/'}
            >Experience</a
          >
        </li>
        <li class="decoration-2 underline-offset-8">
          <a href="/projects" class:underline={$page.url.pathname === '/projects/'}>Projects</a>
        </li>
      </ul>

      <div class="-mt-[80px] flex w-full justify-center overflow-y-auto pb-12 dark:text-slate-200">
        <slot />
      </div>
    </div>

    <footer class="flex flex-row items-center justify-between space-x-6 py-8">
      <Socials displayed={['linkedin', 'github', 'gitbook']} />
      <Bulb />
    </footer>
  </div>
</div>

{#if beforeMount}
  <div
    out:fade={{ duration: 200 }}
    class="absolute left-0 top-0 z-50 flex h-lvh w-lvw items-center justify-center bg-indigo-900 text-white"
  >
    <h2 class="font-space text-2xl">Loading...</h2>
  </div>
{/if}
