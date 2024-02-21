<template>
  <nav class="header__nav">
    <ul class="header__nav--list">
      <template v-for="route in $router.options.routes">
        <li class="header__nav--item" v-if="!route.ignoreInMenu">
          <router-link :key="route.path" :to="route.path" class="header__nav--link header__link--fill">{{ route.menuName }}</router-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@import "@/assets/css/components/statics/__header-nav.scss";
</style>

<script>

export default {
  name: "HeaderNav"
}
</script>
