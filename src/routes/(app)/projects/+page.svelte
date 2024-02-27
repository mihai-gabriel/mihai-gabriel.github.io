<script>
  import NavigationButton from '$lib/NavigationButton.svelte';
  import ShuffleImages from '$lib/ShuffleImages.svelte';
  import ProjectModal from '$lib/ProjectModal.svelte';

  let modalActive = false;
</script>

<section class="relative flex flex-col overflow-y-auto">
  <article class="mb-4 max-w-xl leading-relaxed text-slate-700 dark:text-slate-300">
    <h2 class="text-xl font-semibold dark:text-slate-200">Projects</h2>
  </article>
  <article class="max-w-xl leading-relaxed text-slate-700 dark:text-slate-300">
    <h2 class="text-xl font-semibold dark:text-slate-200">Bug Tracker</h2>
    <p>A Jira-inspired web app for issue tracking, and priority management on a board.</p>
  </article>
  <!-- TODO: REMOVE THIS BUTTON -->
  <button
    class="mt-2 self-start rounded-md bg-indigo-900 px-8 py-2 text-slate-300 hover:bg-indigo-700 hover:text-slate-200 active:bg-indigo-500"
    on:click={() => (modalActive = true)}
  >
    Click
  </button>
  <!--  <ShuffleImages-->
  <!--    images={[-->
  <!--      'https://plus.unsplash.com/premium_photo-1691223714409-b0cb1629f0f7?q=80&w=2120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',-->
  <!--      'https://plus.unsplash.com/premium_photo-1708834157582-631b565512eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'-->
  <!--    ]}-->
  <!--  />-->
  {#if modalActive}
    <ProjectModal />
  {/if}
  <NavigationButton back={true} text="about" link="/" />
</section>
