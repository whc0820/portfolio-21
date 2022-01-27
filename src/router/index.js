import Vue from 'vue';
import VueRouter from 'vue-router';
import VuePageTransition from 'vue-page-transition';

Vue.use(VueRouter);
Vue.use(VuePageTransition);

const Home = () => import(/* webpackPrefetch: true */ '@/views/Home.vue');
const Projects = () => import(/* webpackPrefetch: true */ '@/views/Projects.vue');
const SchemeClerkSystem = () => import(/* webpackPrefetch: true */ '@/views/SchemeClerkSystem.vue');
const VisitorPredictor = () => import(/* webpackPrefetch: true */ '@/views/VisitorPredictor.vue');
const LedVisualizer = () => import(/* webpackPrefetch: true */ '@/views/LedVisualizer.vue');
const BeautyCrawler = () => import(/* webpackPrefetch: true */ '@/views/BeautyCrawler.vue');
const DailyIdiom = () => import(/* webpackPrefetch: true */ '@/views/DailyIdiom.vue');

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/scheme-clerk-system',
    name: 'Scheme Clerk System',
    component: SchemeClerkSystem
  },
  {
    path: '/visitor-predictor',
    name: 'Visitor Predictor',
    component: VisitorPredictor
  },
  {
    path: '/led-visualizer',
    name: 'Led Visualizer',
    component: LedVisualizer
  },
  {
    path: '/beauty-crawler',
    name: 'Beauty Crawler',
    component: BeautyCrawler
  },
  {
    path: '/daily-idiom',
    name: 'Daily Idiom',
    component: DailyIdiom
  },
  {
    path: '*',
    redirect: '/'
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
