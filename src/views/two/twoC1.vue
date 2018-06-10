<template>
    <div class="twoC1Cls" :style="{backgroundColor:bgC}">
      	
    </div>
</template>

<script>
export default {
    name: 'twoC1',
    data () {
        return {
         	num:10,
            bgC:"#9966CC"
        }
    },
    created(){
        this.bgC = this.$route.params.color;
    }
}
</script>

<style scoped type="text/css">
    .twoC1Cls{
        height: 100%;
    }
</style>
