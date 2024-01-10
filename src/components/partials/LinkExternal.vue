<template>
  <router-link v-if="useRouterLink" :to="link.url" :class="'link__external ' +className">
    {{ link.title }}
    <Arrow/>
  </router-link>
  <a v-else :href="link.url" :target="link.target_blank ? '_blank' : '_self'" :class="'link__external ' + className">
    {{ link.title }}
    <Arrow/>
  </a>
</template>

<style lang="scss">
@import "@/assets/css/components/partials/__link-external.scss";
</style>

<script>
import Arrow from "@/assets/svg/arrow.svg";


export default {
  name:       "LinkExternal",
  components: { Arrow },
  props:      {
    link:          Object,
    className:     String,
    useRouterLink: Boolean
  }
}
</script>
