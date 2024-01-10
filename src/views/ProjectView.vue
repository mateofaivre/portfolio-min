<template>
  <main class="project" v-if="projectDetail">
    <div class="project__nav">
      <LinkArrow :link="{url: '/projects', title: 'Projects', className: 'project__nav--back' }"/>
      <div class="project__nav--others">
        <LinkArrow :link="{url: '/projects/' + slugify(prevProject.name), title: 'Prev', className: 'project__nav--prev', chevron: {direction: 'left'} }"/>
        <LinkArrow :link="{url: '/projects/' + slugify(nextProject.name), title: 'Next', className: 'project__nav--next', chevron: {direction: 'right'} }"/>
      </div>
    </div>

    <div class="project__carousel--wrapper" v-if="projectDetailMedias && projectDetailMedias[0].mediaType !== 'video' && projectDetailMedias.length > 1" :data-nav-color="projectDetail.carousel_pagination_color">
      <carousel class="project__carousel">
        <slide class="project__carousel--item" :key="projectDetailMedia.name" v-for="projectDetailMedia in projectDetailMedias">
          <Image :image="projectDetailMedia"/>
        </slide>

        <template #addons class="project__carousel--nav">
          <navigation/>
          <pagination/>
        </template>
      </carousel>
    </div>


    <div v-else-if="projectDetailMedias || projectDetailEmbed" class="project__media--wrapper">
      <Image v-if="projectDetailMedias && projectDetailMedias[0].mediaType !== 'video'" :image="projectDetailMedias[0]"/>
      <vueVimeoPlayer v-if="projectDetailEmbed" ref="player" video-id="900934617" class="project__media--embed" :player-width="1920" :player-height="1080" :options='{autoplay: true, muted: true, dnt: true, loop: true, title: false, pip: false }'/>
    </div>


    <div class="project__description">
      <h3 class="project__title" v-if="projectDetail.name">{{ projectDetail.name }}</h3>
      <div class="project__text rich__text" v-add-arrow-link v-if="projectDetail.content" v-html="projectDetail.content"></div>
    </div>

    <LinkExternal v-if="projectDetail.link" :link="projectDetail.link" :className="'project__cta'"/>

    <ul class="project__tags" v-if="projectDetail.project_tags">
      <li class="project__tag" v-for="projectTag in projectDetail.project_tags" :key="projectTag">{{ projectTag }}</li>
    </ul>

  </main>
</template>

<style scoped lang="scss">
@import "@/assets/css/views/__project-view.scss";
@import "@/assets/css/components/partials/__project-carousel.scss";
</style>


<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { vueVimeoPlayer } from 'vue-vimeo-player';

import Arrow from '@/assets/svg/arrow.svg';
import LinkExternal from '@/components/partials/LinkExternal.vue';
import LinkArrow from '@/components/partials/LinkArrow.vue';
import Image from '@/components/partials/Image.vue';
import { slugify } from '@/assets/js/utils/Helpers';

export default {
  name: 'ProjectView',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Image,
    LinkArrow,
    LinkExternal,
    Arrow,
    vueVimeoPlayer,
  },
  data() {
    return {
      strapiUrl: import.meta.env.VITE_STRAPI_URL,
    };
  },
  created() {
    this.$store.dispatch( 'fetchProject', this.$route.params.slug );
  },
  methods: {
    slugify,
  },
  computed: {
    projectDetail() {
      if ( this.$store.state.project && this.$store.state.project.project && typeof ( this.$store.state.project.project.link ) != 'undefined' ) {
        return this.$store.state.project.project;
      } else {
        return null;
      }
    },
    projectDetailMedias() {
      if ( this.projectDetail && this.projectDetail.medias.data ) {
        const medias = [];

        this.projectDetail.medias.data.forEach( media => {
          const mediaType = media.attributes.mime.split( '/' )[ 0 ];

          medias.push( {
            name: media.attributes.name,
            src: media.attributes.url,
            srcPlaceholder: media.attributes.formats?.thumbnail.url,
            class: 'project__media',
            alt: media.attributes.alternativeText,
            width: media.attributes.width,
            height: media.attributes.height,
            cover: mediaType !== 'video' ?? true,
            mediaType: mediaType,
            lazyBg: true,
          } );
        } );

        return medias;
      } else {
        return null;
      }
    },
    projectDetailEmbed() {
      if ( this.projectDetail && this.projectDetail.vimeo_embed_id ) {
        return this.projectDetail.vimeo_embed_id;
      } else {
        return null;
      }
    },
    prevProject() {
      return this.$store.state.project?.prevProject;
    },

    nextProject() {
      return this.$store.state.project?.nextProject;
    },

  },
};
</script>
