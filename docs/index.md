<script lang="ts" setup>
import { useData } from 'vitepress'

const { theme } = useData()

</script>


## I am uavony.<Tag text="hua" /> 

Welcome to uavony's website.

<ul>
    <li v-for="content in theme.cusData" ><a :href="content.url">{{content.title}}</a></li>
</ul>

