<svelte:options
  customElement={{
    tag: "my-button",
  }}
/>

<button class="btn border-0"><slot /></button>

<style lang="postcss">
  @tailwind components;
  @tailwind utilities;
</style>
