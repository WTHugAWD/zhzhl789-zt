import axios from 'libs/api.request'

// 发送短信验证码
export default getSmsCode = (phone, codeType) => {
  return axios.request({
    url: 'user/SmsCode',
    params: {phone: phone, codeType: codeType},
    method: 'get'
  })
}

// 注册
export default register = (data) => {
  return axios.request({
    url: 'user/Register',
    data: data,
    method: 'post'
  })
}
