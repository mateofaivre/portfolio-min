<template>
  <footer class="footer" v-if="footer">
    <div class="footer--inner">
      <div class="footer--thanks" v-if="footer.thanks" v-html="footer.thanks"></div>
      <div class="footer--signature">
        <Sign/>
      </div>
      <div class="footer--copyright">
        <div class="footer--copyright-top" v-if="footer.author">
          &copy; {{ new Date().getFullYear() }} {{ footer.author }}
        </div>
        <div class="footer--copyright-bottom" v-if="footer.rights">{{ footer.rights }}</div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import "@/assets/css/components/statics/__footer.scss";
</style>

<script>
import Sign from "@/assets/svg/sign.svg";

export default {
  name: 'Footer',
  computed: {
    footer() {
      return this.$store.state.options.data?.attributes?.footer;
    },
  },
  components: {
    Sign
  }
};
</script>
