<template>
  <div class="about">
    <div class="about--title">{{ about.title }}</div>
    <div class="about--presentation">
      <div class="about--presentation-text" v-html="about.description"></div>
      <LinkExternal :link="about.link" :className="'about--presentation-link'"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/css/components/__about.scss";
</style>

<script>
import LinkExternal from "@/components/partials/LinkExternal.vue";


export default {
  name:       "About",
  components: { LinkExternal },
  props:      [ 'about' ]
}
</script>
