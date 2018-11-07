<template>
    <div class="cart">
        <section class="section section-cart-products">
            <div class="container">
                <div class="section__content">
                    <div class="cart__empty" v-if="!products">
                        <div class="cart__empty-title">Your cart is empty</div>
                        <nuxt-link class="cart__empty-link" to="/trousers">Back to customizer <i class="fal fa-arrow-right"></i></nuxt-link>
                    </div>
                    <div class="cart__content" v-else>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="cart__shipping">
                                    <div class="cart__content-title">Shipping address</div>
                                    <div class="cart__content-body">
                                        <div class="cart__shipping-form">
                                            <div class="row">
                                                <div class="col-md-6 col_padding-around">
                                                    <div class="input">
                                                        <input type="text" placeholder="First Name*">
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col_padding-around">
                                                    <div class="input">
                                                        <input type="text" placeholder="Last Name*">
                                                    </div>
                                                </div>
                                                <div class="col-12 col_padding-around">
                                                    <div class="input">
                                                        <input type="text" placeholder="Email*">
                                                    </div>
                                                </div>
                                                <div class="col-12 col_padding-around">
                                                    <div class="input">
                                                        <input type="text" placeholder="Phone Number*">
                                                    </div>
                                                </div>
                                                <div class="col-12 col_padding-around">
                                                    <div class="input">
                                                        <input type="text" placeholder="Address*">
                                                    </div>
                                                </div>
                                                <div class="col-12 col_padding-around">
                                                    <div class="input">
                                                        <input type="text" placeholder="Apartment, suite, etc.*">
                                                    </div>
                                                </div>
                                                <div class="col-12 col_padding-around">
                                                    <div class="input">
                                                        <input type="text" placeholder="City*">
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col_padding-around">
                                                    <div class="select">
                                                        <p class="select__text">Country</p>
                                                        <span class="select__icon">
                                                            <i class="fal fa-chevron-down"></i>
                                                        </span>
                                                        <select>
                                                            <option>Russia</option>
                                                            <option>Russia</option>
                                                            <option>Russia</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col_padding-around">
                                                    <div class="input">
                                                        <input type="text" placeholder="Zip code*">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cart__shipping-submit">
                                                <div class="checkbox">
                                                    <input type="checkbox" id="shipping-agree">
                                                    <label for="shipping-agree">Agree policy</label>
                                                </div>
                                                <button class="button button_transparent">Order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 order-first order-md-last">
                                <div class="cart__products">
                                    <div class="cart__content-title">Products in cart</div>
                                    <div class="cart__content-body">
                                        <div class="cart__product-item" v-for="(product, i) in products" :key="i">
                                            <div class="cart__product-item-top">
                                                <div class="row">
                                                    <div class="col-lg-3 col-4 col_padding-around">
                                                        <img :src="/images/ + product.texture.image" alt="" class="cart__product-item-image">
                                                    </div>
                                                    <div class="col-lg-9 col-8 col_padding-around">
                                                        <div class="cart__product-item-details">
                                                            <span class="cart__product-item-name">{{product.texture.name}}</span>
                                                            <button class="cart__product-item-remove" @click.prevent="removeItem(i)"><i class="fal fa-times"></i></button>
                                                        </div>
                                                        <div class="cart__product-item-price">{{product.texture.price + ' EURO'}}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cart__product-dimensions">
                                                <h4 class="cart__product-dimensions-title">Dimensions</h4>
                                                <ul class="dimensions__list">
                                                    <li class="dimensions__list-item">
                                                        <span class="dimensions__list-item-content">Outseam</span>
                                                        <span class="dimensions__list-item-content">{{product.dimensions.outseam}}</span>
                                                        <div class="dimensions__list-item-line"></div>
                                                    </li>
                                                    <li class="dimensions__list-item">
                                                        <span class="dimensions__list-item-content">Waist</span>
                                                        <span class="dimensions__list-item-content">{{product.dimensions.waist}}</span>
                                                        <div class="dimensions__list-item-line"></div>
                                                    </li>
                                                    <li class="dimensions__list-item">
                                                        <span class="dimensions__list-item-content">Hips</span>
                                                        <span class="dimensions__list-item-content">{{product.dimensions.hips}}</span>
                                                        <div class="dimensions__list-item-line"></div>
                                                    </li>
                                                    <li class="dimensions__list-item">
                                                        <span class="dimensions__list-item-content">Crotch</span>
                                                        <span class="dimensions__list-item-content">{{product.dimensions.crotch}}</span>
                                                        <div class="dimensions__list-item-line"></div>
                                                    </li>
                                                    <li class="dimensions__list-item">
                                                        <span class="dimensions__list-item-content">Thigh</span>
                                                        <span class="dimensions__list-item-content">{{product.dimensions.thigh}}</span>
                                                        <div class="dimensions__list-item-line"></div>
                                                    </li>
                                                    <li class="dimensions__list-item">
                                                        <span class="dimensions__list-item-content">Knee</span>
                                                        <span class="dimensions__list-item-content">{{product.dimensions.knee}}</span>
                                                        <div class="dimensions__list-item-line"></div>
                                                    </li>
                                                </ul>
                                                <nuxt-link to="/trousers" class="dimensions__edit">Edit</nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cart__content-sums">
                                        <div class="cart__summary cart__content-sums-item">
                                            <span>Summary price: </span> {{getSumPrice}} EURO
                                        </div>
                                        <div class="cart__VAT cart__content-sums-item">
                                            <span>VAT: </span> {{getVAT}} EURO
                                        </div>
                                        <div class="cart__summary cart__content-sums-item">
                                            <span>Shipping: </span> {{getShipping}} EURO
                                        </div>
                                        <div class="cart__summary cart__content-sums-item">
                                            <span>Total: </span> {{getTotalPrice}} EURO
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: this.$cookies.get('products')
        }
    },
    computed: {
        
        getSumPrice() {
            let products = this.products;
            let price = null;
            for(let k in products) {
                price += products[k].texture.price;
            }

            return price;
        },
        getVAT() {
            return this.getSumPrice * 0.20;
        },
        getShipping() {
            return 10;
        },
        getTotalPrice(){
            return this.getSumPrice + this.getVAT + this.getShipping;
        }
    },
    methods: {
        removeItem(i) {
            let products = this.products;
            products.splice(i, 1);
            this.$cookies.set('products', products, 7);
            if(products.length <= 0) {
                this.$cookies.remove('products');
                this.products = null;
                this.$store.commit('clearCart');
            }
        }
    }
}
</script>

<style lang="scss">
    .cart {
        min-height: calc(100vh - 265px);
        &__empty {
            text-align: center;
            &-title {
                font-size: 24px;
                font-weight: 400;
                margin-bottom: 10px;
            }
            &-link {
                font-size: 18px;
                color: #676767;
            }
        }
        &__content {
            &-title {
                font-size: 24px;
                font-weight: 300;
                margin-bottom: 15px;
            }
            &-sums {
                &-item {
                    margin-bottom: 10px;
                    font-size: 14px;
                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }
        }
        &__shipping {
            &-submit {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
        &__products {
            padding-left: 60px;
        }
        &__product {
            &-item {
                padding-bottom: 30px;
                margin-bottom: 30px;
                border-bottom: 1px solid #f2f2f2;
                &-name {
                    font-size: 18px;
                    font-weight: 400;
                    margin-bottom: 5px;
                    display: inline-block;
                    padding-right: 5px;
                }
                &-price {
                    font-size: 13px;
                    font-weight: 400;
                }
                &-details {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }
                &-remove {
                    background: none;
                    border: none;
                    font-size: 20px;
                }
            }
            &-dimensions {
                &-title {
                    font-size: 18px;
                    font-weight: 400;
                    margin-bottom: 5px;
                }
            }
        }

        @media screen and (max-width: 991px) {
            &__products {
                padding-left: 0;
                padding-bottom: 60px;
            }
        }
    }

    .dimensions {
        &__list {
            margin-bottom: 15px;
            &-item {
                position: relative;
                display: flex;
                justify-content: space-between;
                margin-left: -5px;
                margin-right: -5px;
                margin-bottom: 10px;
                &:last-child {
                    margin-bottom: 0;
                }
                &-content {
                    display: inline-block;
                    background: #fff;
                    position: relative;
                    z-index: 2;
                    padding: 0 5px;
                    font-size: 13px;
                }
                &-line {
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    background: url(/images/border-btm.svg) repeat-x;
                    background-size: contain;
                    z-index: 1;
                    bottom: 3px;
                    left: 0;
                }
            }
        }
        &__edit {
            display: inline-block;
            padding: 5px 25px;
            border: 1px solid #000;
            color: #000;
            font-size: 13px;
            font-weight: 600;
            transition: .15s;
            &:hover {
                background: #000;
                color: #fff;
            }
        }
    }
</style>
