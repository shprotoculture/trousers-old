<template>
    <div class="trousers">
        <section class="section section-customizer">
            <div class="container">
                <div class="section__content">
                    <div class="section__heading">
                        <h4 class="section__heading-title section__heading-title_center">Customizer</h4>
                    </div>
                    <div class="section__body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="customizer__images">
                                    <img src="/images/outseam.svg" alt="">
                                </div>
                                <div class="customizer__instruction">
                                    <p class="text_default">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <form @submit.prevent="checkForm">
                                <div class="customizer__options">
                                    <div class="customizer__samples">
                                        <div class="customizer__error">{{textureObject.errorText}}</div>
                                        <div class="row row_m-5">
                                            <div class="col-3 col_padding-around col_p-5" v-for="(texture, i) in textureGroup" :key="i">
                                                <div class="customizer__sample-tile">
                                                    <div class="customizer__sample-tile-input">
                                                        <input :checked="$route.query.texture == i" class="radio" type="radio" name="texture_sample" :id="texture.name" :value="texture.name">
                                                        <label :for="texture.name">
                                                            <img :src="'/images/' + texture.img" :alt="texture.name">
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="customizer__product-details">
                                        <h4>Product details:</h4>
                                        <p class="text_default">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                    <div class="customizer__error">{{selectObject.errorText}}</div>
                                    <div class="customizer__table">
                                        <div class="customizer__table-row" v-for="(select, i) in selectGroup" :key="i">
                                            <div class="customizer__table-col customizer__table-col-name">{{select.name}}</div>
                                            <div class="customizer__table-col customizer__table-col-select">
                                                <div class="select">
                                                    <p class="select__text">{{select.selectTitle}}</p>
                                                    <span class="select__icon">
                                                        <i class="fal fa-chevron-down"></i>
                                                    </span>
                                                    <select v-model="select.selectTitle" @change="setDimensions(select.field, $event, i)">
                                                        <option :value="option + ' ' +select.unit" v-for="(option, k) in select.options" :key="k">{{option + ' ' +select.unit}}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="customizer__submit">
                                        <button class="button button_transparent" type="submit">Add to cart</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <transition name="customizer__done">
                <div class="customizer__done" v-if="done" @click="done = false">
                    <div class="customizer__done-content" @click.stop="">
                        <h4 class="customizer__done-content-text">Product added into cart</h4>
                        <nuxt-link class="button button_solid_black" to="/cart">Go into cart</nuxt-link>
                        <button class="customizer__done-close" @click.prevent="done = false"><i class="fal fa-times"></i></button>
                    </div>
                </div>
            </transition>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            done: false,
            textureGroup: [
                {
                    name: 'Supa Dupa Trousers-1',
                    img: 's01.jpg',
                    price: 150
                },
                {
                    name: 'Supa Dupa Trousers-2',
                    img: 's02.jpg',
                    price: 160
                },
                {
                    name: 'Supa Dupa Trousers-3',
                    img: 's03.jpg',
                    price: 170
                },
                {
                    name: 'Supa Dupa Trousers-4',
                    img: 's04.jpg',
                    price: 180
                },
                {
                    name: 'Supa Dupa Trousers-5',
                    img: 's04.jpg',
                    price: 190
                },
                {
                    name: 'Supa Dupa Trousers-6',
                    img: 's03.jpg',
                    price: 200
                },
                {
                    name: 'Supa Dupa Trousers-7',
                    img: 's02.jpg',
                    price: 210
                },
                {
                    name: 'Supa Dupa Trousers-8',
                    img: 's01.jpg',
                    price: 220
                },
            ],
            selectGroup: [
                {   
                    name: 'Outseam',
                    field: 'outseam',
                    selectTitle: 'Choose...',
                    options: ['150', '200', '250'],
                    unit: 'cm',
                    selected: null
                },
                {   
                    name: 'Waist',
                    field: 'waist',
                    selectTitle: 'Choose...',
                    options: ['150', '200', '250'],
                    unit: 'cm',
                    selected: null
                },
                {   
                    name: 'Hips',
                    field: 'hips',
                    selectTitle: 'Choose...',
                    options: ['150', '200', '250'],
                    unit: 'cm',
                    selected: null
                },
                {   
                    name: 'Crotch',
                    field: 'crotch',
                    selectTitle: 'Choose...',
                    options: ['150', '200', '250'],
                    unit: 'cm',
                    selected: null
                },
                {   
                    name: 'Thigh',
                    field: 'thigh',
                    selectTitle: 'Choose...',
                    options: ['150', '200', '250'],
                    unit: 'cm',
                    selected: null
                },
                {   
                    name: 'Knee',
                    field: 'knee',
                    selectTitle: 'Choose...',
                    options: ['150', '200', '250'],
                    unit: 'cm',
                    selected: null
                },
            ],
            texturePrice: null,
            textureSelected: null,
            textureObject: {
                errorStatus: false,
                errorText: ''
            },
            selectObject: {
                errorStatus: false,
                errorText: ''
            },
            singleProduct: {
                texture: {
                    name: null,
                    price: null,
                    image: null
                },
                dimensions: {
                    outseam: null,
                    waist: null,
                    hips: null,
                    crotch: null,
                    thigh: null,
                    knee: null
                }
            },
            products: this.$cookies.get('products') || []
        }
    },
    methods: {
        setTexture(name, price, image) {
            this.singleProduct.texture.name = name;
            this.singleProduct.texture.price = price;
            this.singleProduct.texture.image = image;
            this.textureSelected = name;
        },
        setDimensions(dimensionName, e, i) {
            this.singleProduct.dimensions[dimensionName] = e.target.value;
            this.selectGroup[i].selected = true;
        },
        checkForm(event) {
            this.textureObject.errorText = '';
            this.selectObject.errorText = '';
            this.textureObject.errorStatus = false;
            this.selectObject.errorStatus = false;
            
            let textures = event.target.querySelectorAll('.radio');

            for(let i in textures) {
                if(textures[i].checked) {
                    this.textureObject.errorStatus = false;
                    this.textureObject.errorText = '';
                    this.setTexture(this.textureGroup[i].name, this.textureGroup[i].price, this.textureGroup[i].img);
                    break;
                } else {
                    this.textureObject.errorStatus = true;
                    this.textureObject.errorText = 'Выберите ткань'
                }
            }

            for(let k in this.selectGroup) {
                if(!this.selectGroup[k].selected) {
                    this.selectObject.errorStatus = true;
                    this.selectObject.errorText = 'Заполните все поля';
                    break;
                }
            }

            if(this.textureObject.errorStatus || this.selectObject.errorStatus) {
                return false;
            } else {
                this.products.push(this.singleProduct);
                let productArrJSON = JSON.stringify(this.products);
                this.$cookies.set('products', productArrJSON, 7);
                this.$store.commit('cartHasProduct');
                this.singleProduct = {
                texture: {
                        name: null,
                        price: null,
                        image: null
                    },
                    dimensions: {
                        outseam: null,
                        waist: null,
                        hips: null,
                        crotch: null,
                        thigh: null,
                        knee: null
                    }
                };
                
                this.resetForm(event);
                this.done = true;
            }
        },
        resetForm(event) {
            for(let i in this.selectGroup) {
                this.selectGroup[i].selectTitle = 'Choose...';
                this.selectGroup[i].selected = null;
            }
            event.target.reset();
        }
    },
    
}
</script>

