<template>
  <div class="messages__multiples">
    <MessageTitle :use_pp="false" v-bind:title="message.title"/>
    <MessageClassic :message="message"/>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/css/components/__messages-multiples.scss";
</style>

<script>
import MessageTitle from "@/components/MessageTitle.vue";
import MessageClassic from "@/components/MessageClassic.vue";


export default {
  name:       "MessagesMultiples",
  components: {
    MessageTitle,
    MessageClassic
  },
  props:      [ 'message' ]
}
</script>
