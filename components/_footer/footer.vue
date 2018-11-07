<template>
    <footer class="footer">
        <div class="footer__content">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-12 col_padding-around">
                        <nuxt-link to="/" class="footer__logo">Trousers.</nuxt-link>
                    </div>
                    <div class="col-md-3 col-6 col_padding-around">
                        <div class="footer-nav">
                            <ul class="footer-nav__list">
                                <li class="footer-nav__list-item">
                                    <nuxt-link class="footer-nav__list-item-link" to="/about#our-product">Our Product</nuxt-link>
                                </li>
                                <li class="footer-nav__list-item">
                                    <nuxt-link class="footer-nav__list-item-link" to="/about#delivery">Delivery</nuxt-link>
                                </li>
                                <li class="footer-nav__list-item">
                                    <nuxt-link class="footer-nav__list-item-link" to="/about#faq">FAQ</nuxt-link>
                                </li>
                                <li class="footer-nav__list-item">
                                    <nuxt-link class="footer-nav__list-item-link" to="/about#alterations">Alterations</nuxt-link>
                                </li>
                                <li class="footer-nav__list-item">
                                    <nuxt-link class="footer-nav__list-item-link" to="/about#returns">Returns</nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-6 col_padding-around">
                        <div class="footer-nav">
                            <ul class="footer-nav__list">
                                <li class="footer-nav__list-item">
                                    <nuxt-link class="footer-nav__list-item-link" to="/">Home</nuxt-link>
                                </li>
                                <li class="footer-nav__list-item">
                                    <nuxt-link class="footer-nav__list-item-link" to="/trousers">Trousers</nuxt-link>
                                </li>
                                <li class="footer-nav__list-item">
                                    <nuxt-link class="footer-nav__list-item-link" to="/about">About</nuxt-link>
                                </li>
                                <li class="footer-nav__list-item">
                                    <nuxt-link class="footer-nav__list-item-link" to="/contact-us">Contact Us</nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="col-md-3 col-6 col_padding-around">
                        <div class="footer-nav">
                            <ul class="footer-nav__list">
                                <li class="footer-nav__list-item">
                                    <nuxt-link class="footer-nav__list-item-link" to="#">Terms</nuxt-link>
                                </li>
                                <li class="footer-nav__list-item">
                                    <nuxt-link class="footer-nav__list-item-link" to="#">Privacy</nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .footer {
        background: #000;
        position: relative;
        z-index: 999;
        &__content {
            padding: 45px 0;
        }
        &__logo {
            display: block;
            text-transform: uppercase;
            font-size: 18px;
            font-weight: 400;
            letter-spacing: 1px;
            color: #fff;
        }
        &-nav {
            &__list {
                &-item {
                    margin-bottom: 10px;
                    &-link {
                        color: #fff;
                        display: inline-block;
                        transition: .15s linear;
                        &:hover {
                            padding-left: 5px;
                        }
                    }
                }
            }
        }

        @media screen and (max-width: 575px) {
            &__content {
                padding: 15px 0;
            }
        }
    }
</style>
