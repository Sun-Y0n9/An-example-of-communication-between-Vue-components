<template>
    <div class="leftNavCls">
        <router-link class="item" tag="div" :to="{name:'twoC1',params:{color:'#31f609'}}">
            <span>贰点壹</span>
            <left-right-text :info="{text:'二级路由',color:'#000',bgColor:'#fff'}"></left-right-text>
        </router-link>
        <router-link class="item" tag="div" to="/two/twoc2">
            <span>贰点贰</span>
            <left-right-text :info="{text:'二级路由',color:'#000',bgColor:'#fff'}"></left-right-text>
        </router-link>
    </div>
</template>

<script>
import leftRightText from "../components/leftRightText.vue"
export default {
    name: 'leftNav',
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
  .leftNavCls{
    width: 250px;
    height: 100%;
    background: #ccc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .leftNavCls .item{
    height: 50%;
    line-height: 160px;
    text-align: center;
    font-size: 25px;
    width: 100%;
    background: rgba(166,11,185,0.5);
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
  }
  .leftNavCls .item:nth-child(1){
    border-bottom: 1px solid #20b1aa;
  }
  .leftNavCls .router-link-active{
        background: rgba(166,11,185,1);
    }
</style>
