<script>
  import '../app.css';
</script>

<div in:fade={{ delay: 400, duration: 600, easing: quartInOut }} class="font-space h-lvh w-full">
  <slot />
</div>
