<template>
  <button type="button" class="button__copy" :class="link.className">
    {{ link.title }}
<!--    <Copy/>-->
  </button>
</template>

<style scoped lang="scss">
@import "@/assets/css/components/partials/__button-copy.scss";
</style>

<script>
import Copy from "@/assets/svg/copy.svg";


export default {
  name:       "ButtonCopy",
  components: {
    Copy,
  },
  props:      {
    link: {
      type:     Object,
      required: true
    }
  },
}
</script>
