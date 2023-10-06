<template>
    <div class="tg-data">
        <div class="tg-data__title">Данные Telegram</div>
        <div class="tg-data__content">
            <div class="tg-data__content-block">
                <el-input v-model="keys.id" placeholder="ID приложения" />
            </div>
            <div class="tg-data__content-block">
                <el-input v-model="keys.secretKey" placeholder="Hash ключ" />
            </div>
            <div class="tg-data__content-block">
                <el-input v-model="keys.serviceKey" placeholder="Телефон" />
            </div>
            
            <el-alert 
                title="При наличии двухфакторной авторизации введите пароль" 
                :closable="false" 
                effect="dark"
                type="warning" 
            />
            <div class="tg-data__content-block">
                <el-input v-model="keys.serviceKey" placeholder="Код" />
            </div>
            <div class="tg-data__content-block">
                <el-input v-model="keys.serviceKey" placeholder="Пароль" type="password" show-password/>
            </div>
        </div>
        <div class="tg-data__control">
            <div class="tg-data__control-block">
                <el-button-group class="ml-4">
                    <el-button type="primary">
                        <span v-if="false">Сохранить и отправить код</span>
                        <span v-else>Завешить авторизацию</span>
                    </el-button>
                    <el-button type="primary" class="icon">
                        <el-icon><Delete /></el-icon>
                    </el-button>
                </el-button-group>
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
    .tg-data {
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
