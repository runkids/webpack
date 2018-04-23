<template>
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="imgUrl" >
        <div class="card-body">
            <h5 class="card-title">{{userName}}</h5>
            <button class="btn btn-primary" @click="getImage">抽！</button>
        </div>
    </div>
</template>
<script>
export default {
  data(){
      return{
          imgUrl: null,
          userName: ''
      }
  },
  methods:{
    getImage(){
      axios.get('https://randomuser.me/api/?gender=male').then((res)=>{
        this.imgUrl = res.data.results[0].picture.large;
        this.userName = res.data.results[0].name.last;
      })
    }
  },
  mounted(){
    this.getImage(); 
  }
}
</script>
<style lang="sass" scoped>
img
  border: 1px solid
  margin-right: 50px
h5 
  text-transform: capitalize
</style>
