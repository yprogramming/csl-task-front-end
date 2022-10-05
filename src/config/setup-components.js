import Toolbar from '@/views/core/Toolbar.vue';
import Navigation from '@/views/core/NavigationDrawer.vue';
import PageFooter from '@/views/core/PageFooter.vue';

function setupComponents(Vue) {
    Vue.component('toolbar', Toolbar);
    Vue.component('navigation', Navigation);
    Vue.component('page-footer', PageFooter);
}

export {
    setupComponents
}