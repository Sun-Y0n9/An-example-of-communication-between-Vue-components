<template>
    <div class="circleCls">
      	<div class="radius" v-bind:style="{borderRadius:radiusNumber+'px'}">
      		<span>子组件</span>
      		<left-right-text :info="{text:'子',color:'#fff',bgColor:'red'}"></left-right-text>
      	</div>
      	<div class="radius a">
      		<span>传递过来radiusNum的值:{{radiusNumber}}</span>
      		<left-right-text :info="{text:'子',color:'#fff',bgColor:'red'}"></left-right-text>
      	</div>
      	<div class="radius b" @click="changeNumInParent($event)" :style="{backgroundColor:bgC}">
      		<span>点击向父组件传递信息</span>
      		<left-right-text :info="{text:'子',color:'#fff',bgColor:'red'}"></left-right-text>
      	</div>
      	<div class="radius evtCls">
  			<div>
      			<left-right-text :info="{text:'子',color:'#fff',bgColor:'red'}"></left-right-text>
      			<span>offsetX: <b>{{x}}</b></span>
  			</div>
  			<div>
      			<left-right-text :info="{text:'子',color:'#fff',bgColor:'red'}"></left-right-text>
      			<span>offsetY: <b>{{y}}</b></span>
  			</div>
  		</div>
    </div>
</template>
<script>
import leftRightText from "./leftRightText.vue"
import Bus from "../utils/eventBus.js"
export default {
    name: 'circleComponent',
    data(){
    	return {
    		numInSon:0,
    		number:"",
    		bgC:"#209E85",
    		x:"",
    		y:"",
    		r:2,
    	}
    },
    props:{
    	radiusNum:{
    		type:Number,
    		default:10
    	}
    },
    computed:{
    	radiusNumber(){{
    		return this.$props.radiusNum
    	}}
    },
    methods:{
		changeNumInParent(e){
			this.numInSon += 10;
			this.r += 2;
			if(this.r > 50) {
				this.r = 2;
			};
			this.x = e.offsetX;
			console.log(e);
			this.y = e.offsetY;
			this.$emit("eventInParent", this.numInSon, this.r, e)
		}
    },
    mounted(){
        Bus.$on("changeColor", (color) => {
        	this.bgC = color;
        });
    },
    components:{
    	leftRightText
    }
}
</script>

<style scoped type="text/css" lang="scss">
	.circleCls{
		display: flex;
		position: relative;
		background: #ccc;
		justify-content: space-around;
		.radius{
			width: 100px;
			height: 100px;
			background: #B85CD6;
			border-radius: 1px;
			color:#fff;
			text-align: center;
			line-height: 100px;
			font-size: 20px;
			cursor: pointer;
			display: inline-block;
			position: relative;
			i{
				position: absolute;
				line-height: 1;	
				left: 0;
				top:0;
				font-size: 12px;
				padding: 5px;
				background: red;
				padding-left: 0;
				border-radius: 0 0 12px 0;
			}
		}
		.a{
		font-size: 15px;
		line-height: 30px;
		border-radius: 3px;
		background: #971F99;
		}
		.b{
			line-height: 20px;
			font-size: 16px;
			box-sizing: border-box;
			padding: 30px 0;
		}
		.evtCls{
			background: #317EF3;
			width: 150px;
			div{
				height: 50px;
				line-height: 50px;
				position: relative;
				&:nth-child(1){
					background: #2EC68D;
				}
				&:nth-child(2){
					background: #00855F;
				}
				b{
					color:red;
				}
			}
		}
	}
</style>
