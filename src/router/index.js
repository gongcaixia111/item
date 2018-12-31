import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/containers/Home"
import Mine from "@/containers/Mine"
import MusicList from "@/containers/MusicList"
import Search from "@/containers/Search"
import Singer from "@/containers/Singer"
import TopMusic from "@/containers/TopMusic"


Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/musiclist',
      name: 'MusicList',
      component: MusicList
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/topmusic',
      name: 'TopMusic',
      component: TopMusic
    }
  ]
})
