<script>
  import { page } from '$app/stores';
</script>

<nav
  class="sm:text-md flex flex-col items-end text-sm min-[419px]:flex-row min-[419px]:items-start min-[419px]:space-x-3 min-[419px]:py-2 sm:text-blue-800 md:hidden md:text-lg dark:text-slate-300"
>
  <a href="/" class={$page.url.pathname === '/' ? 'text-indigo-500 dark:text-indigo-300' : ''}>
    About
  </a>
  <a
    href="/experience"
    class={$page.url.pathname === '/experience/' ? 'text-indigo-500 dark:text-indigo-300' : ''}
  >
    Experience
  </a>
  <a
    href="/projects"
    class={$page.url.pathname === '/projects/' ? 'text-indigo-500 dark:text-indigo-300' : ''}
    >Projects</a
  >
</nav>
