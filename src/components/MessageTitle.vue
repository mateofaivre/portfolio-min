<script setup>

</script>

<template>
  <div class="message message--title">
    <ProfilePic v-if="use_pp === true"/>
    <div class="message__content" v-html="title"></div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/css/components/__message.scss";
</style>

<script>
import ProfilePic from "@/components/ProfilePic.vue";


export default {
  name:       "MessageTitle",
  components: {
    ProfilePic
  },
  props:      [ 'use_pp', 'title' ]
}
</script>
