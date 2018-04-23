<template>
  <div class="container">
      <h1><p id='text'>{{text}}</p></h1>
      <InfoBox/>
      Red <input type="checkbox" value='red' v-model='d3Data'/>
      Blue <input type="checkbox" value='blue' v-model='d3Data'/>
      Green <input type="checkbox" value='green' v-model='d3Data'/>
      <div class="d3"></div>
  </div>
</template>
<script>
import InfoBox from '@/components/InfoBox';
export default {
  components:{
    InfoBox
  },
  data(){
    return{
      text: 'Hello World !',
      d3Data:[]
    }
  },
  watch:{
    d3Data(){
      d3.select(".d3").selectAll('div').remove();
      d3.select(".d3").selectAll('div').data(this.d3Data).enter().append('div')
      .style('border','solid 2px')
      .style('width','50px')
      .style('height','50px')
      .style('border-radius','100%')
      .style('border-color', d=>d);
    }
  }
}
</script>
<style lang="sass" scoped>
html,body
  background-color: #36495D
h1
  color: #47b784
  animation: ani 2s infinite
.d3
  width: 200px
  display: flex
@keyframes ani 
  0%,100%
    transform: translateY(0px)
  50%
    transform: translateY(10px)
</style>