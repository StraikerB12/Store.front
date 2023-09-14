<template>
    <div class="tag-app">{{ tag.name }}</div>
</template>
<script lang="ts" setup>
    import { Tag } from "@/types/Post";
    defineProps<{tag: Tag}>();
</script>
<style lang="scss" scoped>
    .tag-app {
        display: inline-block;
        margin-right: 5px;
        padding: 2px 12px;
        border-radius: 12px;
        background: #086dd6;
        font-size: 12px;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
    }

</style>
