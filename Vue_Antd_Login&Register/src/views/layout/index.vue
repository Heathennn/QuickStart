<template>
  <div class="page_container">
    <CommonHeader></CommonHeader>
    <router-view></router-view>
    <CommonFooter></CommonFooter>
  </div>
</template>
<script>
  import CommonHeader from './components/CommonHeader'
  import CommonFooter from './components/CommonFooter'
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  components: {
    CommonHeader,
    CommonFooter
  }
};
</script>
<style>
  .page_container {
    background-color: #F3F3F3
  }
#components-layout-demo-custom-trigger {
    width: 100%;
    height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
    height: 100%;
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
