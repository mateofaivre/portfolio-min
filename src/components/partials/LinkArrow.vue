<template>
  <router-link :to="link.url" class="link__arrow" :class="setClass()">
    <Arrow v-if="!link.chevron"/>
    <Chevron v-else/>
    {{ link.title }}
  </router-link>
</template>

<style scoped lang="scss">
@import "@/assets/css/components/partials/__link-arrow.scss";
</style>

<script>
import Arrow from "@/assets/svg/arrow.svg";
import Chevron from "@/assets/svg/chevron.svg";


export default {
  name:       "LinkArrow",
  components: {
    Arrow,
    Chevron
  },
  props:      {
    link: {
      type:     Object,
      required: true
    }
  },
  methods: {
    setClass() {
      const linkClass = this.link.className ? ' ' + this.link.className + ' ' : '';
      const linkChevronClass = this.link.chevron ? ` link__arrow--chevron link__arrow--chevron-${this.link.chevron.direction} ` : '';
      return linkClass + linkChevronClass;
    }
  }
}
</script>
