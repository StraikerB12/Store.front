<template>
    <div class="vk-data">
        <div class="vk-data__title">Данные VK</div>
        <div class="vk-data__content">
            <div class="vk-data__content-block">
                <el-input 
                    v-model="dataKeys.VK.id" 
                    :disabled="dataKeys.VK.isEnterForm" 
                    placeholder="ID приложения" 
                />
            </div>
            <div class="vk-data__content-block">
                <el-input 
                    v-model="dataKeys.VK.secretKey" 
                    :disabled="dataKeys.VK.isEnterForm" 
                    placeholder="Защищённый ключ" 
                />
            </div>
            <div class="vk-data__content-block">
                <el-input 
                    v-model="dataKeys.VK.serviceKey" 
                    :disabled="dataKeys.VK.isEnterForm" 
                    placeholder="Сервисный ключ доступа" 
                />
            </div>
        </div>
        <div class="vk-data__control">
            <div class="vk-data__control-block">
                <el-button-group class="ml-4">
                    <el-button type="primary" @click="auth">Сохранить и авторизоваться</el-button>
                    <el-button type="primary" class="icon">
                        <el-icon><Delete /></el-icon>
                    </el-button>
                </el-button-group>
            </div>
        </div>
        
    </div>
</template>
<script lang="ts" setup>
    import { dataKeys } from '@/store/keysData'
    import { useAddDataKeys } from '@/api/addDataKeys'

    async function auth(){
        const data = await useAddDataKeys("VK", JSON.stringify(dataKeys.VK))
        console.log(data)
    }
</script>
<style lang="scss" scoped>
    .vk-data {
        &__title {
            padding-bottom: 10px;
            font-size: 14px;
            font-weight: bold;
        }

        &__content {
            &-block {
                margin: 10px 0;
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
