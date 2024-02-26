<script>
  import { page } from '$app/stores';
</script>

<nav>
  <ul
    class="mt-16 hidden min-w-44 font-lexend text-sm font-semibold uppercase text-slate-700 md:block md:space-y-4 lg:space-y-6 lg:text-lg xl:space-y-8 xl:text-xl dark:text-slate-100"
  >
    <li class="decoration-2 underline-offset-8">
      <a
        class="flex gap-2 {$page.url.pathname === '/'
          ? 'text-indigo-500 dark:text-indigo-300'
          : ''}"
        href="/"
      >
        <span class="-translate-y-0.5 {$page.url.pathname === '/' ? 'flex' : 'hidden'}">
          &gt;
        </span>
        About
        <span class="-translate-y-0.5 {$page.url.pathname === '/' ? 'flex' : 'hidden'}">
          &lt;
        </span>
      </a>
    </li>
    <li class="decoration-2 underline-offset-8">
      <a
        class="flex gap-2 {$page.url.pathname === '/experience/'
          ? 'text-indigo-500 dark:text-indigo-300'
          : ''}"
        href="/experience"
      >
        <span class="-translate-y-0.5 {$page.url.pathname === '/experience/' ? 'flex' : 'hidden'}">
          &gt;
        </span>
        Experience
        <span class="-translate-y-0.5 {$page.url.pathname === '/experience/' ? 'flex' : 'hidden'}">
          &lt;
        </span>
      </a>
    </li>
    <li class="decoration-2 underline-offset-8">
      <a
        class="flex gap-2 {$page.url.pathname === '/projects/'
          ? 'text-indigo-500 dark:text-indigo-300'
          : ''}"
        href="/projects"
      >
        <span class="-translate-y-0.5 {$page.url.pathname === '/projects/' ? 'flex' : 'hidden'}">
          &gt;
        </span>
        Projects
        <span class="-translate-y-0.5 {$page.url.pathname === '/projects/' ? 'flex' : 'hidden'}">
          &lt;
        </span>
      </a>
    </li>
  </ul>
</nav>
