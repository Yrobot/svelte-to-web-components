<svelte:options
  customElement={{
    tag: "my-button",
  }}
/>

<span class="btn"><slot /></span>

<style>
  .btn {
    display: inline-flex;
    height: 3rem;
    min-height: 3rem;
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border-color: transparent;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    font-size: 0.875rem;
    line-height: 1em;
    gap: 0.5rem;
    font-weight: 600;
    border-width: 1px;
    color: oklch(0.746477 0.0216 264.435964 / 1);
    background-color: oklch(0.232607 0.013807 253.100675 / 1);
  }
</style>
