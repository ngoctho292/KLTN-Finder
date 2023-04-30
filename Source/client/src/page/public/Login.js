import { useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import isEmpty from 'validator/lib/isEmpty'
import isEmail from 'validator/lib/isEmail'

import logo from '../../asset/image/logo.png'
const Login = () => {
  // const history = useHistory()
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [validationMsg, setValidationMsg] = useState({})

  const onChangeEmail = (event) => {
    const value = event.target.value
    setEmail(value)
  }

  const onChangePassword = (event) => {
    const value = event.target.value
    setPassword(value)
  }

  const validateAll = () => {
    const msg = {}
    if (isEmpty(email)) {
      msg.email = 'Vui lòng nhập địa chỉ email'
    } else if (!isEmail(email)) {
      msg.email = 'Không phải là Email vui lòng nhập lại'
    }

    if (isEmpty(password)) {
      msg.password = 'Vui lòng nhập mật khẩu'
    }

    setValidationMsg(msg)

    if (Object.keys(msg).length > 0) return false

    return true
  }

  const onSubmitLogin = () => {
    const isValid = validateAll()
    if (!isValid) return

    // call api login
    // history.replace('/')

  }


  return (
    <div className='bg-[#1E1E1E] h-screen flex items-center justify-center flex-col' >
      <img src={logo} alt="logo" />
      <div className="flex flex-col text-white mt-8">
        <h3 className='text-xl font-semibold'>ĐĂNG NHẬP</h3>
        <input type="text" className="w-[374px] h-12 mt-3 rounded-md p-3 bg-[#31343E] text-[#C8C9CB]" placeholder='Emai hoặc số điện thoại...' onChange={onChangeEmail} />
        <p className="text-red-400 text-xs "> {validationMsg.email}</p>
        <input type="password" className="w-[374px] h-12 mt-3 rounded-md p-3 bg-[#31343E] text-[#C8C9CB] " placeholder='Mật khẩu' onChange={onChangePassword} />
        <p className="text-red-400 text-xs "> {validationMsg.password}</p>

        <button className='bg-[#037AEB] h-12 w-[374px] mt-5 rounded-md p-3 font-semibold ' onClick={onSubmitLogin}>TIẾP TỤC</button>
        <div className='mt-5  '>
          <span className='text-[#fff9] mr-1 text-sm'>Bạn mới sử dụng Finder ?</span>
          <span className='text-white text-sm  '>Đăng kí ngay !</span>
        </div>
      </div>

    </div>
  )
}

export default Login
