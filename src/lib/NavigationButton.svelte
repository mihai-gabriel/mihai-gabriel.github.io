<script>
  export let link = '';
  export let text = '(add-text)';
  export let back = false;
</script>

<a
  href={link}
  class="bottom-0 mt-8 flex w-full rounded-sm border-2 border-indigo-500 px-4 py-3 md:hidden dark:border-indigo-300 dark:text-indigo-300"
>
  <span class="text-indigo-500 dark:text-indigo-300">
    <span class={back ? 'inline' : 'hidden'}>&leftarrow;</span> Go to {text}
    <span class={!back ? 'inline' : 'hidden'}>&rightarrow;</span>
  </span>
</a>
