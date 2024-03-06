<svelte:options
  customElement={{
    tag: "my-dropdown",
    props: {
      content: { reflect: true, type: "Array" },
    },
  }}
/>

<script lang="ts">
  import { onMount } from "svelte";
  // 参考：https://github.com/sveltejs/svelte/issues/9487
  export let content: string[] = [];
  console.log({ content });
  onMount(async () => {
    console.log("onMount", { content });
  });
</script>

<div class="dropdown">
  <div tabindex="0" role="button" class="btn m-1"><slot /></div>
  <ul
    tabindex="0"
    class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
  >
    {#each content as item}
      <li><a>{item}</a></li>
    {/each}
  </ul>
</div>

<style lang="postcss">
  @tailwind components;
  @tailwind utilities;
</style>
