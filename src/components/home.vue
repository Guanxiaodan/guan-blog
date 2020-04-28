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
    }
  },
}
</script>