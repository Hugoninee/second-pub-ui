import { defineNuxtModule, createResolver, addComponent } from '@nuxt/kit'

// Module options TypeScript interface definition
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'second-pub-ui',
    configKey: 'secondPubUi',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  moduleDependencies: {
    '@nuxt/ui': {},
  },
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    _nuxt.options.css.push(resolver.resolve('./runtime/assets/tailwind.css'))

    const components = ['PubFooter', 'PubHeader', 'PubLogoHorizontal', 'PubLogoLarge', 'PubLogoSmall']
    components.forEach((name) => {
      addComponent({
        name,
        filePath: resolver.resolve(`./runtime/components/${name}.vue`),
      })
    })

    const runtimeDir = resolver.resolve('./runtime') // 先解析到 runtime 資料夾的絕對路徑

    // 針對 Nuxt UI v4 / Tailwind v4 的修正：
    // 有時候舊的 hook 不會觸發，我們直接注入到 nuxt options 確保生效
    _nuxt.options.vite = _nuxt.options.vite || {}
    _nuxt.options.vite.css = _nuxt.options.vite.css || {}
    _nuxt.options.vite.css.preprocessorOptions = _nuxt.options.vite.css.preprocessorOptions || {}

    // 嘗試使用 hook (針對相容層)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _nuxt.hook('tailwindcss:config' as any, (tailwindConfig: any) => {
      const contentPath = `${runtimeDir}/components/**/*.{vue,js,ts,mjs}`

      // 確保 content 陣列存在並推入路徑
      tailwindConfig.content = tailwindConfig.content || []

      // 處理 Tailwind v3/v4 不同格式 (Array 或 Object)
      if (Array.isArray(tailwindConfig.content)) {
        tailwindConfig.content.push(contentPath)
      }
      else {
        tailwindConfig.content.files = tailwindConfig.content.files || []
        tailwindConfig.content.files.push(contentPath)
      }
    })
  },
})
