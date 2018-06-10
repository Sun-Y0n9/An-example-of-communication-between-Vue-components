import Vue from "vue"
import Router from "vue-router"
import One from "../views/oneView.vue"
import Two from "../views/twoView.vue"
import TwoC1 from "../views/two/twoC1.vue"
import TwoC2 from "../views/two/twoC2.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      redirect:"one"
    },
    {
      path: "/one",
      name: "one",
      component: One
    },
    {
      path: "/two",
      redirect:{name:"twoC1"},
      component: Two,
      children:[
      	{
      		path:"/two/twoc1/:color",
      		name:"twoC1",
      		component:TwoC1
      	},
      	{
      		path:"/two/twoc2",
      		name:"twoC2",
      		component:TwoC2
      	}
      ]
    }
]})
