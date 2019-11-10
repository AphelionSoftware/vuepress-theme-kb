<template>
  <div id="base-list-layout">
    <div>
      <v-card  v-for="(page, idx) in pages" :key="idx">
        <v-card-title class="v-title">
          <NavLink :link="page.path">
            <NavigationIcon/>
            {{ page.title }}
          </NavLink>
        </v-card-title>
        <v-card-subtitle v-if="page.frontmatter.author">
          <span class="ui-post-author">{{ page.frontmatter.author }}</span>
          <div class="ui-post-date" v-if="page.frontmatter.date">
          <ClockIcon/>
          <span>{{ resolvePostDate(page.frontmatter.date) }}</span>
        </div>
        </v-card-subtitle>
        <v-card-text>{{ page.frontmatter.summary || page.summary }}</v-card-text>
      </v-card>
     
    </div>
    
    <component v-if="$pagination.length > 1 && paginationComponent" :is="paginationComponent"></component>
  </div>
</template>

<script>
  /* global THEME_BLOG_PAGINATION_COMPONENT */
  
  import Vue from 'vue'
  import { NavigationIcon, ClockIcon } from 'vue-feather-icons'
  import { Pagination, SimplePagination } from '@vuepress/plugin-blog/lib/client/components'
  import {VCard} from 'Vuetify'
  
  export default {
    components: { NavigationIcon, ClockIcon, VCard },

    data() {
      return {
        paginationComponent: null
      }
    },
    
    created() {
      this.paginationComponent = this.getPaginationComponent()
    },
    
    computed: {
      pages() {
        return this.$pagination.pages
      },
    },
    
    methods: {
      getPaginationComponent() {
        const n = THEME_BLOG_PAGINATION_COMPONENT
        if (n === 'Pagination') {
          return Pagination
        }

        if (n === 'SimplePagination') {
          return SimplePagination
        }

        return Vue.component(n) || Pagination
      },

      resolvePostDate(date) {
        return new Date(date.replace(/\-/g, "/").trim()).toDateString()
      }
    }
  }
</script>

<style lang="stylus">
  .v-title
    svg
      margin-right 5px
      width 14px
      height 14px

  .common-layout
    .content-wrapper
      padding-bottom 80px
  
  .ui-post
    padding-bottom 25px
    margin-bottom 25px
    border-bottom 1px solid #f1f1f1
    
    &:last-child
      border-bottom 0px
      margin-bottom 0px
    
    p
      margin 0
  
  .ui-post-title
    font-family PT Serif, Serif
    font-size 28px
    border-bottom 0
    
    a
      cursor pointer
      color #000
      transition all .2s
      text-decoration none
      
      &:hover
        text-decoration underline
  
  .ui-post-summary
    font-size 14px
    margin-bottom 15px
    color rgba(0, 0, 0, 0.54)
    font-weight 200
  
  .ui-post-author
    display flex
    align-items center
    font-size 12px
    line-height 12px
    color rgba(0, 0, 0, 0.84)
    margin-bottom 3px
    font-weight 400
    
  
  .ui-post-date
    display flex
    align-items center
    font-size 12px
    color rgba(0, 0, 0, 0.54)
    font-weight 200
    
    svg
      margin-right 5px
      width 14px
      height 14px
</style>

<style src="prismjs/themes/prism-okaidia.css"></style>


