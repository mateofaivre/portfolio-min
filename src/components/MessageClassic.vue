<template>
  <div class="message message--classic">
    <ProfilePic v-if="profilePic" v-bind:profilePic="profilePic"/>
    <div class="message__inner">
      <div class="message__content" v-html="message.text"></div>
      <MessageButton :link="message.cta" v-if="message.cta"></MessageButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/css/components/__message.scss";
</style>

<script>
import ProfilePic from '@/components/ProfilePic.vue';
import MessageButton from '@/components/MessageButton.vue';

export default {
  name: 'MessageClassic',
  components: {
    MessageButton,
    ProfilePic,
  },
  computed: {
    profilePic() {
      return this.$store.state.options.data?.attributes?.profile_pic?.data?.attributes;
    },
  },
  props: [ 'message' ],
};
</script>
