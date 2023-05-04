import React from 'react'

import { Section, Banner } from '../../components'
import background from '../../asset/image/background.svg'
import icons from '../../ultis/icons'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
const Home = () => {

    const { BsFillPlayFill, AiFillBell } = icons

    return (
        <div className='flex flex-col w-full '>
            <Banner />



            <div className="px-12 w-full">
                <div className="flex flex-col mt-4">
                    <p className='text-white'>Mới phát hành</p>
                    <div className='text-white'>
                        <Swiper
                            slidesPerView={6}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                        >
                            <SwiperSlide><Section height={136} img={background} /></SwiperSlide>
                            <SwiperSlide><Section height={136} img={background} /></SwiperSlide>
                            <SwiperSlide><Section height={136} img={background} /></SwiperSlide>
                            <SwiperSlide><Section height={136} img={background} /></SwiperSlide>
                            <SwiperSlide><Section height={136} img={background} /></SwiperSlide>
                            <SwiperSlide><Section height={136} img={background} /></SwiperSlide>
                            <SwiperSlide><Section height={136} img={background} /></SwiperSlide>
                            <SwiperSlide><Section height={136} img={background} /></SwiperSlide>
                            <SwiperSlide><Section height={136} img={background} /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div className="flex flex-col mt-4">
                    <p className='text-white'>Mới phát hành</p>
                    <div className="flex gap-4">
                        <Section height={136} img={background} />
                        <Section height={136} img={background} />
                        <Section height={136} img={background} />
                        <Section height={136} img={background} />
                        <Section height={136} img={background} />
                        <Section height={136} img={background} />
                    </div>
                </div>

                <div className="flex flex-col mt-4">
                    <p className='text-white'>Mới phát hành</p>
                    <div className="flex gap-4 ">
                        <Section height={136} img={background} />
                        <Section height={136} img={background} />
                        <Section height={136} img={background} />
                        <Section height={136} img={background} />
                        <Section height={136} img={background} />
                        <Section height={136} img={background} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
