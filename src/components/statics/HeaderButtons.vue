<template>
  <ul class="header__buttons">
    <li class="header__button" v-for="headerIcon in headerButtons" :key="headerIcon.name">
      <a :href="headerIcon.link.url" :target="headerIcon.link.target_blank ? '_blank' : '_self'" :aria-label="headerIcon.link.title" class="header__button--link">
        <SvgIcon :name="headerIcon.name" :className="'header__button--link-svg'"/>
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import "@/assets/css/components/statics/__header-buttons.scss";
</style>

<script>
import SvgIcon from "@/components/SvgIcon.vue";


export default {
  name:       "HeaderButtons",
  components: { SvgIcon },
  computed:   {
    headerButtons() {
      return this.$store.state.options.data?.attributes?.header_buttons;
    }
  }
}
</script>
