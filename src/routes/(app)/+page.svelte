<script>
  import Keyboard from '$lib/Keyboard.svelte';
  import { typewriter } from '$lib';
  import { afterUpdate, tick } from 'svelte';
  import { fade } from 'svelte/transition';
  import NavigationButton from '$lib/NavigationButton.svelte';

  let startTypewriter = false;
  let keyPress = '';
  let spoiler = true;

  /** @type {HTMLElement | null} */
  let typewriterOverlay = null;

  /** @type {HTMLElement | null} */
  let backgroundText = null;

  const stopTypewriting = () => {
    startTypewriter = false;
    keyPress = '';
  };

  const focusGitBook = () => {
    const gitBook = document.querySelector('#gitbook');

    if (gitBook) {
      gitBook.classList.add('text-yellow-500');
      gitBook.classList.add('dark:text-yellow-300');
    }
  };

  const unfocusGitBook = () => {
    const gitBook = document.querySelector('#gitbook');

    if (gitBook) {
      gitBook.classList.remove('text-yellow-500');
      gitBook.classList.remove('dark:text-yellow-300');
    }
  };

  afterUpdate(async () => {
    await tick();

    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver(() => {
      if (typewriterOverlay && backgroundText) {
        keyPress = typewriterOverlay.textContent?.at(-1) ?? '';
        spoiler = false;

        if (typewriterOverlay.textContent?.length === backgroundText.textContent?.length) {
          stopTypewriting();
        }
      }
    });

    if (typewriterOverlay) {
      observer.observe(typewriterOverlay, config);
    }

    return () => observer.disconnect();
  });
</script>

<section class="relative flex flex-col items-center space-y-6">
  <article class="max-w-xl leading-relaxed text-slate-700 dark:text-slate-300">
    <h2 class="text-xl font-semibold dark:text-slate-200">About</h2>
    <p class="mb-4">
      In my younger years, around the age of 10, I stumbled into the world of computers. I vividly
      remember my first time navigating the web and my first time playing around with an HTML page.
    </p>

    <div class="mb-4 inline-block">
      I currently work as a
      <div class="relative inline">
        <span
          bind:this={backgroundText}
          class="font-medium hover:text-indigo-600 md:opacity-30 dark:hover:text-indigo-300"
        >
          Full-stack Developer
        </span>
        <div class="absolute -top-0.5 left-0">
          {#if startTypewriter}
            <span
              bind:this={typewriterOverlay}
              class="font-medium hover:text-indigo-600 dark:hover:text-indigo-300"
              in:typewriter
            >
              Full-stack Developer
            </span>
          {:else if !spoiler}
            <!--            <span-->
            <!--              class="select-none font-medium {spoiler-->
            <!--                ? 'dark:bg-indigo-400 dark:text-indigo-400'-->
            <!--                : ''}"-->
            <!--              class:bg-indigo-800={spoiler}-->
            <!--              class:text-indigo-800={spoiler}-->
            <!--            >-->
            <span class="font-medium hover:text-indigo-800 dark:hover:text-indigo-300">
              Full-stack Developer
            </span>
          {/if}
        </div>
      </div>
      , mainly focused on crafting
      <span class="font-medium hover:text-indigo-600 dark:hover:text-indigo-300">
        complex UI elements</span
      >, implementing
      <span class="font-medium hover:text-indigo-600 dark:hover:text-indigo-300">
        business logic
      </span>
      and being a reliable
      <span class="font-medium hover:text-indigo-600 dark:hover:text-indigo-300">team member</span>.
    </div>
    {#if startTypewriter}
      <button class="hidden items-center gap-2 md:flex" on:click={stopTypewriting}>
        <svg
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="currentColor"
        >
          <path
            d="M448 95.1v320c0 35.35-28.65 64-64 64H64c-35.35 0-64-28.65-64-64v-320c0-35.35 28.65-63.1 64-63.1h320C419.3 31.1 448 60.65 448 95.1z"
          />
        </svg>
        Stop
      </button>
    {:else}
      <button
        class="hidden items-center gap-2 [animation-iteration-count:2] md:flex"
        class:animate-pulse={spoiler}
        on:click={() => (startTypewriter = true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          class="h-4 w-4 text-indigo-700 dark:text-indigo-400"
          fill="currentColor"
        >
          <path
            d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
          />
        </svg>
        Start
      </button>
    {/if}
  </article>

  <div class="my-4">
    <Keyboard pressedKey={keyPress} />
  </div>

  <article class="w-full max-w-xl md:mt-4">
    <p class="flex items-center gap-1">
      Check out my
      <a
        href="https://blog.mihaigabriel.dev/"
        target="_blank"
        class="group flex items-center gap-1 text-indigo-500 hover:text-yellow-500 focus:text-yellow-500 dark:text-indigo-300 dark:hover:text-yellow-300 dark:focus:text-yellow-300"
        on:mouseenter={focusGitBook}
        on:focusin={focusGitBook}
        on:focusout={unfocusGitBook}
        on:mouseleave={unfocusGitBook}
      >
        blog articles
        <svg
          class="h-4 w-4 transition-transform group-hover:translate-x-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>
    </p>
  </article>

  <NavigationButton text="experience" link="/experience" />
  <div class="w-full max-w-xl bg-diagonal py-2 dark:bg-diagonalDark" />
</section>
