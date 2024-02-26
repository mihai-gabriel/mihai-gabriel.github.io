<script>
  import NavigationButton from '$lib/NavigationButton.svelte';
</script>

<section class="relative flex flex-col space-y-4 overflow-y-auto">
  <article class="max-w-xl leading-relaxed text-slate-700 dark:text-slate-300">
    <h2 class="text-xl font-semibold dark:text-slate-200">Experience</h2>
  </article>
  <div class="flex flex-col space-y-8 md:space-y-12">
    <div class="flex max-w-xl flex-row md:space-x-6">
      <p
        class="hidden min-w-36 text-nowrap py-1 text-sm text-slate-800 md:block dark:text-slate-300"
      >
        APR 2022 — PRESENT
      </p>
      <article>
        <p class="py-1 text-sm text-slate-800 md:hidden dark:text-slate-300">APR 2022 — PRESENT</p>
        <h4 class="text-lg font-semibold dark:text-white">Frontend Developer &bullet; Rebeldot</h4>
        <p>
          I made substantial contributions to the critical components of various projects, utilizing
          React, Typescript, Redux, and Node.js
        </p>
      </article>
    </div>
    <div class="flex max-w-xl flex-row md:space-x-6">
      <p
        class="hidden min-w-36 text-nowrap py-1 text-sm text-slate-800 md:block dark:text-slate-300"
      >
        MAR 2022 — APR 2022
      </p>
      <article>
        <p class="py-1 text-sm text-slate-800 md:hidden dark:text-slate-300">MAR 2022 — APR 2022</p>
        <h4 class="text-lg font-semibold dark:text-white">Intern &bullet; Rebeldot</h4>
        <p>
          Enhanced my expertise using React, Material UI, and Redux while actively contributing to
          an intern project focused on optimizing process management.
        </p>
      </article>
    </div>
    <div class="flex max-w-xl flex-row md:space-x-6">
      <p
        class="hidden min-w-36 text-nowrap py-1 text-sm text-slate-800 md:block dark:text-slate-300"
      >
        JUL 2021 — OCT 2021
      </p>
      <article>
        <p class="py-1 text-sm text-slate-800 md:hidden dark:text-slate-300">JUL 2021 — OCT 2021</p>
        <h4 class="text-lg font-semibold dark:text-white">Intern &bullet; Bosch</h4>
        <p>
          I have developed a Python program for managing files uploaded from remote devices on a
          network
        </p>
      </article>
    </div>
  </div>
  <NavigationButton text="projects" link="/projects" />
</section>
