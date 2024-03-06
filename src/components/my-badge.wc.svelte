<svelte:options
  customElement={{
    tag: "my-badge",
  }}
/>

<span class="badge px-4"><slot /></span>

<style lang="postcss">
  @tailwind components;
  @tailwind utilities;
  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 1.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    border-radius: var(--rounded-badge, 1.9rem);
    border-width: 1px;
    border-color: oklch(0.253267 0.015896 252.417568 / 1);
    background-color: oklch(0.253267 0.015896 252.417568 / 1);
    color: oklch(0.746477 0.0216 264.435964 / 1);
  }
</style>
