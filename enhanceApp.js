
//import Vuetify from "vuetify";
import "./node_modules/vuetify/dist/vuetify.min.css";
import Vuetify from "vuetify"
// import vuetify from './plugins/vuetify';
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Vuetify);
  options.vuetify = new Vuetify({})
  // options.vuetify = Vuetify
};