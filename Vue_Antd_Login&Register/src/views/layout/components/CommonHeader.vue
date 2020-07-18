<template>
  <div class="common-header">
    <div class="header-top">
      <div class="top-inner">
        <div class="loginOrRegister">
          <span @click="toLogin">{{ $t('login') }}</span>丨<span>{{ $t('register') }}</span>
        </div>
        <LanguageSelect></LanguageSelect>
      </div>
    </div>
    <div class="header-nav">
      <div :class="['nav-item', nav.key === currentNav[0] ? 'nav-item-active' : '']" v-for="(nav, index) in menu"
           :key="index" @click="clickNav(nav)">
        <span>{{ nav.name }}</span>
<!--        <div class="sub-nav" v-if="nav.subMenu">-->
<!--          二级菜单-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
  import LanguageSelect from "views/layout/components/LanguageSelect"
  export default {
    name: "CommonHeader",
    components: {
      LanguageSelect
    },
    data() {
      return {
        currentNav: ['home'],
        menu: [
          {
            name: '模板',
            path: '/home',
            key: 'home'
          },
          {
            name: 'Vue',
            key: 'Japan',
            path: '/home',
            subMenu: {
              title: '',
              icon: '',
              menu: [
                {
                  name: '二级列表',
                  key: 'school1'
                },
              ]
            }
          },
          {
            name: 'Antd For Vue',
            key: 'child',
            path: '/home'
          },
          {
            name: 'Vue-cli',
            key: 'money',
            path: '/home'
          },
          {
            name: 'Vue-i18n',
            key: 'C2C',
            path: '/home'
          },
        ]
      }
    },
    methods: {
      clickNav(nav) {
        // this.$router.push({ path: nav.path, replace: true})
        this.currentNav = [nav.key, nav.subMenu ? nav.subMenu.menu[0].key : null]
      },
      // 点击具有下拉菜单的导航时事件
      clickSubMenu({key, domEvent}) {
        let menu = this.menu.find(item => item.key === key);
        this.current = [menu.subMenu.menu[0].key]
      },
      toLogin() {
        this.$router.push({path: '/login', replace: true})
      },
      checkUserConfig() {
        this.$router.push({path: '/mine', replace: true})
      }
    }
  }
</script>

<style lang="less">
  .pc {
    .common-header {
      width: 100%;
      background-color: #ffffff;
      .header-top {
        width: 100%;
        height: 40px;
        margin: 0 auto;
        background-color: #434343;
        color: #ffffff;
        .top-inner {
          width: 1200px;
          height: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
      .header-nav {
        width: 1200px;
        height: 80px;
        margin: 0 auto;
        display: flex;
        position: relative;

        .nav-item {
          height: 80px;
          line-height: 80px;
          text-align: center;
          padding: 0 40px;
          .sub-nav {
            width: 100%;
            position: absolute;

          }
        }

        .nav-item-active {
          background-color: #DA251C;
          color: #ffffff;
        }
        .user-item {
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          .user-img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 1px solid black;
          }
        }
      }
    }
  }


</style>
