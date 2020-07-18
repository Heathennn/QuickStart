<template>
  <div class="language-select-container">
    <a-select default-value="zh_CN" style="width: 120px" @change="handleChange" class="language-select">
      <template v-for="(lang, index) in languages">
        <a-select-option :value="lang.value" :key="index">
          {{ lang.name}}
        </a-select-option>
      </template>
    </a-select>
  </div>
</template>

<script>
  export default {
    name: "LanguageSelect",
    data() {
      return {
        languages: [
          {
            name: '简体中文',
            value: 'zh_CN'
          },
          {
            name: '繁體中文',
            value: 'zh_HK'
          },
          {
            name: '日本语',
            value: 'ja_JP'
          }
        ]
      }
    },
    methods: {
      handleChange(value) {
        this.$i18n.locale = value
      }
    },
    mounted() {
    }
  }
</script>

<style lang="less">
  .language-select {
    background-color: #434343;
  }

  .ant-select-selection {
    border: 1px solid #434343!important;
    background-color: #434343!important;
    color: #ffffff;
  }

  .ant-select-arrow {
    color: #ffffff!important;
  }
  .ant-select .ant-select-selection {
    /*border-color: #ffffff;*/

    &:active {
      border-color: #ffffff;
    }

    &:hover {
      border-color: #ffffff;
    }
  }

  .ant-select-focused {

  }
</style>
