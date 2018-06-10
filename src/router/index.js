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
      redirect:"one"
    },
    {
      path: "/one",
      name: "one",
      component: One
    },
    {
      path: "/two",
      component: Two,
      name:"two",
      children:[
      	{
      		path:"twoc1",
      		name:"twoC1",
      		component:TwoC1
      	},
      	{
      		path:"twoc2",
      		name:"twoC2",
      		component:TwoC2
      	}
      ],
      redirect:{name:"twoC1"},
    }
]})
