import { Theme } from 'vitepress'
import DefaultTheme  from 'vitepress/theme'

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
