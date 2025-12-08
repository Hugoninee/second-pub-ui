import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'second-pub-ui',
    configKey: 'secondPubUi',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // 確保 @nuxt/ui 已安裝並註冊
    await _nuxt.hooks.callHook('modules:before' as any)
    if (!_nuxt.options.modules.includes('@nuxt/ui')) {
      _nuxt.options.modules.push('@nuxt/ui')
    }

    addComponent({
      name: 'PubFooter',
      filePath: resolver.resolve('./runtime/components/PubFooter.vue')
    })
    addComponent({
      name: 'PubHeader',
      filePath: resolver.resolve('./runtime/components/PubHeader.vue')
    })
    addComponent({
      name: 'PubLogoHorizontal',
      filePath: resolver.resolve('./runtime/components/PubLogoHorizontal.vue')
    })
    addComponent({
      name: 'PubLogoLarge',
      filePath: resolver.resolve('./runtime/components/PubLogoLarge.vue')
    })
    addComponent({
      name: 'PubLogoSmall',
      filePath: resolver.resolve('./runtime/components/PubLogoSmall.vue')
    })
    
    // 確保 Tailwind CSS 掃描模組元件
    _nuxt.hook('tailwindcss:config' as any, (tailwindConfig: any) => {
      const componentPath = resolver.resolve('./runtime/components/**/*.{vue,mjs,ts}')
      
      // 將元件路徑加入 Tailwind 掃描清單
      if (!tailwindConfig.content) {
        tailwindConfig.content = []
      }
      
      if (Array.isArray(tailwindConfig.content)) {
        if (!tailwindConfig.content.includes(componentPath)) {
          tailwindConfig.content.push(componentPath)
        }
      } else if (tailwindConfig.content.files) {
        if (!tailwindConfig.content.files.includes(componentPath)) {
          tailwindConfig.content.files.push(componentPath)
        }
      }
    })
  },
})
