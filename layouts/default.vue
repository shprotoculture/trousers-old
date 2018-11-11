<template>
  <div class="page">
    <app-header></app-header>
    <transition name="page" @after-enter="afterPageEnter()">
      <nuxt/>
    </transition>
    <app-footer></app-footer>
    <div class="login" v-if="!loginHidden">
      <div class="login__inner">
        <form @submit.prevent="onSubmit">
          <div class="input">
            <input type="text" v-model.lazy="pass">
            <button type="submit" class="button button_transparent">Enter</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import appHeader from '~/components/_header/header.vue';
import appFooter from '~/components/_footer/footer.vue';
export default {
  components: {
    appHeader,
    appFooter,
  },
  data () {
    return {
      pass: '',
      confirm: 'asd123',
      loginHidden: false
    }
  },
  methods: {
    afterPageEnter() {
      this.$store.commit('closeMenu');
    },
    onSubmit () {
      
      if (this.pass === this.confirm) {
        this.loginHidden = true;
        console.log(this.pass)
      } else {
        return false;
      }
    }
  },
  scrollToTop: true
}
</script>

<style lang="scss">
@import '~/assets/scss/import.scss';

.page-enter {
  opacity: 0;
}
.page-enter-active {
  transition: 1s ease opacity, cubic-bezier(.16,1,.29,.99) .667s transform;
}
.page-leave {}
.page-leave-to {
  opacity: 1;
}
.login {
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  &__inner {
    max-width: 500px;
    .button {
      margin-top: 30px;
    }
  }
}
</style>

