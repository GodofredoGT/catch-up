import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Aura from '@primevue/themes/aura';

import i18n from './i18n.js';
//import de prime vue a usar
import SelectButton from "primevue/selectbutton";
import Button from "primevue/button";
import Drawer from "primevue/drawer";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import Toolbar from "primevue/toolbar";
import Card from "primevue/card";

//descomponer en 2 instrucciones

//Create App instance
const app= createApp(App);

//Use PrimeVue

app.use(PrimeVue,{
    ripple:true,
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});

//Specify PrimeVue Commponents to use in aplication

app.component('pv-card', Card )
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-drawer', Drawer)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar);





//Mount App Instance into #app div
app.mount('#app')
