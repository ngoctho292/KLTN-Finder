import React from 'react'

import { Section, Banner } from '../../components'
import Slider from "react-slick";
import background from '../../asset/image/background.svg'
import icons from '../../ultis/icons'


const Home = () => {

    const { BsFillPlayFill } = icons
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7
    };

    const livestream = [
        {
            text: '1'
        },
        {
            text: '1'
        },
        {
            text: '1'
        },
        {
            text: '1'
        },
        {
            text: '1'
        },
        {
            text: '1'
        },

    ]

    return (
        <div className='flex flex-col w-full '>
            <Banner />

            <div className="px-12 w-full">
                <div className="flex flex-col mt-4">
                    <p className='text-white'>Mới phát hành</p>
                    <div className='text-white'>
                        <Slider {...settings}>
                            <div>
                                <h3>1</h3>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
                            </div>
                            <div>
                                <h3>7</h3>
                            </div>
                            <div>
                                <h3>8</h3>
                            </div>
                        </Slider>
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
