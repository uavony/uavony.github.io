import { defineConfig } from 'vitepress'

type CusContent = {
    url:string,
    title:string
}

export default defineConfig({
    title: 'Uavony',
    srcDir: './docs',
    cleanUrls: true,
    head: [
        [ 'link', { rel: 'icon', href: '/favicon.png' } ]
    ],
    themeConfig: {
        logo: '/favicon.png',
        //@ts-ignore
        cusData:[] as CusContent[]
    },
    async transformPageData(pageData) {
        console.log(pageData)
        var lastDotIndex = pageData.relativePath.lastIndexOf('.')
        var cusUrl = '/' + pageData.relativePath.substring(0, lastDotIndex).replace('index','')
        cusUrl.length > 1 && this.site.themeConfig.cusData.push({url: encodeURI(cusUrl), title: pageData.title || pageData.headers?.[0].title || cusUrl })
        // console.log("trans: ", pageData)
        return {
            cusUrl
        }
    },
    async transformHead(context) {
        console.log(context)
        return context.head
    }
})
