<script>
  import { page } from '$app/stores';
</script>

<nav>
  <ul
    class="mt-12 hidden space-y-6 font-lexend text-sm font-light uppercase md:block lg:text-lg xl:text-xl dark:text-slate-100"
  >
    <li class="decoration-2 underline-offset-8" class:underline={$page.url.pathname === '/'}>
      <a href="/">About</a>
    </li>
    <li class="decoration-2 underline-offset-8">
      <a href="/experience" class:underline={$page.url.pathname === '/experience/'}>Experience</a>
    </li>
    <li class="decoration-2 underline-offset-8">
      <a href="/projects" class:underline={$page.url.pathname === '/projects/'}>Projects</a>
    </li>
  </ul>
</nav>
