<template>
  <div class="loader" :class="{ 'loader--hidden': isFullyLoaded }">
    <div class="loader__inner"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
  computed: {
    ...mapState( [ 'isLoading' ] ),
    isFullyLoaded() {
      return !this.isLoading;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/components/__loader.scss";
</style>
