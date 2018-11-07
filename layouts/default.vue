<template>
  <div class="page">
    <app-header></app-header>
    <transition name="page" @after-enter="afterPageEnter()">
      <nuxt/>
    </transition>
    <app-footer></app-footer>
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
  methods: {
    afterPageEnter() {
      this.$store.commit('closeMenu');
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
</style>

