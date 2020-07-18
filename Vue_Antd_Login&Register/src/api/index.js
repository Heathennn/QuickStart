import { GET, POST } from 'utils/request'

// 获取邮箱验证码
export function getEmailCode(email) {
  return new Promise( (resolve, reject) => {
    resolve({
      data: {},
      code: 200,
      msg: '获取验证码成功'
    })
  })
}

// 用户注册
export function userRegister(data) {
  return new Promise( (resolve, reject) => {
    resolve({
      data: {},
      code: 200,
      msg: '注册成功'
    })
  })
}

// 用户登录
export function userLogin(data) {
  return new Promise( (resolve, reject) => {
    resolve({
      data: {},
      code: 200,
      msg: '登录成功'
    })
  })
}

// 获取首页
export function getHomePage() {
  return GET(`/api/home/index`)
}
