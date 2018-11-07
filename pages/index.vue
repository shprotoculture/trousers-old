<template>
  <div class="home">
    <section class="section section-intro">
      <div class="intro">
        <picture class="intro__image-bg">
            <source media="(max-width:767px)" srcset="/images/02-s.jpg">
            <img src="/images/02.jpg">
        </picture>
        <div class="intro__content">
          <h1 class="intro__content-title">Supa Dupa Trousers</h1>
        </div>
      </div>
    </section>
    <section class="section section-about">
      <div class="container">
        <div class="section__content">
          <div class="about row">
            <div class="col-lg-6">
              <div class="section__heading">
                <h4 class="section__heading-title">It is a long <br> established fact that <br> a reader will be distracted.</h4>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about__content">
                <p class="about__content-text text_default">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                <p class="about__content-text text_default">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-order">
      <div class="container">
        <div class="section__content">
          <div class="order row">
            <div class="col-md-6">
              <order-slider></order-slider>
            </div>
            <div class="col-md-6">
              <div class="order__content">
                <div class="order__content-name">Supa Dupa Trousers Navy</div>
                <div class="order__content-price">150 EURO</div>
                <div class="order__content-text">
                  <p class="text_default">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
                <nuxt-link to="/trousers" class="button button_transparent">Order Now</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-samples">
      <div class="container">
        <div class="section__content">
          <div class="section__heading">
            <h4 class="section__heading-title">Samples</h4>
          </div>
          <div class="section__body">
            <div class="row">
              <div class="col-md-3 col-6 col_padding-around" v-for="(texture, i) in textureGroup" :key="i">
                <div class="sample-tile">
                  <nuxt-link :to="'/trousers?texture=' + i" class="sample-tile__link">
                    <img :src="'/images/' + texture.img" :alt="texture.name" class="sample-tile__image">
                    <div class="sample-tile__label">{{texture.name}}</div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-social">
      <div class="container">
        <div class="section__content">
          <div class="social">
            <div class="social__content">
              <h4 class="social__title">Social Media</h4>
              <ul class="social__list">
                <li class="social__list-item">
                  <a href="#" class="social__list-item-link" target="_blank"><i class="fab fa-instagram"></i></a>
                </li>
                <li class="social__list-item">
                  <a href="#" class="social__list-item-link" target="_blank"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li class="social__list-item">
                  <a href="#" class="social__list-item-link" target="_blank"><i class="fab fa-pinterest-p"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import orderSlider from '~/components/_order/orderSlider.vue';
export default {
  components: {
    orderSlider
  },
  data() {
    return {
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
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';
  .intro {
    position: relative;
    &__image-bg {
      position: relative;
      z-index: 1;
    }
    &__content {
      position: absolute;
      z-index: 2;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      &-title {
        border: 5px solid #fff;
        color: #fff;
        font-size: 36px;
        font-weight: 400;
        padding: 35px;
      }
    }

    @media screen and (max-width: 575px) {
      &__content {
        &-title {
          padding: 15px;
          font-size: 24px;
          border: 3px solid #fff;
        }
      }
    }
  }

  .about {
    &__content {
      padding-left: 60px;
      &-text {
        margin-bottom: 30px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    @media screen and (max-width: 991px) {
      &__content {
        padding: 30px 0 0;
      }
    }
  }

  .section-order {
    background: url(/images/bg.jpg) repeat-y center;
    background-size: 100%;
    
    @media screen and (max-width: 767px) {
      background: #fff;
    }
  }

  .order {
    &__content {
      padding-left: 60px;
      &-name {
        font-size: 24px;
        font-weight: 300;
        margin-bottom: 5px;
      }
      &-price {
        font-size: 14px;
        margin-bottom: 60px;
      }
      &-text {
        margin-bottom: 60px;
      }
    }

    @media screen and (max-width: 991px) {
      &__content {
        padding-left: 0;
        &-price {
          margin-bottom: 30px;
        }
        &-text {
          margin-bottom: 30px;
        }
      }
    }

    @media screen and (max-width: 767px) {
      &__content {
        padding-top: 60px;
      }
    }
  }

  .sample-tile {
    &__link {
      display: block;
      position: relative;
      overflow: hidden;
      &:hover {
        .sample-tile__image {
          transform: scale(1.05);
        }
      }
    }
    &__image {
      position: relative;
      z-index: 1;
      transition: .25s ease;
    }
    &__label {
      padding: 15px;
      position: absolute;
      bottom: 15px;
      left: 0;
      background: rgba(#fff, 0.8);
      z-index: 2;
      font-size: 13px;
      font-weight: 400;
    }

    @media screen and (max-width: 575px) {
      &__label {
        padding: 10px;
      }
    }
  }

  .section-benefits {
    background: #f2f2f2;
  }

  .benefit-tile {
    text-align: center;
    &__image {
      img {
        max-width: 100px;
      }
    }
    &__text {
      font-size: 14px;
      font-weight: 400;
    }

    @media screen and (max-width: 575px) {
      &__text {
        font-size: 13px;
      }
    }
  }

  .section-social {
    background: #f2f2f2;
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    &__content {
      text-align: center;
    }
    &__title {
      font-size: 36px;
      font-weight: 300;
      letter-spacing: -1px;
    }
    &__list {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 30px;
      &-item {
        margin: 0 15px;
        &-link {
          display: block;
          width: 45px;
          height: 45px;
          color: #000;
          border-radius: 100%;
          line-height: 43px;
          text-align: center;
          font-size: 20px;
          border: 2px solid #000;
          transition: .15s linear;
          &:hover {
            background: #000;
            color: #fff;
          }
        }
      }
    }
    
    @media screen and (max-width: 575px) {
      &__title {
        font-size: 24px;
      }
    }
  }
</style>

