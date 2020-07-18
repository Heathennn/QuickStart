<template>
  <div class="login_container box-shadow-white">
    <div class="header">登录</div>
    <a-form-model ref="LoginForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="邮箱" prop="name">
        <a-input v-model="form.name" />
      </a-form-model-item>

      <a-form-model-item label="密码" prop="password">
        <a-input v-model="form.password" type="password"/>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 17, offset: 4 }">
        <a-button type="primary" @click="onSubmit" class="login-btn">
          登录
        </a-button>
      </a-form-model-item>
    </a-form-model>

    <div class="login_config">
      <a-checkbox :defaultChecked="isAutoLogin" @change="changeAutoLogin">下次自动登录</a-checkbox>
      <div class="tips">
        <span @click="forgetPassword">忘记密码</span>丨<span @click="toRegist">注册</span>
      </div>
    </div>
  </div>
</template>
<script>
  import { userLogin } from 'api/index'
  import Md5 from 'js-md5'
  export default {
    data() {
      let validateName = (rule, value, callback) => {
        if (!value) {
          callback(new Error('用户名不能为空'));
        } else {
          // if (this.form.checkPass !== '') {
          //   this.$refs.ruleForm.validateField('checkPass');
          // }
          callback();
        }
      };
      let validatePass = (rule, value, callback) => {
        if (!value) {
          callback(new Error('密码不能为空'));
        }else {
          callback();
        }
      };
      return {
        labelCol: { span: 6 },
        wrapperCol: { span: 15 },
        form: {
          name: '',
          password: ''
        },
        rules: {
          name: [{ validator: validateName, trigger: 'change' }],
          password: [{ validator: validatePass, trigger: 'change' }],
        },
        isAutoLogin: false
      };
    },
    methods: {
      // 跳转到注册页面
      toRegist() {
        this.$emit('showRegister')
      },
      // 是否自动登录
      changeAutoLogin(e) {
        this.isAutoLogin = e.target.checked
      },
      forgetPassword() {
        this.$message.warn('忘记密码')
      },
      onSubmit() {
        // 校验表单
        this.$refs.LoginForm.validate( async valid => {
          if (valid) {
            let res = await userLogin({
              email: this.form.name,
              password: Md5(this.form.password)
            })
            if (res.code === 200) {
              this.$message.success('登录成功');
              // localStorage.setItem('Auth', res.data.token)
              // localStorage.setItem('UserId', res.data.userId)
              // TODO 模拟延迟
              setTimeout( () => {
                this.$router.push({ path: '/home', replace: true})
              }, 500)
            }
            return true
          } else {
            return false
          }
        })
      },
    },
  };
</script>

<style lang="less">
  .pc {
    .login_container {
      background-color: #ffffff;
      border-radius: 10px;
      box-sizing: border-box;
      padding: 10px;
      .header {
        width: 100%;
        height: 100px;
        line-height: 100px;
        text-align: center;
        font-size: 28px;
        font-weight: bold;
      }
      width: 400px;
      height: 400px;
      /*box-sizing: border-box;*/
      /*border: 1px solid black;*/
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -200px;
      margin-top: -200px;

      .login_config {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 48px;
        .tips {
          cursor: pointer;
        }
      }
      .login-btn {
        width: 100%;
      }
    }
  }
</style>
