<template>
  <ul class="header__links">
    <li class="header__link--wrapper header__link--wrapper-btn" v-for="headerLink in headerLinks" :key="headerLink.name">
      <a :href="headerLink.link.url" :target="headerLink.link.target_blank ? '_blank' : '_self'" class="header__link header__link--fill" :data-text-to-copy="headerLink.text_to_copy && headerLink.text_to_copy.length > 0 ? headerLink.text_to_copy : null" @click="event => headerLink.text_to_copy && copyToClipboard(event)">
        {{ headerLink.link.title }}
      </a>
      <div v-if="headerLink.text_to_copy && headerLink.text_to_copy.length > 0" class="header__link--copied">{{ getGlobalThis().languageLocale === 'fr' ? 'Adresse mail copiée' : 'Email address copied' }}</div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import "@/assets/css/components/statics/__header-links.scss";
</style>

<script>
import SvgIcon from '@/components/SvgIcon.vue';
import { getGlobalThis } from '@vue/shared';

export default {
  name: 'HeaderLinks',
  components: { SvgIcon },
  computed: {
    headerLinks() {
      return this.$store.state.options.data?.attributes?.header_link;
    },
  },
  methods: {
    getGlobalThis,
    copyToClipboard( event ) {
      if ( window.matchMedia( '(max-width: 961px)' ).matches ) {
        return;
      }

      event.preventDefault();

      const clickedButton = event.currentTarget;
      const copiedVisibleClass = 'header__link--copied-visible';
      if ( clickedButton.nextSibling.classList.contains( copiedVisibleClass ) ) {
        return;
      }

      clickedButton.nextSibling.classList.add( copiedVisibleClass );
      gsap.delayedCall( 4.3, () => {
        clickedButton.nextSibling.classList.remove( copiedVisibleClass );
      } );
      const textToCopy = event.target.dataset.textToCopy;
      navigator.clipboard.writeText( textToCopy );
    },
  },
};
</script>
