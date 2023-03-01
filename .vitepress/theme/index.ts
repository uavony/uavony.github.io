import { Theme } from 'vitepress'
import DefaultTheme  from 'vitepress/theme'

import './styles/vars.css'
import './styles/base.css'
import './styles/utils.css'
// import './styles/fonts.css'
import './styles/components/custom-block.css'
import './styles/components/vp-code-group.css'
import './styles/components/vp-sponsor.css'
import './styles/components/vp-code.css'
import './styles/components/vp-doc.css'

import './custom.less'

import Layout from './src/Layout.vue'

import Tag from './components/Tag.vue'

export default {
    ...DefaultTheme,
    Layout,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx)
        ctx.app.component('Tag', Tag)
    }
} as Theme
