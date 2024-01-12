<template>
  <header id="header" class="header">
    <HeaderNav/>
    <HeaderLinks/>
  </header>
</template>

<style lang="scss">
@import "@/assets/css/components/statics/__header.scss";
</style>

<script>
import HeaderNav from "@/components/statics/HeaderNav.vue";
import HeaderLinks from "@/components/statics/HeaderLinks.vue";


export default {
  name:       "Header",
  components: {
    HeaderLinks,
    HeaderNav
  }
}
</script>
