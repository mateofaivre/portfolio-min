<template>
  <figure class="image--wrapper" :class="image.cover ? image.class + ' image--wrapper-cover' : image.class" :style="'--width: ' + image.width + '; --height: ' + image.height + ';' ">
    <v-lazy-image
        use-picture
        :src="strapiUrl + image.src"
        v-bind="image.srcPlaceholder ? { 'src-placeholder': strapiUrl + image.srcPlaceholder } : {}"
        :class="image.class + '--img' + (image.lazyBg ? ' image--img-bg' : '')"
        class="image--img"
        :alt="image.alt ? image.alt : null"
        :width="image.width"
        :height="image.height"
    />
  </figure>
</template>

<style scoped lang="scss">
@import "@/assets/css/components/partials/__image.scss";
</style>

<script>
import VLazyImage from "v-lazy-image";

export default {
  name:       "Image",
  components: {
    VLazyImage
  },
  data() {
    return {
      strapiUrl: import.meta.env.VITE_STRAPI_URL
    };
  },
  props: {
    image: Object
  }
}
</script>
