import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faCartShopping,
  faUser,
  faUserSecret,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faUser, faCartShopping, faChevronLeft, faChevronRight)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
