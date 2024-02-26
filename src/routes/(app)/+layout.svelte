<script>
  import Title from '$lib/Title.svelte';
  import Socials from '$lib/Socials.svelte';
  import JapaneseText from '$lib/JapaneseText.svelte';
  import Bulb from '$lib/Bulb.svelte';
  import Navigation from '$lib/Navigation.svelte';
  import MobileNavigation from '$lib/MobileNavigation.svelte';
</script>

<div class="-z-10 h-lvh w-full font-space dark:bg-slate-800">
  <div
    class="container relative z-0 mx-auto flex h-full max-w-screen-xl flex-col px-6 py-4 md:py-20"
  >
    <div class="mb-10 flex flex-row md:mb-0">
      <div class="flex flex-1 flex-col items-start space-y-1 rounded-xl">
        <Title text="Mihai Gabriel" />
        <h2 class="font-space font-light tracking-tight md:text-lg xl:text-2xl dark:text-slate-300">
          Frontend Developer
        </h2>
      </div>
      <MobileNavigation />
    </div>

    <JapaneseText />

    <div class="flex min-h-[80%] flex-col space-x-0 md:flex-row md:space-x-10">
      <Navigation />
      <div
        class="flex w-full justify-center pb-12 md:-mt-[64px] lg:-mt-[68px] xl:-mt-[80px] dark:text-slate-200"
      >
        <slot />
      </div>
    </div>
  </div>

  <footer
    class="fixed bottom-0 flex w-full items-center space-x-6 bg-white py-4 md:py-8 dark:bg-slate-800"
  >
    <div class="mx-auto flex w-full max-w-screen-xl flex-row items-center px-6">
      <Socials displayed={['linkedin', 'github', 'gitbook']} />
      <Bulb />
    </div>
  </footer>
</div>
