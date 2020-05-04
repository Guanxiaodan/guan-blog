<template>
  <transition name='fade'>
    <div class=''>
      首页
    </div>
  </transition>
</template>

<style scoped >
  
</style>

<script>
// import SelectItem from '@/components/SelectItem.vue';

export default {
  components: {
    // SelectItem
  },
  data() {
    return {

    }
  },
  mounted: function () {
    this.firstSend()
    this.secondSend()
    this.thirdSend()
    this.fourthSend()

  },
  methods:{
    firstSend(){
      this.$axios({
        methods:'GET',
        url:'/blog/myInfo'
      }).then((res)=>{
        console.log('请求成功', res)
      }).catch((err)=>{
        console.log('请求失败', err)
      })
    },
    secondSend(){
      this.$axios({
        methods:'GET',
        url:'/api/list'
      }).then((res)=>{
        console.log('secondSend请求成功', res)
      }).catch((err)=>{
        console.log('secondSend请求失败', err)
      })
    },
    thirdSend(){
      this.$axios({
        methods:'POST',
        url:'/blog/third'
      }).then((res)=>{
        console.log('POST请求成功', res)
      }).catch((err)=>{
        console.log('POST请求失败', err)
      })
    },
    fourthSend(){
      this.$axios({
        methods:'POST',
        url:'/api/fourth',
        data:'上火'
      }).then((res)=>{
        console.log('fourthSend请求成功', res)
      }).catch((err)=>{
        console.log('fourthSend请求失败', err)
      })
    },
  },
}
</script>