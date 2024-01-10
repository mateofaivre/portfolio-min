<template>
  <header id="header" class="header">
    <HeaderNav/>
    <HeaderButtons/>
  </header>
</template>

<style scoped lang="scss">
@import "@/assets/css/components/statics/__header.scss";
</style>

<script>
import HeaderNav from "@/components/statics/HeaderNav.vue";
import HeaderButtons from "@/components/statics/HeaderButtons.vue";


export default {
  name:       "Header",
  components: {
    HeaderButtons,
    HeaderNav
  }
}
</script>
