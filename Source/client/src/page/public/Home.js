import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Section, Banner} from '../../components'
import background from '../../asset/image/background.svg'


const Home = () => {

    // const { BsFillPlayFill, AiFillBell } = icons
    // const [openModal, setOpenModal] = useState(false)
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,

    };
    return (
        <div className='flex flex-col w-full '>
            <Banner />

            <div className="px-12 w-full">

                <div className="flex flex-col mt-4">
                    <p className='text-white'>Mới phát hành</p>
                    <Slider {...settings}>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                    </Slider>

                </div>

                <div className="flex flex-col mt-4">
                    <p className='text-white'>Mới phát hành</p>
                    <Slider {...settings}>
                        <div >
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                    </Slider>

                </div>
                <div className="flex flex-col mt-4">
                    <p className='text-white'>Mới phát hành</p>
                    <Slider {...settings}>
                        <div >
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                    </Slider>

                </div>
                <div className="flex flex-col mt-4">
                    <p className='text-white'>Mới phát hành</p>
                    <Slider {...settings}>
                        <div >
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                    </Slider>

                </div>
                <div className="flex flex-col mt-4">
                    <p className='text-white'>Mới phát hành</p>
                    <Slider {...settings}>
                        <div >
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                    </Slider>

                </div>
                <div className="flex flex-col mt-4">
                    <p className='text-white'>Mới phát hành</p>
                    <Slider {...settings}>
                        <div >
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                        <div>
                            <Section height={136} img={background} />
                        </div>
                    </Slider>

                </div>


            </div>

            {/* <Footer /> */}

        </div>
    )
}

export default Home
