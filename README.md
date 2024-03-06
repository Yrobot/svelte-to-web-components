# Svelte & Tailwindcss Components to Web Components

> Svelte, Tailwindcss, Daisyui, Vite, Typescript

This is a best practice for converting Svelte components to Web Components.

## Build the whole demo website

```bash
bun install
bun build:website
```

you will see the whole demo website is ready to launch under dir `dist`.

```
dist
├─index.html
├─wc
| ├─my-badge.js
| ├─my-button.js
| └my-dropdown.js
├─assets
|   ├─app.css
|   ├─app.js
|   └index-DfBbDRyK.js
```

All the js files under folder `dist/wc` are all ready to go as Web Components.

## Build Web Components only

```bash
bun install
bun build:wc
```

```
web-components
├─index-2Xyg-2dD.js
├─my-badge.js
├─my-button.js
└my-dropdown.js
```
