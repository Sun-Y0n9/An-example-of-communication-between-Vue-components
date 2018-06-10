<template>
    <div class="topNavCls">
        <router-link class='item' to="/one" tag="div">
            <span>壹</span>
            <left-right-text :info="{text:'路由',color:'#000',bgColor:'#fff'}"></left-right-text>
        </router-link>
        <router-link class='item' to="/two/twoc1/red" tag="div">
            <span>贰</span>
            <left-right-text :info="{text:'路由',color:'#000',bgColor:'#fff'}"></left-right-text>
        </router-link>
    </div>
</template>

<script>
import leftRightText from "../components/leftRightText.vue"
export default {
    name: 'TopNav',
    data () {
        return {
           
        }
    },
    methods:{
    
    },
    components:{
        leftRightText
    },
    created(){
    
    },
    mounted(){
    
    }
}
</script>

<style scoped type="text/css">
  .topNavCls{
    display: flex;
    justify-content: space-between;
    height: 175px;
    background: #dcdcdc;
  }
  .topNavCls .item{
    flex: 0 0 50%;
    height: 175px;
    background: rgba(32,177,170,0.5);
    font-size: 50px;
    color: #fff;
    text-align: center;
    line-height: 175px;
    cursor: pointer;
    position: relative;
  }
  .topNavCls .router-link-active{
    background: rgba(32,177,170,0.9);
  }
</style>
