<template>
    <transition name="top-banner">
        <div class="top-banner" v-show="topBannerIsActive">
            <p class="top-banner__text">Sale 50% Off</p>
            <button class="top-banner__close" @click.prevent="closeTopBanner"><i class="fal fa-times"></i></button>
        </div>
    </transition>
</template>

<script>
export default {
    computed: {
        topBannerIsActive() {
            return this.$store.state.header.topBannerIsActive;
        }
    },
    methods: {
        closeTopBanner() {
            this.$store.commit('closeTopBanner');
        }
    }
}
</script>

<style lang="scss">
    .top-banner {
        background: #000;
        position: relative;
        height: 30px;
        width: 100%;
        line-height: 30px;
        overflow: hidden;
        z-index: 2999;
        transition: .2s linear;
        &__text {
            font-size: 16px;
            font-weight: 300;
            color: #fff;
            text-align: center;
        }
        &__close {
            position: absolute;
            width: 30px;
            height: 30px;
            top: 0;
            right: 0;
            border: none;
            background: none;
            color: #fff;
            font-size: 18px;
        }
        &-leave-to {
            height: 0;
        }
    }
</style>
