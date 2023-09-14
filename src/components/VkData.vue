<template>
    <div class="vk-data">
        <div class="vk-data__title">Данные VK</div>
        <div class="vk-data__content">
            <div class="vk-data__content-block">
                <el-input v-model="keys.id" placeholder="ID приложения" />
            </div>
            <div class="vk-data__content-block">
                <el-input v-model="keys.secretKey" placeholder="Защищённый ключ" />
            </div>
            <div class="vk-data__content-block">
                <el-input v-model="keys.serviceKey" placeholder="Сервисный ключ доступа" />
            </div>
        </div>
        <div class="vk-data__control">
            <div class="vk-data__control-block">
                <el-button-group class="ml-4">
                    <el-button type="primary">Сохранить</el-button>
                    <el-button type="primary" class="icon">
                        <el-icon><Delete /></el-icon>
                    </el-button>
                </el-button-group>
            </div>
            <div class="vk-data__control-block">
                <el-button type="primary">Авторизоваться</el-button>
            </div>
        </div>
        
    </div>
</template>
<script lang="ts" setup>
    import { ref } from 'vue'

    const keys = ref({
        id: '',
        secretKey: '',
        serviceKey: ''
    })
</script>
<style lang="scss" scoped>
    .vk-data {
        &__title {
            padding: 20px 0;
            font-size: 22;
            font-weight: bold;
        }

        &__content {
            &-block {
                margin-bottom: 10px;
            }
        }

        &__control {
            &-block {
                display: flex;
                margin-bottom: 10px;
            }

            &-block :deep(.el-button){
                flex-grow: 1;
            }

            &-block :deep(.el-button.icon){
                flex-grow: 0;
            }

            &-block :deep(.el-button-group){
                display: flex;
                flex-grow: 1;
            }
        }
    }
</style>
