<template>
  <video :class="video.class" :src="video.src" preload="none"></video>
</template>

<style scoped lang="scss">
@import "@/assets/css/components/partials/__video.scss";
</style>

<script>
export default {
  name:       "Video",
  components: {},
  data() {
    return {
      strapiUrl: import.meta.env.VITE_STRAPI_URL
    };
  },
  props: {
    video: Object
  }
}
</script>
