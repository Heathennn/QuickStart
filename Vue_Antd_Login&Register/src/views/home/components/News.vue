<template>
  <div class="news-container">
    <div class="news-inner">
      <div class="header">学院新闻</div>
      <div class="content">
        <div class="img"></div>
        <div class="news-list" v-if="list && list.length">
          <div class="news-item" v-for="(news, index) in list" :key="index">
            <span class="item-icon">{{index + 1}}</span><span>{{ news.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "News",
    props: {
      list: {}
    },
    data() {
      return {
        // list: [
        //   {
        //     title: '新闻标题1'
        //   },
        //   {
        //     title: '新闻标题1'
        //   },
        //   {
        //     title: '新闻标题1'
        //   },
        //   {
        //     title: '新闻标题1'
        //   },
        //   {
        //     title: '新闻标题1'
        //   }
        // ]
      }
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style lang="less">
.pc {
  .news-container {
    width: 960px;
    height: 330px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .news-inner {
      width: 600px;
      height: 100%;
      .header {
        height: 60px;
        line-height: 60px;
        text-align: center;
      }
      .content {
        display: flex;
        .img {
          width: 300px;
          height: 195px;
          box-sizing: border-box;
          border: 1px solid black;
        }

        .news-list {
          flex: 1;
          box-sizing: border-box;
          padding-left: 30px;
          .news-item {
            line-height: 32px;
            border-bottom: 1px solid #C9C9C9;
            cursor: pointer;
            .item-icon {
              display: inline-block;
              width: 26px;
              height: 26px;
              background-color: #D9251B;
              color: #ffffff;
              text-align: center;
              line-height: 26px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