<style lang="scss">
    .customizer {
        &__instruction {
            padding-top: 60px;
            text-align: center;
        }
        &__options {
            padding-left: 60px;
        }
        &__samples {
            margin-bottom: 30px;
        }
        &__sample-tile-input {
            position: relative;
            input {
                position: absolute;
                opacity: 0;
                z-index: -1;
                &:checked {
                    & + label {
                        &:after {
                            border-color: #3fd884;
                        }
                        &:before {
                            content: '\f00c';
                            font-family: 'Font Awesome 5 Pro';
                            position: absolute;
                            right: 10px;
                            top: 10px;
                            width: 15px;
                            height: 15px;
                            border-radius: 100%;
                            background: #3fd884;
                            color: #fff;
                            text-align: center;
                            line-height: 15px;
                            font-size: 10px;
                        }
                    }
                }
            }
            label {
                display: block;
                position: relative;
                cursor: pointer;
                &:after {
                    content: '';
                    position: absolute;
                    display: block;
                    top: 0px;
                    left: 0px;
                    right: 0px;
                    bottom: 0px;
                    border: 3px solid transparent;
                }
            }
        }
        &__product-details {
            margin-bottom: 30px;
            h4 {
                font-size: 18px;
                font-weight: 400;
                margin-bottom: 5px;
            }
        }
        &__table {
            border: 2px solid #f2f2f2;
            &-row {
                display: flex;
                justify-content: space-between;
                align-items: stretch;
                border-bottom: 2px solid #f2f2f2;
                transition: .15s;
                &:last-child {
                    border-bottom: none;
                }
                &:hover {
                    .customizer__table-col-name {
                        background: #f2f2f2;
                    }
                    
                }
            }
            &-col {
                flex: 0 0 50%;
                .select {
                    border: none;
                }
                &-name {
                    padding: 15px;
                    font-size: 13px;
                    font-weight: 400;
                }
                &-select {
                    border-left: 2px solid #f2f2f2;
                }
            }
        }
        &__submit {
            margin-top: 30px;
            text-align: center;
        }
        &__error {
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 5px;
            color: red;
        }
        &__done {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(#fff, 0.95);
            z-index: 3999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 30px;
            transition: .25s ease;
            &-content {
                padding: 25px;
                background: #fff;
                box-shadow: 0px 3px 7px rgba(#000, 0.2);
                text-align: center;
                position: relative;
                transition: .45s ease;
                transform: scale(0);
                animation: doneEnter .4s ease forwards;
                &-text {
                    margin-bottom: 15px;
                    font-size: 18px;
                    font-weight: 400;
                }
            }
            &-close {
                position: absolute;
                background: none;
                border: none;
                font-size: 18px;
                top: -20px;
                right: -20px;
            }
            &-enter {
                opacity: 0;
            }
            &-leave-to {
                opacity: 0;
                .customizer__done-content {
                    animation: doneLeave .4s ease forwards;
                }
            }
        }

        @media screen and (max-width: 991px) {
            &__instruction {
                padding-top: 30px;
            }
            &__options {
                padding-left: 0;
                padding-top: 30px;
            }
        }
    }

    @keyframes doneEnter {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes doneLeave {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(0);
        }
    }
</style>
