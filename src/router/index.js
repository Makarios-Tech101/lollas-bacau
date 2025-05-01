import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue';
import Faq from '../views/Faq.vue';
import Product from '../views/Product.vue';
import Service from '../views/Service.vue';
import Training from '../views/Training.vue';
import Contact from '../views/Contact.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq,
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
    },
    {
      path: '/service',
      name: 'service',
      component: Service,
    },
    {
      path: '/training',
      name: 'training',
      component: Training,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/#',
      name: 'OurServices',
      // component: OurService,
    //   children: [
    //     {
    //       path: '/portraits-and-headshots',
    //       name: 'PortraitsAndHeadshots',
    //       component: PortraitsAndHeadshots
    //     },
    //     {
    //       path: '/wedding-and-events',
    //       name: 'WeddingAndEvents',
    //       component: WeddingAndEvents
    //     },
    //     {
    //       path: '/birthday-shoots',
    //       name: 'BirthdayShoots',
    //       component: BirthdayShoots
    //     },
    //     {
    //       path: '/child-photography',
    //       name: 'ChildPhotography',
    //       component: ChildPhotography
    //     },
    //     {
    //       path: '/corporate-events',
    //       name: 'CorporateEvents',
    //       component: CorporateEvents
    //     },
    //     {
    //       path: '/fashion-photography',
    //       name: 'FashionPhotography',
    //       component: FashionPhotography
    //     },
    //     {
    //       path: '/outdoor-shoots',
    //       name: 'OutdoorShoots',
    //       component: OutdoorShoots
    //     },
    //     {
    //       path: '/product-photography',
    //       name: 'ProductPhotography',
    //       component: ProductPhotography
    //     }
    //   ]
     }
  ],
  scrollBehavior() {
    return { top: 0 }; 
  }
})

export default router
