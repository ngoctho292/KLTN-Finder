import React, { useState } from 'react'
import isEmpty from 'validator/lib/isEmpty'
import isEmail from 'validator/lib/isEmail'

import logo from '../../asset/image/logo.png'

const Register = () => {
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
        <div className='bg-[#1E1E1E] h-screen'>
            <span className='flex justify-end  text-white mr-4 pt-4'>Đăng nhập</span>
            <div className=' flex items-center justify-center flex-col' >
                <img src={logo} alt="logo" className='' />
                <div className="flex flex-col text-white mt-8">
                    <span className='text-xs  text-[#fff9]'>BƯỚC 1 TRÊN 2</span>
                    <h3 className='text-xl font-semibold'>ĐĂNG KÝ</h3>
                    <input type="text" className="w-[374px] h-12 mt-3 rounded-md p-3 bg-[#31343E] text-[#C8C9CB]" placeholder='Emai hoặc số điện thoại...' onChange={onChangeEmail} />
                    <p className="text-red-400 text-xs "> {validationMsg.email}</p>

                    <input type="password" className="w-[374px] h-12 mt-3 rounded-md p-3 bg-[#31343E] text-[#C8C9CB] " placeholder='Mật khẩu' onChange={onChangePassword} />
                    <p className="text-red-400 text-xs "> {validationMsg.password}</p>

                    <input type="password" className="w-[374px] h-12 mt-3 rounded-md p-3 bg-[#31343E] text-[#C8C9CB]" placeholder='Nhập lại mật khẩu' onChange={onChangePassword} />
                    {/* <p className="text-red-400 text-xs "> {validationMsg.password}</p> */}

                    <div className='mt-3 text-left'>
                        <input type="checkbox" />
                        <label htmlFor="" className='text-[12px] pl-2'>Tôi đồng ý với điều khoản & điều kiện của Finder</label>
                    </div>

                    <button className='bg-[#037AEB] h-12 w-[374px] mt-5 rounded-md p-3 font-semibold ' onClick={onSubmitLogin}>TIẾP TỤC</button>
                </div>

            </div>
        </div>
    )
}

export default Register
