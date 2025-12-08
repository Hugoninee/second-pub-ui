<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Second Pub UI
- Package name: @hugoninee/second-pub-ui
- Description: A Nuxt module providing Cathay Holdings UI components
-->

# Second Pub UI

[![npm version][npm-version-src]][npm-version-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Nuxt module providing Cathay Holdings UI components for consistent branding and user experience.

## Features

<!-- Highlight some of the features your module provide here -->
- 🏢 &nbsp;Cathay Holdings branded header component with breadcrumbs, title, and user profile
- 📄 &nbsp;Footer component with copyright and optional service/privacy links
- 🖼️ &nbsp;Logo components in horizontal, large, and small variants
- 🎨 &nbsp;Integrated with Nuxt UI and Tailwind CSS for consistent styling
- 🔧 &nbsp;Auto-registration of components for easy usage

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add @hugoninee/second-pub-ui
```

That's it! You can now use Second Pub UI components in your Nuxt app ✨

## Components

### PubHeader
A header component featuring:
- Breadcrumb navigation
- Page title
- User avatar with tenant chip
- User name display
- Frontend/backend toggle switch

```vue
<template>
  <PubHeader />
</template>
```

### PubFooter
A footer component with:
- Cathay Holdings copyright notice
- Optional service terms or privacy policy links

```vue
<template>
  <!-- Default footer -->
  <PubFooter />

  <!-- Footer with service terms -->
  <PubFooter property1="Service" />

  <!-- Footer with privacy policy -->
  <PubFooter property1="Privacy" />
</template>
```

### Logo Components
Three logo variants for different use cases:

- **PubLogoHorizontal**: Horizontal layout for headers and navigation
- **PubLogoLarge**: Large vertical layout for landing pages
- **PubLogoSmall**: Small vertical layout for compact spaces

```vue
<template>
  <PubLogoHorizontal />
  <PubLogoLarge />
  <PubLogoSmall />
</template>
```

## Development

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@hugoninee/second-pub-ui/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@hugoninee/second-pub-ui

[npm-downloads-src]: https://img.shields.io/npm/dm/@hugoninee/second-pub-ui.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/@hugoninee/second-pub-ui

[license-src]: https://img.shields.io/npm/l/@hugoninee/second-pub-ui.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@hugoninee/second-pub-ui

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
