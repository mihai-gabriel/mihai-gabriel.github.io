<script>
  import NavigationButton from '$lib/NavigationButton.svelte';
</script>

<section class="relative flex h-full flex-col space-y-6 overflow-hidden overflow-y-auto">
  <article class="max-w-xl leading-relaxed text-slate-700 dark:text-slate-300">
    <h2 class="text-xl font-semibold dark:text-slate-200">Experience</h2>
    <p>
      I began my professional career as a <span class="font-semibold">Web Developer</span>
      while attending a
      <span class="font-semibold">Mathematics and Computer Science</span>
      programme at
      <a
        class="font-semibold text-indigo-500 dark:text-indigo-300"
        href="https://www.cs.ubbcluj.ro/"
        target="_blank">Babeș-Bolyai University</a
      > in Cluj-Napoca.
    </p>
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
          As a developer, I excel in delivering web solutions under tight deadlines, creating
          captivating UI components, and refactoring key project elements. I've successfully
          contributed to four significant projects.
        </p>
        <div class="mt-2 flex flex-row flex-wrap gap-x-3.5 gap-y-0.5 text-sm tracking-tight">
          <span class="font-lexend font-semibold text-indigo-500 dark:text-indigo-300">
            Javascript
          </span>
          <span class="font-lexend font-semibold text-indigo-500 dark:text-indigo-300">
            Typescript
          </span>
          <span class="font-lexend font-semibold text-indigo-500 dark:text-indigo-300">
            React
          </span>
          <span class="font-lexend font-semibold text-indigo-500 dark:text-indigo-300">
            Redux
          </span>
          <span class="font-lexend font-semibold text-indigo-500 dark:text-indigo-300">
            React Query
          </span>
          <span class="font-lexend font-semibold text-indigo-500 dark:text-indigo-300">
            Material UI
          </span>
          <span class="font-lexend font-semibold text-indigo-500 dark:text-indigo-300">
            Node.js
          </span>
          <span class="font-lexend font-semibold text-indigo-500 dark:text-indigo-300">
            NestJS
          </span>
          <span class="font-lexend font-semibold text-indigo-500 dark:text-indigo-300">
            MongoDB
          </span>
        </div>
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
          Enhanced my expertise in frontend development frameworks and libraries through active
          participation in an intern project focused on optimizing process management.
        </p>
        <div class="mt-2 flex flex-row flex-wrap gap-x-3.5 gap-y-0.5 text-sm tracking-tight">
          <span class="font-lexend font-semibold text-indigo-500 dark:text-indigo-300">
            Javascript
          </span>
          <span class="font-lexend font-semibold text-indigo-500 dark:text-indigo-300">
            Typescript
          </span>
          <span class="font-lexend font-semibold text-indigo-500 dark:text-indigo-300">
            React
          </span>
          <span class="font-lexend font-semibold text-indigo-500 dark:text-indigo-300">
            Redux
          </span>
          <span class="font-lexend font-semibold text-indigo-500 dark:text-indigo-300">
            Material UI
          </span>
        </div>
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
          network.
        </p>
        <div class="mt-2 flex flex-row flex-wrap gap-x-3.5 gap-y-0.5 text-sm tracking-tight">
          <span class="font-lexend font-semibold text-indigo-500 dark:text-indigo-300">
            Python
          </span>
          <span class="font-lexend font-semibold text-indigo-500 dark:text-indigo-300">
            Docker
          </span>
          <span class="font-lexend font-semibold text-indigo-500 dark:text-indigo-300">
            Kubernetes
          </span>
        </div>
      </article>
    </div>
  </div>
  <NavigationButton text="projects" link="/projects" />
  <div class="w-full max-w-xl bg-diagonal py-2 dark:bg-diagonalDark" />
</section>
