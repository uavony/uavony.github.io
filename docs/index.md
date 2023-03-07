<script lang="ts" setup>
import { useData } from 'vitepress'

const { theme } = useData()

</script>

<div class="title-box">Uavony's Webpage</div> 

<p>I am Uavony and this is my webpage. There’s a lot here, so thanks for stopping by!</p>

<p style="margin-top: 1rem;">Please work harder, for someone you want to see, for the things you want to do, for the person you want to be.</p>

<ul>
    <li v-for="content in theme.cusData" ><a :href="content.url">{{content.title}}</a></li>
</ul>

<style lang="less" scoped>
.title-box {
    font-size: 2.5rem;
    font-weight:700;
    margin: 0 auto;
    margin-bottom: 2rem;
    text-align:center;
}
</style>

