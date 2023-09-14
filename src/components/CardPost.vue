<template>
    <div class="card-post">
        <div class="card-post__background"></div>
        <div class="card-post__tint"></div>
        <div class="card-post__content">
            <div class="card-post__content-type">
                <img src="@/assets/icons/apps/icon-vk.png" />
            </div>
            <div class="card-post__content-container">
                <div class="card-post__content-container-img">
                    <div class="card-post__content-container-img-container">
                        <img src="@/assets/images/vue-groop.jpg" />
                    </div>
                </div>
                <div class="card-post__content-container-title">
                    {{post.id}}
                </div>
                <div class="card-post__content-container-discript">
                    Программирование
                </div>
            </div>
            <div class="card-post__content-attachments">
                <div class="card-post__content-attachments-type">
                    <img src="@/assets/icons/attachments/link.svg" /> 1
                </div>
                <div class="card-post__content-attachments-type">
                    <img src="@/assets/icons/attachments/document.svg" /> 1
                </div>
                <div class="card-post__content-attachments-type">
                    <img src="@/assets/icons/attachments/video.svg" /> 5
                </div>
            </div>
            <div class="card-post__content-tags">
                <TagApp :tag="{name: 'Docker', color: '#'}"/>
                <TagApp :tag="{name: 'Git', color: '#'}" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import { Post } from "@/types/Post";
    defineProps<{post: Post}>();
</script>
<style lang="scss" scoped>
    .card-post {
        position: relative;
        display: block;
        height: $main-card-height;
        border-radius: 16px;

        // box-shadow: 0 5px 17px 6px rgb(8 10 11 / 39%), 0 0 10px 3px rgb(227 133 236 / 25%);

        &:before {
            content: "";
            position: absolute; 
            z-index: -1; 

            // transform: translate(10px, 8px);
            border-radius: 16px; 
            background: linear-gradient(
                135deg,
                rgb(0 74 173 / 100%) 0%,
                rgb(227 133 236 / 100%) 72%
            );
            inset: -2px;
            filter: blur(5px);
            opacity: 0.3;
        }

        &__background {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: $main-card-height;
            border-radius: 16px;
            background: rgb(37 37 37);
        }

        &__tint {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            width: 100%;
            height: $main-card-height;
            border-radius: 16px;
            background: rgb(0 74 173);
            background: linear-gradient(
                135deg,
                rgb(0 74 173 / 100%) 0%,
                rgb(227 133 236 / 100%) 72%
            );
            opacity: 0.4;
        }

        &__content {
            position: relative;
            z-index: 3;
            display: flex;
            flex-flow: column nowrap;
            height: $main-card-height;
            padding: 20px;
            border-radius: 16px;

            &-type {
                & img {
                    width: 25px;
                    height: 25px;
                }
            }

            &-container {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-flow: column nowrap;
                flex-grow: 1;

                &-img {
                    &-container {
                        overflow: hidden;
                        width: 80px;
                        height: 80px;
                        border-radius: 40px;
                        box-shadow: 0 5px 17px 6px rgb(8 10 11 / 39%);

                        & img {
                            width: 80px;
                            height: 80px;
                        }
                    }
                }

                &-title {
                    padding: 10px 0;
                    text-align: center;
                    font-size: 16px;
                    font-weight: bold;
                }

                &-discript {
                    text-align: center;
                    font-size: 14px;
                    color: #c7c7c7;
                }
            }

            &-attachments {
                display: flex;
                justify-content: center;
                padding: 30px 0;

                &-type {
                    display: flex;
                    align-items: center;
                    padding: 0 8px;
                    font-size: 16px;
                    font-weight: bold;

                    & img {
                        width: 18px;
                        height: 18px;
                        margin-right: 4px;
                    }
                }
            }

            // &-tags {
            // }
        }
    }

</style>
