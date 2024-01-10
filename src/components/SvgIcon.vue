<template>
  <component :is="icon" :class="'svg-icon ' + className"/>
</template>

<style scoped lang="scss">
//@import "@/assets/css/components/__svg-icon.scss";
</style>

<script>
import { defineAsyncComponent } from 'vue';


export default {
  props: {
    name: {
      type:     String,
      required: true
    },
    className: {
      type:    String,
      default: ''
    }
  },

  data() {
    return {
      icons: import.meta.glob( `/src/assets/svg/*.svg` )
    }
  },

  computed: {
    icon() {
      return defineAsyncComponent( () => this.icons[ `/src/assets/svg/${this.name}.svg` ]() );
    }
  }
}
</script>
