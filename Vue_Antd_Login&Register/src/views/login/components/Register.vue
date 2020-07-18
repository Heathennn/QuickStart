<template>
  <div class="register-container box-shadow-white">
    <div class="header">注册 <span class="login_tip" @click="toLogin">已有账号,去登录</span></div>
    <a-form-model ref="RegisterForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="邮箱" prop="name">
        <a-input v-model="form.name"/>
      </a-form-model-item>
      <a-form-model-item label="验证码" prop="code">
        <a-input v-model="form.code"/>
        <a-button type="primary" @click="getCode">获取验证码</a-button>
      </a-form-model-item>
      <a-form-model-item label="密码" prop="password">
        <a-input v-model="form.password"/>
      </a-form-model-item>
      <a-form-model-item label="再次输入密码" prop="password2">
        <a-input v-model="form.password2"/>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 17, offset: 4 }">
        <a-button type="primary" @click="onSubmit" class="register-btn">
          注册
        </a-button>
      </a-form-model-item>
    </a-form-model>
    <div class="register-config">
      <a-form-model ref="AgreementForm" :model="agreementForm" :rules="agreementRules">
        <a-form-model-item prop="agree">
          <a-checkbox :defaultChecked="agreementForm.agree" v-model="agreementForm.agree">我已阅读xxx</a-checkbox>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
  import { getEmailCode, userRegister } from 'api/index'
  export default {
    name: "Register",
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
      let validateCode = (rule, value, callback) => {
        if (!value) {
          callback(new Error('验证码不能为空'));
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
      let validatePass2 = (rule, value, callback) => {
        if (!value) {
          callback(new Error('密码不能为空'));
        } else if (value !== this.form.password) {
          callback(new Error('两次密码不一致'));
        } else {
          callback();
        }
      };

      let validateAgreement = (rule, value, callback) => {
        console.log("value", value)
        if (value) {
          callback()
        } else {
          callback(new Error('请先同意'))
        }
      }
      return {
        labelCol: { span: 6 },
        wrapperCol: { span: 15 },
        form: {
          name: '',
          code: '',
          password: '',
          password2: ''
        },
        agreementForm: {
          agree: false
        },
        rules: {
          name: [{ validator: validateName, trigger: 'change' }],
          code: [{ validator: validateCode, trigger: 'change' }],
          password: [{ validator: validatePass, trigger: 'change' }],
          password2: [{ validator: validatePass2, trigger: 'change' }],
        },
        agreementRules: {
          agree: [{ validator: validateAgreement, trigger: 'change' }],
        },
        defaultChecked: false,
        isCheckedAgreement: false,
        showAlertMsg: false
      };
    },
    methods: {
      toLogin() {
        this.$emit('showLogin')
      },
      async getCode() {
        let res = await getEmailCode(this.form.name);
        if (res.code === 200) {
          this.$message.success('验证码发送成功!');
        }
      },
      changeAgreeBtn(e) {
        this.isCheckedAgreement = e.target.checked
        console.log("this.isCheckedAgreement", this.isCheckedAgreement)
      },
      async onSubmit() {
        const Forms = ['RegisterForm', 'AgreementForm']
        let flag = false
        flag = Forms.every( formName => {
          let current = false
          this.$refs[formName].validate( valid => {
            if (valid) {
              current = true
              return true
            } else {
              current = false
              return false
            }
          })
          return current
        })
        // 表单都不为空
        if (flag) {
          let params = {
            email: this.form.name,
            password: this.form.password,
            validateCode: this.form.code
          }
          let res = await userRegister(params);
          if (res.code === 200) {
            this.$message.success('注册成功, 请登录')
            this.$emit('showLogin')
          }
        }
        // 校验表单

      },
      onClose() {

      }
    }
  }
</script>

<style lang="less">
  .pc {
    .register-container {
      background-color: #ffffff;
      width: 400px;
      box-sizing: border-box;
      border-radius: 10px;
      padding: 10px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -200px;
      margin-top: -200px;

      .header {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 28px;
        position: relative;
        .login_tip {
          font-size: 14px;
          position: absolute;
          right: 0;
        }
      }
      .register-btn {
        width: 100%;
      }

      .register-config {
        padding-left: 50px;
      }

      .ant-form-item {
        margin-bottom: 12px;
      }
    }
  }
</style>
