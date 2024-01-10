<template>
  <div class="profile__pic">
    <Image :image="{
      src: profilePic.formats.thumbnail.url,
      class: 'profile__pic--img',
      alt: profilePic.alternativeText,
      width: profilePic.formats.thumbnail.width,
      height: profilePic.formats.thumbnail.height,
      cover: true,
      lazyBg: true
    }"/>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/css/components/__profile-pic.scss";
</style>

<script>
import Image from '@/components/partials/Image.vue';

export default {
  name: 'ProfilePic',
  data() {
    return {
      strapiUrl: import.meta.env.VITE_STRAPI_URL,
    };
  },
  props: [ 'profilePic' ],
  components: {
    Image,
  },
};
</script>
