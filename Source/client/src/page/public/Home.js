import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Section, Banner, } from '../../components'
import icons from '../../ultis/icons'
import * as api from '../../apis'
import { useSelector } from 'react-redux';

const Home = () => {

    const { movies } = useSelector(state => state.app)
    console.log(movies);

    const [openModal, setOpenModal] = useState(false)
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 0,
        draggable: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <div className='flex flex-col w-full '>
            <Banner />

            <div className="px-12 w-full">

                <div className="flex flex-col mt-4">
                    <p className='text-white'>Mới phát hành</p>
                    <Slider {...settings}>
                        {movies?.map((item) => (
                            <div key={item?.id}>
                                <Section height={136} img={item?.poster_path} />
                            </div>
                        ))}
                    </Slider>

                </div>

                <div className="flex flex-col mt-4">
                    <p className='text-white'>Mới phát hành</p>
                    <Slider {...settings}>
                        {movies?.map((item) => (
                            <div key={item?.id}>
                                <Section height={136} img={item?.poster_path} />
                            </div>
                        ))}
                    </Slider>

                </div>

            </div>


        </div>
    )
}

export default Home
