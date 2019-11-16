import Vue from 'vue'
Vue.component("demo-component", () => import("C:\\Git\\vuepress-theme-kb\\example\\.vuepress\\components\\demo-component"))
Vue.component("OtherComponent", () => import("C:\\Git\\vuepress-theme-kb\\example\\.vuepress\\components\\OtherComponent"))
Vue.component("Foo-Bar", () => import("C:\\Git\\vuepress-theme-kb\\example\\.vuepress\\components\\Foo\\Bar"))
Vue.component("BaseListLayout", () => import("C:\\Git\\vuepress-theme-kb\\global-components\\BaseListLayout"))
Vue.component("BlogTag", () => import("C:\\Git\\vuepress-theme-kb\\global-components\\BlogTag"))
Vue.component("NavLink", () => import("C:\\Git\\vuepress-theme-kb\\global-components\\NavLink"))
Vue.component("BlogTags", () => import("C:\\Git\\vuepress-theme-kb\\global-components\\BlogTags"))


export default {}