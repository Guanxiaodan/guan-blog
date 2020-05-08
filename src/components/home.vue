<template>
  <transition name='fade'>
    <div class='blog-box'>
      <div class="list">
        <div class="item" v-for="blog in blogList" :key="blog.blogID" @click="fourthSend(blog.blogID)">
          {{blog.title}}
          <div v-if="detailInfo.startTime && blog.blogID==activeID">
            <div>创建时间：{{detailInfo.startTime}}</div>
            <div>编辑时间：{{detailInfo.editTime}}</div>
            <div>阅读量：{{detailInfo.readNum}}</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped >
  .blog-box{
    padding: 20px;
  }
  .list{
    display: flex;

  }
  .item{
    margin-right: 20px;
    width: 200px;
    height: 200px;
    border-radius: 8px;
    background-color: bisque;
  }
</style>

<script>
// import SelectItem from '@/components/SelectItem.vue';

export default {
  components: {
    // SelectItem
  },
  data() {
    return {
      blogList:[],
      activeID:'',
      detailInfo:{}
    }
  },
  mounted: function () {
    // this.firstSend()
    this.secondSend()
    // this.thirdSend()
    // this.fourthSend()

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
        this.blogList = res.data
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

    fourthSend(id){
      this.activeID = id
      this.$axios.post('/api/fourth',{blogID:id})
      .then((res)=>{
        console.log('fourthSend请求成功', res)
        this.detailInfo = res.data[0]
      }).catch((err)=>{
        console.log('从数据库获取数据失败', err)
      })
    },
  },
}
</script>