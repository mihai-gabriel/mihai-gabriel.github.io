<script>
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  let textTransition = false;

  onMount(() => (textTransition = true));
</script>

{#if textTransition}
  <a
    href="#work-in-progress"
    in:fly={{ delay: 400, opacity: 0, duration: 800, easing: cubicOut }}
    class="fixed hidden self-end font-mplus font-bold tracking-[26px] opacity-40 [writing-mode:vertical-lr] hover:text-indigo-600 hover:opacity-90 md:text-xl min-[864px]:block lg:text-2xl xl:text-3xl dark:text-slate-100 dark:hover:text-slate-200"
  >
    猫が大好きです
  </a>
{/if}
