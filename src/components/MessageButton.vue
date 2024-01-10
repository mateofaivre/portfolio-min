<template>
  <div class="message__content message__content--button">
    <router-link :to="link.url" :class="className ? `message__content--button-link ${className}` : 'message__content--button-link'" :target="link.target_blank ? '_blank' : '_self'">
      {{ link.title }}
    </router-link>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/css/components/__message-button.scss";
</style>

<script>

export default {
  name:  "MessageButton",
  props: {
    link:      {
      type:     Object,
      required: true
    },
    className: {
      type:     String,
      required: false
    }
  }
}
</script>
