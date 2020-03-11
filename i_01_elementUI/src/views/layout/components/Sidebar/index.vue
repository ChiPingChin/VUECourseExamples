<script>
import { mapGetters } from 'vuex';
import SidebarItem from './SidebarItem';
import ScrollBar from '@/components/ScrollBar';

export default {
  components: { SidebarItem, ScrollBar },
  computed: {
    ...mapGetters([
      'sidebar',
    ]),
    routes() {
      return this.$router.options.routes;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
};
</script>


<template>
  <scroll-bar>
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF">
      <SidebarItem :routes="routes" />
    </el-menu>
  </scroll-bar>
</template>
