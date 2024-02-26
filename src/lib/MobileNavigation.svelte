<script>
  import { page } from '$app/stores';
</script>

<nav class="flex flex-row space-x-3 py-2 md:hidden dark:text-slate-300">
  <a href="/" class:text-indigo-400={$page.url.pathname === '/'}>About</a>
  <a href="/experience" class:text-indigo-400={$page.url.pathname === '/experience/'}>Experience</a>
  <a href="/projects" class:text-indigo-400={$page.url.pathname === '/projects/'}>Projects</a>
</nav>
