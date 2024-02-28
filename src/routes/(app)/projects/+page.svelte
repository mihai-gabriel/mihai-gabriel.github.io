<script>
  import NavigationButton from '$lib/NavigationButton.svelte';
  import ProjectModal from '$lib/ProjectModal.svelte';
  import BugTrackerImage from '/src/lib/assets/bugtracker_01.webp?enhanced';
  import QuizMakerImage from '/src/lib/assets/quizmaker_01.webp?enhanced';
  import ChatroomsImage from '/src/lib/assets/chatrooms_01.webp?enhanced';
  import GuessTheWordImage from '/src/lib/assets/guesstheword_01.webp?enhanced';

  let modalActive = false;
</script>

<section class="relative flex flex-col space-y-6 overflow-y-auto">
  <article class="max-w-xl leading-relaxed text-slate-700 dark:text-slate-300">
    <h2 class="text-xl font-semibold dark:text-slate-200">Projects</h2>
    <p>
      Here's a list of personal projects that I've been working on in my spare time. Everything
      available on GitHub.
    </p>
  </article>
  <article
    class="flex max-w-xl flex-col gap-y-4 leading-relaxed text-slate-700 dark:text-slate-300"
  >
    <header>
      <h2 class="text-xl font-semibold dark:text-slate-200">Bug Tracker</h2>
      <p>A Jira-inspired web app for issue tracking, and priority management on a board.</p>
    </header>
    <div
      class="group relative flex w-full rounded-md bg-diagonal px-0.5 transition-all dark:bg-diagonalDark"
    >
      <enhanced:img
        src={BugTrackerImage}
        alt="Bug tracker project showcase"
        class="z-10 max-w-full rounded-md outline outline-2 outline-indigo-400 transition-all group-hover:-translate-y-4 group-hover:drop-shadow-none md:drop-shadow-xl"
      />
    </div>
    <div class="flex flex-row gap-2">
      <p>Links:</p>
      <a
        href="https://github.com/mihai-gabriel/bugtracker"
        class="font-semibold text-indigo-500 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-400"
        target="_blank"
      >
        Github
      </a>
    </div>
  </article>
  <article
    class="flex max-w-xl flex-col gap-y-4 leading-relaxed text-slate-700 dark:text-slate-300"
  >
    <header>
      <h2 class="text-xl font-semibold dark:text-slate-200">Quiz Platform</h2>
      <p>A quiz platform meant to be aiding a student present their Bachelor's degree project.</p>
    </header>
    <div
      class="group relative flex w-full rounded-md bg-diagonal px-0.5 transition-all dark:bg-diagonalDark"
    >
      <enhanced:img
        src={QuizMakerImage}
        alt="Quiz platform project showcase"
        class="z-10 max-w-full rounded-md outline outline-2 outline-indigo-400 transition-all group-hover:-translate-y-4 group-hover:drop-shadow-none md:drop-shadow-xl"
      />
    </div>
    <div class="flex flex-row gap-2">
      <p>Links:</p>
      <a
        href="https://github.com/mihai-gabriel/quiz_project"
        class="font-semibold text-indigo-500 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-400"
        target="_blank"
      >
        Github
      </a>
      <a
        href="https://quiz-maker-gab.netlify.app/"
        class="ml-2 font-semibold text-indigo-500 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-400"
        target="_blank"
      >
        Demo
      </a>
    </div>
  </article>
  <article
    class="flex max-w-xl flex-col gap-y-4 leading-relaxed text-slate-700 dark:text-slate-300"
  >
    <header>
      <h2 class="text-xl font-semibold dark:text-slate-200">Chatrooms</h2>
      <p>Using WebSockets to create a real-time chat app similar to Messenger.</p>
    </header>
    <div
      class="group relative flex w-full rounded-md bg-diagonal px-0.5 transition-all dark:bg-diagonalDark"
    >
      <enhanced:img
        src={ChatroomsImage}
        alt="Bug tracker project showcase"
        class="z-10 max-w-full rounded-md outline outline-2 outline-indigo-400 transition-all group-hover:-translate-y-4 group-hover:drop-shadow-none md:drop-shadow-xl"
      />
    </div>
    <div class="flex flex-row gap-2">
      <p>Links:</p>
      <a
        href="https://github.com/mihai-gabriel/chat-room"
        class="font-semibold text-indigo-500 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-400"
        target="_blank"
      >
        Github
      </a>
    </div>
  </article>
  <article
    class="flex max-w-xl flex-col gap-y-4 leading-relaxed text-slate-700 dark:text-slate-300"
  >
    <header>
      <h2 class="text-xl font-semibold dark:text-slate-200">Guess the word</h2>
      <p>I was testing out Svelte by making a fancy UI for a mini-game. Try out the demo!</p>
    </header>
    <div
      class="group relative flex w-full rounded-md bg-diagonal px-0.5 transition-all dark:bg-diagonalDark"
    >
      <enhanced:img
        src={GuessTheWordImage}
        alt="Bug tracker project showcase"
        class="z-10 max-w-full rounded-md outline outline-2 outline-indigo-400 transition-all group-hover:-translate-y-4 group-hover:drop-shadow-none md:drop-shadow-xl"
      />
    </div>
    <div class="flex flex-row gap-2">
      <p>Links:</p>
      <a
        href="https://github.com/mihai-gabriel/guess-the-word"
        class="font-semibold text-indigo-500 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-400"
        target="_blank"
      >
        Github
      </a>
      <a
        href="https://guess-word-mihai.netlify.app/"
        class="ml-2 font-semibold text-indigo-500 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-400"
        target="_blank"
      >
        Demo
      </a>
    </div>
  </article>
  {#if modalActive}
    <ProjectModal />
  {/if}
  <NavigationButton back={true} text="about" link="/" />
  <div class="w-full max-w-xl bg-diagonal py-2 dark:bg-diagonalDark" />
</section>
