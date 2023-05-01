import React from 'react'

import movies from '../asset/image/logomoives.png'
import background from '../asset/image/background.svg'

const Banner = () => {
    return (
        <div className='relative'>
            <img src={background} alt="background" className='w-full object-cover mt-[-80px] z-0' />
            <div className='px-12 absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent  text-white'>
                <div className="absolute top-[80px] pt-8 text-white">
                    {/* phim h.hinh */}
                </div>
                <div className="absolute top-[35%]">
                    <img src={movies} alt="movives" />
                </div>
                <div className="absolute top-[60%]">
                    <div className="flex flex-col">
                        <p className='w-[45%] text-white text-[20px] leading-5 mb-5'>Sau sự sụp đổ của Đế chế Thiên hà, tình trạng vô luật pháp đã lan rộng khắp Thiên hà. Một tay súng đơn độc vượt qua Outer Rims, kiếm được vị trí thợ săn tiền thưởng</p>
                        <div>
                            <button className=' rounded-md bg-white text-black text-center font-semibold py-2 px-5 mr-2 '>
                                {/* <BsFillPlayFill /> */}
                                Phát
                            </button>
                            <button className=' rounded-md bg-transparent text-black text-center font-semibold py-2 px-5 ml-2 border border-black'>
                                Thông tin khác
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner
