<template>
    <div class="home">
        <HeaderApp />
        <div class="home__content">
            <CardPost v-for="item in items" :key="item.id" :post="item"/>
        </div>
        <div class="home__control">
            <el-button 
                type="warning" 
                round
                color="#2d2f3f"
                @click="runQuery()" 
                v-if="loading || isLoad" :loading="loading">
                Загрузить еще ...
            </el-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import { ref, reactive, computed } from 'vue'
    import { useQuery } from '@vue/apollo-composable'
    import { postsGet } from '@/graphql/querys'
    import { Post } from "@/types/Post"

    const items = reactive<Post[]>([]);

    const total = ref<number>(0)
    const loading = ref<boolean>(false)
    const variables = ref({
        first: 5,
        page: 1
    })

    const isLoad = computed(() => variables.value.page < (total.value / variables.value.first))

    const { onResult, onError } = useQuery( postsGet, variables )


    onResult(queryResult => {
        loading.value = queryResult.loading
        if(!queryResult.loading) {
            total.value = queryResult.data.posts.paginatorInfo.total
            items.push(...queryResult.data.posts.data)
        }
    })

    onError(queryResult => {
        console.error(queryResult)
    })

    function runQuery () {
        variables.value.page++
    }
</script>
<style lang="scss" scoped>
    .home {
        padding-bottom: 30px;

        &__content {
            display: grid;
            padding: 16px;
            grid-template-columns: repeat(
                auto-fit,
                minmax($main-card-min-width, $main-card-max-width)
            );
            gap: 16px 16px;
        }

        &__control {
            text-align: center;
        }
    }

</style>
