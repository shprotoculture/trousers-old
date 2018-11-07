<template>
    <no-ssr>
        <slick class="order__slider" :options="slickOptions">
            <div class="order__slider-item">
                <img src="/images/04.png" alt="">
            </div>
            <div class="order__slider-item">
                <img src="/images/04.png" alt="">
            </div>
            <div class="order__slider-item">
                <img src="/images/04.png" alt="">
            </div>
        </slick>
    </no-ssr>
</template>

<script>
export default {
    data () {
        return {
            slickOptions : {
                prevArrow: `<button type="button" class="slick-prev order__slider-control order__slider-control-prev"><i class="fal fa-arrow-left"></i></button>`,
                nextArrow: `<button type="button" class="slick-next order__slider-control order__slider-control-next"><i class="fal fa-arrow-right"></i></button>`
            }
        }
    }
}
</script>

<style lang="scss">
    .order__slider {
        box-shadow: 0px 0px 35px rgba(#000, 0.05);
        position: relative;
        &-item {
            background: #fff;
            vertical-align: middle;
        }
        &-control {
            position: absolute;
            width: 30px;
            height: 30px;
            background: none;
            border: none;
            top: 100%;
            margin-top: 10px;
            font-size: 20px;
            z-index: 2;
            &-prev {
                left: 0;
            }
            &-next {
                left: 40px;
            }
        }
        @media screen and (max-width: 767px) {
            box-shadow: none;
            &-item {
                background: #f2f2f2;
            }
        }
    }
</style>
