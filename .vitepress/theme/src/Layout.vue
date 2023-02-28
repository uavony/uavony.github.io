<script setup lang="ts">
</script>

<template>
    <div class="root" >
        <Content class="content" />
    </div>
</template>

<style lang="less" scoped>
// root 
.root {
    padding-top: 32px;
    .content {
        margin: 0 auto;
    }
}

@media screen and (min-width: 768px) {
    .content {
        width: 768px;
    }
}
@media screen and (max-width: 768px) {
    .content {
        width: 100%;
    }
}
</style>

