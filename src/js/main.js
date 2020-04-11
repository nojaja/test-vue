import Vue from 'vue'
import App from '@/components/App.vue'
import store from '@/store'
import Unicon from 'vue-unicons'
import { uniTrashAlt, uniEdit, uniColumns, uniEye, uniExport, uniImport, uniBright } from 'vue-unicons/src/icons'
import GlobalEvents from 'vue-global-events'
import Toasted from 'vue-toasted'
import VueI18n from 'vue-i18n'
import lang from '@/lang'

Vue.config.productionTip = false

// register globally
Vue.component('GlobalEvents', GlobalEvents)

Unicon.add([uniTrashAlt, uniEdit, uniColumns, uniEye, uniExport, uniImport, uniBright])
Vue.use(Unicon)
Vue.use(Toasted)
Vue.use(VueI18n)

new Vue({
  store,
  i18n: lang,
  created: function () {
    // `this` �� vm �C���X�^���X���w���܂�
    console.log('created : ' + this.a)
    this.$store.dispatch('init')
  },
  render: h => h(App)
}).$mount('#app')
