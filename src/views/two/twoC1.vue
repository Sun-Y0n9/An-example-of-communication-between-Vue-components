<template>
    <div class="twoC1Cls" :style="{backgroundColor:bgC}">
      <div>
            <button @mousemove="createRandom" @click="backToR1Query">回到路由壹,并携带一个随机数</button>
            <button @mousemove="createRandom" @click="backToR1Params">回到路由壹,并携带一个随机数</button>
            <button >随机数 : {{r}}</button>
            <left-right-text :info="{text:'路由贰下的二级路由',color:'#fff',bgColor:'rgba(166,11,185,1)'}"></left-right-text>
      </div>
    </div>
</template>

<script>
import leftRightText from "../../components/leftRightText.vue"
export default {
    name: 'twoC1',
    data () {
        return {
            bgC:"#9966CC",
            r:""
        }
    },
    created(){
        this.bgC = this.$route.params.color || "#31f609";
    },
    methods:{
        createRandom(){
            this.r = Math.random();
        },
        backToR1Query(){
            this.$router.push({name:"one",query:{random:this.r}});
        },
        backToR1Params(){
            this.$router.push({name:"one",params:{random:this.r}});
            // this.$router.push({path:"/one",params:{random:this.r}});
        }
    },
    components: {
        leftRightText
    }
}
</script>

<style scoped type="text/css">
    .twoC1Cls{
        height: 100%;
    }
    .twoC1Cls > div{
        position: relative;
        overflow: hidden;
    }
    .twoC1Cls button{
        width: 275px;
        text-align: center;
        height: 75px;
        line-height: 75px;
        border:none;
        background: #000;
        color:#fff;
        margin:0 auto;
        display: block;
        outline: none;
        margin-top: 100px;
        font-size: 18px;
        cursor:pointer; ;
    }
</style>
