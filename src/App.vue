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
    this.$store.commit( 'setLoading', true );
    this.$store.dispatch( 'fetchOptions' );
  },
};
</script>

<style lang="scss">
@import "@/assets/css/main.scss";
</style>
