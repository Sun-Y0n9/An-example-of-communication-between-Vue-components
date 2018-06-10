<template>
    <div class="tridentCls">
        <div class="item" @click="clickChangeOtherComponentColor">
            <span>子组件</span>
            <left-right-text :info="{text:'子',color:'#000',bgColor:'#F7E788'}"></left-right-text>
        </div>
        <div class="item" @click="toTwoC1">
            <span>{{color}}</span>
            <left-right-text :info="{text:'子',color:'#000',bgColor:'#F7E788'}"></left-right-text>
        </div>
    </div>
</template>

<script>
import leftRightText from "./leftRightText.vue"
import Bus from "../utils/eventBus.js"
export default {
    name: 'trident',
    data () {
        return {
         	num:0,
            color:"#20b1aa"
        }
    },
    methods:{
        sixteen() {
            var base = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
            var baseStr = "#";
            for (var i = 0; i < 6; i++) {
                var r = Math.floor(Math.random() * 16);
                baseStr += base[r];
            };
            return baseStr;
        },
        clickChangeOtherComponentColor(){
            this.color = this.sixteen();
            Bus.$emit("changeColor", this.color);
        },
        toTwoC1(){
            this.$router.push({name:"twoC1",params:{color:this.color}});;
        }
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

<style scoped type="text/css" lang="scss">
	.tridentCls{
        position: relative;
        background: #dcdcdc;
        display: flex;
        justify-content: center ;
        .item{
            width: 100px;
            height: 100px;
            background: deeppink;
            color: #000;
            text-align: center;
            line-height: 100px;
            font-size: 20px;
            position: relative;
            cursor: pointer;
            margin-left: 20px;
        }
	}
</style>
