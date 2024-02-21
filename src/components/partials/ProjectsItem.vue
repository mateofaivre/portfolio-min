<script setup>
import Image from "@/components/partials/Image.vue";
</script>

<template>
  <router-link class="projects__item--link" :to="{ name: 'Project', params: { slug: slugify(projectItem.name) }}" :key="$route.fullPath" :data-types="projectItem.project_types ? JSON.stringify(slugify(projectItem.project_types, true)) : null">
    <Image :image="projectItemIcon" v-if="projectItemIcon" />
    <span class="projects__item--name" v-if="projectItem.name">{{ projectItem.name }}</span>
  </router-link>
</template>

<style scoped lang="scss">
@import "@/assets/css/components/partials/__projects-item.scss";
</style>

<script>
import { slugify } from '@/assets/js/utils/Helpers';


export default {
  name: "ProjectsItem",
  data() {
    return {
      strapiUrl: import.meta.env.VITE_STRAPI_URL
    };
  },
  methods:  {
    slugify
  },
  props:    {
    projectItem: Object
  },
  computed: {
    projectItemIcon() {
      if ( !this.projectItem.icon.data ) {
        return null;
      }
      return {
        src:    this.projectItem.icon.data.attributes.url,
        class:  'projects__item--icon',
        alt:    this.projectItem.icon.data.attributes.alternativeText,
        width:  this.projectItem.icon.data.attributes.width,
        height: this.projectItem.icon.data.attributes.height,
        cover:  true,
        lazyBg: true
      }
    }
  }
}
</script>
