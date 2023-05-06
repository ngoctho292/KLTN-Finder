import React from 'react'
import background from '../asset/image/background.svg'
import { Modalsection, Banner, Modalcard } from './'
const Modalcontainer = () => {

    return (
        <div className=' bg-[#181818] text-white '>
            <div className="max-w-[850px] w-full ">

                <Banner banerModal />
                <div className="px-12">
                    <div className="flex">
                        <div className="w-[70%] flex flex-col ">
                            <div className="flex text-base mt-[18px]">
                                <span className='mr-2 text-[#46D369]'>Độ trùng: 94%</span>
                                <span className='mr-2 text-white'>2022</span>
                                <span className='mr-2 text-white' >20 Tập</span>
                                <span className='mr-2  px-[0.4rem] border text-white border-white bg-transparent flex justify-center items-center' >HD</span>
                            </div>
                            <div className="flex text-sm mb-[26px]">
                                <span className='  mr-2 px-[0.4rem] border text-white border-white bg-transparent flex justify-center items-center'>16+</span>
                                <span className=' text-white'>ngôn ngữ</span>
                            </div>
                            <div className="text-sm text-white ">
                                <p className=''>Tình yêu ngọt ngào và cay đắng, còn cuộc sống đầy những nốt thăng và nốt trầm trong nhiều câu chuyện về những con người sống và làm việc trên đảo Jeju nhộn nhịp.</p>
                            </div>
                        </div>
                        <div className="w-[30%] my-[18px]">
                            <div className=" text-white text-sm mb-[7px] mr-[7px]">
                                <span className='text-[#777]'>Diễn viên: </span>
                                <span>Lee Byung Hun, </span>
                                <span>Lee Byung Hun, </span>
                                <span>Lee Byung Hun, </span>
                                <span>Lee Byung Hun</span>
                            </div>
                            <div className=" text-white text-sm  my-[7px] mr-[7px]">
                                <span className='text-[#777]'>Diễn viên: </span>
                                <span>Lee Byung Hun, </span>
                                <span>Lee Byung Hun, </span>
                                <span>Lee Byung Hun, </span>
                                <span>Lee Byung Hun</span>
                            </div>
                            <div className="text-sm text-white my-[7px] mr-[7px]">
                                <span className='text-[#777]'>Diễn viên: </span>
                                <span>Lee Byung Hun, </span>
                                <span>Lee Byung Hun, </span>
                                <span>Lee Byung Hun, </span>
                                <span>Lee Byung Hun</span>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center justify-between mt-[31px] mb-[16px] font-bold">
                            <h3 className='w-[70%] text-white text-2xl'>Tập</h3>
                            <span className='w-[30%] text-white text-lg text-right'>Blues nơi đảo xanh</span>
                        </div>
                        <Modalsection />
                        <Modalsection />
                        <Modalsection />
                        <Modalsection />
                        <Modalsection />
                    </div>

                    <div className="">
                        <h3 className='text-white text-2xl mt-12 mb-5 font-bold'>Nội dung tương tự</h3>
                        <div className='flex flex-wrap w-full gap-3'>
                            <div className="w-[45%] min-[1024px]:w-[30%] rounded-lg">
                                <Modalcard />
                            </div>
                            <div className="w-[45%] min-[1024px]:w-[30%]">
                                <Modalcard />
                            </div>
                            <div className="w-[45%] min-[1024px]:w-[30%]">
                                <Modalcard />
                            </div>
                            <div className="w-[45%] min-[1024px]:w-[30%]">
                                <Modalcard />
                            </div>
                            <div className="w-[45%] min-[1024px]:w-[30%]">
                                <Modalcard />
                            </div>
                            <div className="w-[45%] min-[1024px]:w-[30%]">
                                <Modalcard />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h3 className='text-white text-2xl mt-12 mb-5 font-bold'>Trailer & nội dung khác</h3>

                        <div className="flex flex-wrap w-full gap-3 text-white ">
                            <div className='w-[45%] min-[1024px]:w-[30%] rounded-lg'>
                                <img src="https://source.unsplash.com/random" alt="" className='object-cover' />
                                <p className='text-center font-bold text-base'>Mùa 2 (Teaser 2): Sweet Tooth: Cậu bé gạc nai </p>
                            </div>
                            <div className='w-[45%] min-[1024px]:w-[30%] rounded-lg'>
                                <img src="https://source.unsplash.com/random" alt="" className='object-cover' />
                                <p className='text-center font-bold text-base'>Mùa 2 (Teaser 2): Sweet Tooth: Cậu bé gạc nai </p>
                            </div>
                            <div className='w-[45%] min-[1024px]:w-[30%] rounded-lg'>
                                <img src="https://source.unsplash.com/random" alt="" className='object-cover' />
                                <p className='text-center font-bold text-base'>Mùa 2 (Teaser 2): Sweet Tooth: Cậu bé gạc nai </p>
                            </div>
                            <div className='w-[45%] min-[1024px]:w-[30%] rounded-lg'>
                                <img src="https://source.unsplash.com/random" alt="" className='object-cover' />
                                <p className='text-center font-bold text-base'>Mùa 2 (Teaser 2): Sweet Tooth: Cậu bé gạc nai </p>
                            </div>
                            <div className='w-[45%] min-[1024px]:w-[30%] rounded-lg'>
                                <img src="https://source.unsplash.com/random" alt="" className='object-cover' />
                                <p className='text-center font-bold text-base'>Mùa 2 (Teaser 2): Sweet Tooth: Cậu bé gạc nai </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col pb-[32px] w-full">
                        <div className="text-white mt-12 mb-5 text-2xl flex">
                            <span className='mr-2'>Giới thiệu về </span>
                            <h3 className='font-bold'>Sweet Tooth: Cậu bé gạc nai </h3>
                        </div>
                        <div className="flex text-sm my-[7px] mr-[7px] ">
                            <span className='text-[#777777]'>Diễn viên: </span>
                            <span>Hàn Quốc,  </span>
                            <span>Hàn Quốc </span>
                            <span>Hàn Quốc </span>
                            <span>Hàn Quốc </span>
                            <span>Hàn Quốc </span>
                            <span>Hàn Quốc </span>
                        </div>

                        <div className="flex text-sm my-[7px] mr-[7px] ">
                            <span className='text-[#777777]'>Diễn viên: </span>
                            <span>Hàn Quốc,  </span>
                            <span>Hàn Quốc </span>
                            <span>Hàn Quốc </span>
                            <span>Hàn Quốc </span>
                            <span>Hàn Quốc </span>
                            <span>Hàn Quốc </span>
                        </div>
                        <div className="flex text-sm my-[7px] mr-[7px] ">
                            <span className='text-[#777777]'>Diễn viên: </span>
                            <span>Hàn Quốc,  </span>
                            <span>Hàn Quốc </span>
                            <span>Hàn Quốc </span>
                            <span>Hàn Quốc </span>
                            <span>Hàn Quốc </span>
                            <span>Hàn Quốc </span>
                        </div>
                        <div className="flex text-sm my-[7px] mr-[7px] ">
                            <span className='text-[#777777]'>Diễn viên: </span>
                            <span>Hàn Quốc,  </span>
                            <span>Hàn Quốc </span>
                            <span>Hàn Quốc </span>
                            <span>Hàn Quốc </span>
                            <span>Hàn Quốc </span>
                            <span>Hàn Quốc  </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modalcontainer
