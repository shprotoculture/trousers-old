<template>
    <div class="site-navigation">
        <div class="nav-wrap">
            <app-banner></app-banner>
            <header class="header">
                <div class="header__content">
                    <button class="toggle-menu" :class="{'toggle-menu_active': menuIsActive}" type="button" @click.prevent="toggleMenu">
                        <span class="toggle-menu__line toggle-menu__line-f"></span>
                        <span class="toggle-menu__line toggle-menu__line-s"></span>
                        <span class="toggle-menu__line toggle-menu__line-t"></span>
                    </button>
                    <div class="navigation_d">
                        <ul class="navigation_d__list">
                            <li class="navigation_d__list-item">
                                <nuxt-link class="navigation_d__list-item-link" to="/">Home</nuxt-link>
                            </li>
                            <li class="navigation_d__list-item">
                                <nuxt-link class="navigation_d__list-item-link" to="/trousers">Trousers</nuxt-link>
                            </li>
                            <li class="navigation_d__list-item">
                                <nuxt-link class="navigation_d__list-item-link" to="/about">About</nuxt-link>
                            </li>
                            <li class="navigation_d__list-item">
                                <nuxt-link class="navigation_d__list-item-link" to="/contact-us">Contact Us</nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <nuxt-link to="/" class="header__logo">Trousers.</nuxt-link>
                    <div class="header__cart">
                        <nuxt-link class="header__cart-link" to="/cart"><span class="header__cart-link-text">Cart </span><i class="fal fa-shopping-bag header__cart-link-icon" :class="{'header__cart-link-icon_hasProducts': productInCart}"></i></nuxt-link>
                    </div>
                </div>
            </header>
        </div>
        <transition name="mobile-menu">
            <div class="mobile-menu" v-show="menuIsActive" :style="{'padding-top': placeholderHeight + 'px'}">
                <div class="mobile-menu__content">
                    <div class="navigation_m">
                        <ul class="navigation_m__list">
                            <li class="navigation_m__list-item">
                                        <nuxt-link class="navigation_m__list-item-link" to="/">Home</nuxt-link>
                            </li>
                            <li class="navigation_m__list-item">
                                <nuxt-link class="navigation_m__list-item-link" to="/trousers">Trousers</nuxt-link>
                            </li>
                            <li class="navigation_m__list-item">
                                <nuxt-link class="navigation_m__list-item-link" to="/about">About</nuxt-link>
                            </li>
                            <li class="navigation_m__list-item">
                                <nuxt-link class="navigation_m__list-item-link" to="/contact-us">Contact Us</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </transition>
        <div class="placeholder" :style="{'height': placeholderHeight + 'px'}"></div>
    </div>
</template>

<script>
import appBanner from '~/components/_header/topBanner';
export default {
    components: {
        appBanner
    },
    data() {
        return {
            menuAnimationActive: false, 
        }
    },
    computed: {
        menuIsActive() {
            return this.$store.state.header.menuIsActive;
        },
        topBannerIsActive() {
            return this.$store.state.header.topBannerIsActive;
        },
        placeholderHeight() {
            return this.$store.state.header.topBannerIsActive ? 79 : 49;
        },
        productInCart() {
            return this.$store.state.header.productInCart;
        }
    },
    methods: {
        toggleMenu() {
            if(!this.menuAnimationActive) {
                this.$store.commit('toggleMenu');
            }
        }
    },
    mounted() {
        window.addEventListener('resize', () => {
            if(window.innerWidth >= 991) {
                this.$store.commit('closeMenu');
            }
        });
    }
    
}
</script>

<style lang="scss">
    .nav-wrap {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 2999;
    }

    .placeholder {
        position: relative;
        z-index: 1;
        width: 100%;
        transition: .2s linear;
    }

    .header {
        background: #fff;
        border-bottom: 1px solid #f2f2f2;
        position: relative;
        z-index: 2999;
        &__content {
            position: relative;
            width: 90%;
            height: 48px;
            margin: 0 auto;
            padding: 0 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        &__logo {
            display: block;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            text-transform: uppercase;
            font-size: 18px;
            font-weight: 400;
            letter-spacing: 1px;
        }
        &__cart {
            &-link {
                &-text {
                    font-size: 13px;
                    font-weight: 400;
                }
                &-icon {
                    font-size: 15px;
                    font-weight: 300;
                    display: inline-block;
                    position: relative;
                    &_hasProducts {
                        &:after {
                            content: '';
                            position: absolute;
                            width: 5px;
                            height: 5px;
                            border-radius: 100%;
                            background: #41be8e;
                            top: 7px;
                            left: 4px;
                        }
                    }
                }
            }
        }

        @media screen and (max-width: 575px) {
            &__content {
                width: 100%;
            }
        }
    }

    .navigation_d {
        &__list {
            display: flex;
            &-item {
                margin-right: 30px;
                &:last-child {
                    margin-right: 0;
                }
                &-link {
                    font-size: 13px;
                    font-weight: 400;
                    position: relative;
                    &:after {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: -5px;
                        width: 100%;
                        height: 1px;
                        background: #000;
                        transition: .15s linear;
                        transform-origin: center;
                        transform: scaleX(0);
                    }
                    &:hover {
                        &:after {
                            transform: scaleX(1);
                        }
                    }
                }
            }
        }

        @media screen and (max-width: 991px) {
            display: none;
        }
    }











    .toggle-menu {
        width: 48px;
        height: 48px;
        border: none;
        background: none;
        margin-left: -15px;
        position: relative;
        display: none;
        &__line {
            position: absolute;
            width: 18px;
            height: 2px;
            background: #000;
            top: 50%;
            left: 15px;
            transition: .2s .2s margin ease, .2s 0s transform ease;
            &-f {
                margin-top: -6px;
            }
            &-s {
                margin-top: -1px;
            }
            &-t {
                margin-top: 4px;
            }
        }
        &_active {
            .toggle-menu__line {
                margin-top: -1px;
                transition: .2s 0s margin ease, .2s .2s transform ease;
                &-f, &-s {
                    transform: rotate(45deg);
                }
                &-t {
                    transform: rotate(-45deg);
                }
            }
        }
        @media screen and (max-width: 991px) {
            display: block;
        }
    }

    .mobile-menu {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1999;
        background: #fff;
        transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
        overflow-x: hidden;
        overflow-y: auto;
        &__content {
            width: 90%;
            margin: 0 auto;
            padding: 30px 15px;
        }
        &-enter {
            transform: translate3d(-100%, 0, 0);
        }
        &-leave-to {
            transform: translate3d(100%, 0, 0);
        }
        @media screen and (max-width: 575px){
            &__content {
                width: 100%;
            }
        }
    }

    .navigation_m {
        &__list {
            &-item {
                margin-bottom: 10px;
                &-link {
                    display: inline-block;
                    font-size: 22px;
                    font-weight: 400;
                    padding-bottom: 5px;
                    position: relative;
                    &:after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background: #000;
                        transition: .15s linear;
                        transform-origin: left;
                        transform: scaleX(0);
                    }
                    &:hover {
                        &:after {
                            transform: scaleX(1);
                        }
                    }
                }
            }
        }
    }
</style>
