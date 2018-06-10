<template>
    <div class="oneViewCls">
    	<top-nav></top-nav>
        <div class="content">
            <div class="item" @click="changeBorderRadius()">
                <span>点击父组件向子组件传递参数</span>
                <left-right-text :info="{text:'父',color:'#fff',bgColor:'#FF00CD'}"></left-right-text>
            </div>
        <div class="item">
            <span>用于显示子组件向父组件传递回来的参数: <b>{{num}}</b></span>
            <div class="evtCls">
                <div>
                    <span>offsetX: <b>{{x}}</b></span>
                    <left-right-text :info="{text:'父',color:'#fff',bgColor:'#FF00CD'}"></left-right-text>
                </div>
                <div>
                    <span>offsetY: <b>{{y}}</b></span>
                    <left-right-text :info="{text:'父',color:'#fff',bgColor:'#FF00CD'}"></left-right-text>
                </div>
            </div>
            <canvas id="canvas" height="100" width="100"></canvas>
            <left-right-text :info="{text:'父',color:'#fff',bgColor:'#FF00CD'}"></left-right-text>
        </div>
        </div>
        <div class="componentItem">
            <border-radius :radius-num="rn" @eventInParent="changeNum"></border-radius>
            <left-right-text :info="{text:'Circle子组件',color:'#fff',bgColor:'red'}"></left-right-text>
        </div>
        <div class="componentItem">
            <trident></trident>
            <left-right-text :info="{text:'Trident子组件',color:'#000',bgColor:'#F7E788'}"></left-right-text>
        </div>
        <div class="routerParams" @click="to2">
            <span>路由贰传回来的随机数 : {{r}}</span>
            <left-right-text :info="{text:'路由贰传回来的参数',color:'#000',bgColor:'#20b1aa'}"></left-right-text>
        </div>
    </div>
</template>

<script>
import TopNav from "../components/topNav.vue"
import BorderRadius from "../components/circle.vue"
import Trident from "../components/trident.vue"
import leftRightText from "../components/leftRightText.vue"
export default {
    name: 'oneView',
    data () {
        return {
         	rn:0,
            num:0,
            eventMsg:{},
            x:"",
            y:"",
            r:""
        }
    },
    methods:{
        changeBorderRadius(){
            this.rn+=10;
            if(this.rn > 50){
                this.rn = 0;
            }
        },
        changeNum(paramsFromSun, r, evt){
            this.x = evt.offsetX;
            this.y = evt.offsetY;
            this.num = paramsFromSun;
            this.draw(r);
        },
        changeVariableInOtherRouter(){
            this.$emit("changeMyNum");
        },
        draw(r){
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext("2d");
            ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.arc(50,50,r,0,2 * Math.PI);
            ctx.closePath();
            ctx.fill();
        },
        to2(){
            this.$router.push({name:"twoC2"})
        }
    },
    components:{
    	TopNav,
        BorderRadius,
        Trident,
        leftRightText
    },
    created(){
        console.log(this.$route);
        this.r = this.$route.params.random || this.$route.query.random
    },
    mounted(){
        this.draw(2);    
    },
    beforeCreate(){
        console.log("this oneView is beforeCreate!");
    },
    destroyed(){
        console.log("this oneView is destroyed!");
    }
}
</script>

<style scoped="" type="text/css" lang="scss">
    .content{
        display: flex;
        .item{
            background: #FE649A;
            height: 100px;
            line-height: 100px;
            padding: 0 10px;
            font-weight: bold;
            color:#fff;
            position: relative;
            box-sizing:border-box;
            flex: 0 0 50%;
            b{
                color:red;
            }
            &:nth-child(1){
                cursor: pointer;
            }
            &:nth-child(2){
                background: #317EF3;
                display: flex;
                height: 100%;
                padding-right: 0;
                span{
                    padding-right: 5px;
                    box-sizing:border-box;
                }
            }
            .evtCls{
                display: flex;
                width: 150px;
                height: 100px;
                flex-direction: column;
                justify-content: space-between;
                div{
                    height: 50px;
                    line-height: 50px;
                    box-sizing: border-box;
                    text-align: center;
                    background: #2A8FBD;
                    position: relative;
                    &:nth-child(2){
                        background: #06B9D1;
                    }
                }
            }
        }
    }
    .componentItem{
        margin-bottom: 40px;
        position: relative;
        .componentInfo{
            position: absolute;
            right: 0%;
            top: 50%;
            transform: translate(0%,-50%);
            letter-spacing: 20px;
            color: rgba(255,255,255,0.6);
            font-size: 18px;
            color: deeppink;
        }
    }
    .routerParams{
        position: relative;
        background: #dcdcdc;
        height:100px;
        line-height: 100px;
        text-align:center;
        font-size: 20px;
    }
</style>
