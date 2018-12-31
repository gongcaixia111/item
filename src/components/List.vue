<template>
  <div class="collection-block">
    <div class="block-padding">
      <div class="title">
        <h3>{{ title }}</h3>
        <router-link to="/">更多</router-link>
      </div>
      <div class="list clearfix" v-if="song_list.length > 0 ">
        <router-link 
        to="/" 
        v-for="(item,index) in song_list" 
        class="item"
        :class="{'clear-padding': index%3 !== 1}"
        :key="index">
          <div class="img-wrapper">
            <img :src="item.pic_s500" alt>
          </div>
          <div class="main">{{ setMusicTitle(item.title) }}</div>
          <div class="gray">{{ item.author }}</div>
        </router-link>
      </div>
      <div v-else>正在加载数据...</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "List",
  data() {
    return {
      song_list: [],
      data:[]
    };
  },
  props: {
    title: {
      type: String,
      default: "新歌速递"
    },
    url: {
      type: String,
      required: true
    },
    params: {
      type: Object,
      required: true
    }
  },
  methods:{
      setMusicTitle(title){
          if(title.length >8 ){
              return title.substring(0,8)+"..."
          }
          return title;
      }
  },
  mounted() {
    this.$axios
      .get(this.url, {
        params: this.params
      })
      .then(res => {
        this.song_list = res.data.song_list;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style scoped>

.collection-block{
  background-color: #f8f8f8;
  padding: 5px 0;
}

.block-padding{
  padding: 10px 17px;
  background-color: #fff;
}

.title{
  display: flex;
  margin: 14px 0 18px;
}

.title h3{
  flex: 1 1 0%;
  display: block;
  font-weight: 700;
  font-size: 20px;
}

.list{
  width: 100%;
}

.list .item{
  float: left;
  width: 31.33%;
  padding: 0 10px;
  margin-bottom: 10px;
}

.clear-padding{
  padding: 0 !important;
}

.main{
  margin-top: 4px;
  font-size: 12px;
}

.gray{
  margin-top: 4px;
  font-size: 12px;
  color: #999;
}

.btn-more{
  font-size: 12px;
  text-align: right;
  color: #333;
}

</style>
