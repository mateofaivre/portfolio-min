<template>
  <main class="home">
    <About v-bind:about="about" v-if="about" v-add-arrow-link/>
    <section class="messages rich__text">
      <div class="message__item" v-for="message in messages" :key="message.id" v-add-arrow-link>
        <MessagesMultiples v-if="message.title" v-bind:message="message"/>
        <MessageClassic v-else v-bind:message="message"/>
      </div>
    </section>
    <Footer v-if="footer"/>
  </main>
</template>

<style scoped lang="scss">
@import "@/assets/css/views/__home-view.scss";
</style>

<script>
import MessagesMultiples from '@/components/MessagesMultiples.vue';
import MessageClassic from '@/components/MessageClassic.vue';
import About from '@/components/About.vue';
import Footer from '@/components/statics/Footer.vue';

export default {
  name: 'Home',
  components: {
    Footer,
    About,
    MessageClassic,
    MessagesMultiples,
  },
  computed: {
    messages() {
      return this.$store.state.home.data?.attributes.messages;
    },
    about() {
      return this.$store.state.home.data?.attributes.about;
    },
    footer() {
      return this.$store.state.options.data?.attributes?.footer;
    },
  },
  created() {
    this.$store.dispatch( 'fetchHome' );
  },
};
</script>
