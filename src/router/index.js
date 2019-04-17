import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'path';

Vue.use(Router)

export default new Router({
  linkActiveClass:'on',
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'indexhome',
      component:resolve => require(['@/components/indexhome'],resolve)
    },
    {
      path: '/indexNotice',
      name: 'indexNotice',
      component:resolve => require(['@/components/notice/indexNotice'],resolve),
      redirect:'/indexNotice/inbox',
      children:[
        {
          path: 'top',
          name: 'top',
          component:resolve => require(['@/components/notice/top'],resolve)
        },{
          path: 'leftMenu',
          name: 'leftMenu',
          component:resolve => require(['@/components/notice/leftMenu'],resolve)
        },{
          path: 'inbox',
          name: 'inbox',
          component:resolve => require(['@/components/notice/inbox'],resolve),
          children:[
            {
              path: 'inboxdetails',
              name: 'inboxdetails',
              component:resolve => require(['@/components/notice/details'],resolve)
            }
          ]
        },{
          path: 'outbox',
          name: 'outbox',
          component:resolve => require(['@/components/notice/outbox'],resolve),
          children:[
            {
              path: 'newNotice',
              name: 'newNotice',
              component:resolve => require(['@/components/notice/newNotice'],resolve)
            },{
              path: 'outboxdetails',
              name: 'outboxdetails',
              component:resolve => require(['@/components/notice/details'],resolve)
            }
          ]
        }
        
      ]
    }
    
  ]
})
