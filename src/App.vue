<template>
  <Header/>

  <router-view v-slot="{ Component, route }">
    <transition name="scale" mode="out-in">
      <component :is="Component" :key="route.fullPath"/>
    </transition>
  </router-view>

</template>

<script>
import Header from '@/components/statics/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  created() {
    document.documentElement.lang = this.$lang;
    this.$store.commit( 'setLoading', true );
    this.$store.dispatch( 'fetchOptions' );
  },
  watch: {
    '$lang'( newLocale ) {
      document.documentElement.lang = newLocale;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/main.scss";
</style>
