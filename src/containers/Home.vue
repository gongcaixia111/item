<template>
  <div>
    <TopNav/>
    <List title="热门歌单" :url="this.HOST +'/v1/restserver/ting'" :params="hotParams"/>
    <List title="今日推荐" :url="this.HOST +'/v1/restserver/ting'" :params="commandParams"/>
    <List title="新歌速递" :url="this.HOST +'/v1/restserver/ting'" :params="newParams"/>
    <List title="唱片墙" :url="this.HOST +'/v1/restserver/ting'" :params="wallParams"/>
    <Banner :banners="banners"/>
    <MusicTab />
    <List title="推荐音乐" :url="this.HOST +'/v1/restserver/ting'" :params="tuiParams"/>
  </div>
</template>
<script>
import TopNav from "../components/TopNav";
import List from "../components/List";
import Banner from "../components/Banner";
import MusicTab from "./Home/MusicTab"

export default {
  name: "Home",
  data() {
    return {
      value: 1,
      hotParams: {
        method: "baidu.ting.billboard.billList",
        type: 1,
        size: 6,
        offset: 0
      },
      commandParams: {
        method: "baidu.ting.billboard.billList",
        type: 2,
        size: 6,
        offset: 0
      },
      newParams: {
        method: "baidu.ting.billboard.billList",
        type: 11,
        size: 3,
        offset: 0
      },
      wallParams: {
        method: "baidu.ting.billboard.billList",
        type: 22,
        size: 3,
        offset: 0
      },
      tuiParams: {
        method: "baidu.ting.billboard.billList",
        type: 23,
        size: 9,
        offset: 0
      },
      banners: [
        require("../assets/img/b1.jpg"),
        require("../assets/img/b2.jpg"),
        require("../assets/img/b3.jpg")
      ]
    };
  },
  components: {
    TopNav,
    List,
    Banner,
    MusicTab
  }
  
};
</script>
<style scoped>
.musictop {
  background: #fff;
  padding: 10px;
}
</style>

