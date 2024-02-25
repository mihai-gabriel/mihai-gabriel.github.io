<script>
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  let textTransition = false;

  onMount(() => (textTransition = true));
</script>

{#if textTransition}
  <a
    href="#"
    in:fly={{ delay: 400, opacity: 0, duration: 800, easing: cubicOut }}
    class="font-mplus absolute self-end text-3xl font-bold tracking-[26px] opacity-40 [writing-mode:vertical-lr] hover:text-indigo-600 hover:opacity-90 dark:text-slate-100 dark:hover:text-slate-200"
  >
    猫が大好きです
  </a>
{/if}
