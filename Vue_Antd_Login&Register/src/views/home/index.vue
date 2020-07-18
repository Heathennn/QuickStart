<template>
  <div class="home-page-container">
  </div>
</template>

<script>
  export default {
    name: "Home",
    components: {
    },
    data() {
      return {
      }
    },
    methods: {
      async fetchData() {
      }
    },
    mounted() {
      console.log("this.$t", this.$i18n.locale)
      this.fetchData()
    }
  }
</script>

<style lang="less">
.pc {
  .home-page-container {
    height: 1000px;
  }
}
</style>
