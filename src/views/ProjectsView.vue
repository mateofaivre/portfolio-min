<template>
  <main class="projects">

    <div class="projects__items--wrapper">
      <div class="projects__items--top">
        <LinkArrow :link="{url: '/', title: getNavLabels.home, className: 'projects__items--back' }"/>

        <div class="projects__items--filter-btns" v-if="projectItemsTypes">
          <button
              class="projects__item--filter-btn"
              :class="{ 'projects__item--filter-btn_active': activeType === projectItemsType.name }"
              :data-type="projectItemsType.name" v-for="projectItemsType in projectItemsTypes"
              :key="projectItemsType.name"
              :aria-label="projectItemsType.label"
              @click="filterItems"
          >
            {{ projectItemsType.label }}
          </button>
        </div>
      </div>
      <div class="projects__items" v-if="projectsItems">
        <div class="projects__item" v-for="projectItem in projectsItems">
          <ProjectsItem :projectItem="projectItem"/>
        </div>
      </div>

    </div>
  </main>
</template>

<style scoped lang="scss">
@import "@/assets/css/views/__projects-view.scss";
</style>


<script>
import ProjectsItem from '@/components/partials/ProjectsItem.vue';
import { slugify } from '@/assets/js/utils/Helpers';
import Arrow from '@/assets/svg/arrow.svg';
import LinkArrow from '@/components/partials/LinkArrow.vue';

const itemHiddenClass = 'projects__item--hidden';
const loaderVisibleClass = 'projects__items--loader_visible';

export default {
  name: 'ProjectsView',
  components: {
    LinkArrow,
    Arrow,
    ProjectsItem,
  },
  data() {
    return {
      activeType: '',
    };
  },
  methods: {
    setGridHeight() {
      const projectsGrid = this.$el.querySelector( '.projects__items' );
      const gridHeight = projectsGrid.getBoundingClientRect().height;
      projectsGrid.style.setProperty( '--grid-height', `${ gridHeight }px` );
    },

    sortArray( array ) {
      array.sort( ( a, b ) => {
        if ( a.name < b.name ) {
          return -1;
        }
        if ( a.name > b.name ) {
          return 1;
        }
        return 0;
      } );

      return array;
    },

    toggleLoader() {
      this.$el.querySelector( '.projects__items' ).classList.toggle( loaderVisibleClass );
    },

    filterProjectItems( clickedItemType ) {

      this.toggleLoader();

      gsap.delayedCall(
          0.3, () => {
            this.$el.querySelectorAll( '.projects__item' ).forEach( item => {
              if ( clickedItemType ) {
                const itemTypes = JSON.parse( item.querySelector( '.projects__item--link' ).getAttribute( 'data-types' ) );
                const isItemDisplayed = itemTypes.includes( clickedItemType );
                item.classList.toggle( itemHiddenClass, ! isItemDisplayed );
              } else {
                item.classList.remove( itemHiddenClass );
              }
            } );
          },
      );

      gsap.delayedCall(
          0.4, () => {
            this.toggleLoader();
          },
      );

    },

    filterItems( event ) {
      const clickedBtn = event.currentTarget;
      const clickedItemType = clickedBtn.getAttribute( 'data-type' );

      if ( this.activeType === clickedItemType ) {
        this.activeType = '';
      } else {
        this.activeType = clickedItemType;
      }

      this.filterProjectItems( this.activeType );
    },
  },
  created() {
    this.$store.dispatch( 'fetchProjects' );
  },

  updated() {
    this.setGridHeight();
  },

  computed: {
    getNavLabels() {
      return {
        home: this.$lang === 'fr' ? 'Accueil' : 'Home',
      };
    },

    projectsItems() {
      return this.$store.state.projects.data?.attributes.projects_item;
    },
    projectItemsTypes() {
      const projectItemsTypes = [];
      this.$store.state.projects.data?.attributes.projects_item.forEach( ( projectItem ) => {
        if ( projectItem.project_types !== null ) {
          projectItem.project_types.forEach( ( projectType ) => {
            const projectTypeObj = {
              name: slugify( projectType ),
              label: projectType,
            };
            if ( ! projectItemsTypes.find( obj => obj.name === projectTypeObj.name ) ) {
              projectItemsTypes.push( projectTypeObj );
            }

          } );
        }
      } );

      this.sortArray( projectItemsTypes );

      return projectItemsTypes;
    },
    projectsTypesNames() {
      return this.projectItemsTypes.map( objet => objet.name );
    },
  },
};
</script>
