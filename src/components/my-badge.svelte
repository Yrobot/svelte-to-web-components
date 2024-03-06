<svelte:options
  customElement={{
    tag: "my-badge",
  }}
/>

<span class="badge badge-accent"><slot /></span>

<style lang="postcss">
  @tailwind components;
  @tailwind utilities;
</style>
