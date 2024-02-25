<script>
  import Keyboard from '$lib/Keyboard.svelte';
  import { typewriter } from '$lib';
  import { afterUpdate, tick } from 'svelte';
  import { fade } from 'svelte/transition';

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

<section class="relative flex flex-col items-center">
  <article class="max-w-xl leading-relaxed text-slate-700 dark:text-slate-300">
    <h2 class="mb-4 text-xl font-semibold dark:text-slate-200">About</h2>
    <p class="mb-4">
      In my younger years, around the age of 10, I stumbled into the world of computers. I vividly
      remember my first time navigating the web and my first time playing around with an HTML page.
    </p>

    <div class="mb-2 inline-block">
      Nowadays, I work as a
      <div class="relative inline">
        <span
          bind:this={backgroundText}
          class="font-medium opacity-30 hover:text-indigo-600 dark:hover:text-indigo-300"
          >Frontend Developer</span
        >
        <div class="absolute -top-0.5 left-0">
          {#if startTypewriter}
            <span
              bind:this={typewriterOverlay}
              class="font-medium hover:text-indigo-600 dark:hover:text-indigo-300"
              in:typewriter
            >
              Frontend Developer
            </span>
          {:else}
            <span
              class="select-none font-medium {spoiler
                ? 'dark:bg-indigo-400 dark:text-indigo-400'
                : ''}"
              class:bg-indigo-800={spoiler}
              class:text-indigo-800={spoiler}
            >
              Frontend Developer
            </span>
          {/if}
        </div>
      </div>
      and my main focus is developing
      <span class="font-medium hover:text-indigo-600 dark:hover:text-indigo-300"
        >complex UI elements</span
      >, implementing
      <span class="font-medium hover:text-indigo-600 dark:hover:text-indigo-300"
        >business logic</span
      >
      and be a
      <span class="font-medium hover:text-indigo-600 dark:hover:text-indigo-300">team member</span>.
    </div>
    {#if startTypewriter}
      <button class="flex items-center gap-2" on:click={stopTypewriting}>
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
      <button class="flex items-center gap-2" on:click={() => (startTypewriter = true)}>
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

  <div class="mt-4">
    <Keyboard pressedKey={keyPress} />
  </div>
</section>
