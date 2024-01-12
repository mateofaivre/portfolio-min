<template>
  <router-link :to="link.url" :class="className ? `btn btn--white message__content message__content--button ${className}` : 'btn btn--white message__content message__content--button'" :target="link.target_blank ? '_blank' : '_self'">
    {{ link.title }}
  </router-link>
</template>

<style scoped lang="scss">
@import "@/assets/css/components/__message-button.scss";
</style>

<script>
export default {
  name: 'MessageButton',
  props: {
    link: {
      type: Object,
      required: true,
    },
    className: {
      type: String,
      required: false,
    },
  },
};
</script>
