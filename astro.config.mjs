import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://timothyylim.github.io',
  base: '/asean-dashboard',
  integrations: [
    starlight({
      title: 'ASEAN Network',
      tableOfContents: false,
      sidebar: [
        { label: 'Start Here', link: '/' },
        {
          label: 'Network',
          autogenerate: { directory: 'network' },
        },
      ],
    }),
  ],
})
