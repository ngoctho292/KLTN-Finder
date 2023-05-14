import React from 'react'
import { Modalsection, Banner, Modalcard } from './'
const Modalcontainer = ({ data }) => {
    // console.log(data?.release_date[0]);
    return (
        <div className=" bg-[#181818] text-white ">
            <div className="max-w-[850px] w-full ">
                <Banner banerModal data={data} />
                <div className="px-12">
                    <div className="flex">
                        <div className="w-[70%] flex flex-col ">
                            <div className="flex text-base mt-[18px]">
                                {/* <span className="mr-2 text-[#46D369]">Độ trùng: 94%</span> */}
                                <span className="mr-2 text-white">
                                    {`${data?.release_date[0][0]}${data?.release_date[0][1]}${data?.release_date[0][2]}${data?.release_date[0][3]}`}
                                </span>
                                {data?.episodes.length !== 0 && <span className="mr-2 text-white">{`${data?.episodes.length + 1} Tập`}</span>}

                                <span className="mr-2  px-[0.4rem] border text-white border-white bg-transparent flex justify-center items-center">
                                    HD
                                </span>
                            </div>
                            <div className="flex text-sm mb-[26px]">
                                <span className="  mr-2 px-[0.4rem] border text-white border-white bg-transparent flex justify-center items-center">
                                    16+
                                </span>
                                <span className=" text-white">ngôn ngữ</span>
                            </div>
                            <div className="text-sm text-white ">
                                <p className="">
                                    {data?.overview}
                                </p>
                            </div>
                        </div>
                        <div className="w-[30%] my-[18px]">
                            <div className=" text-white text-sm mb-[7px] mr-[7px]">
                                <span className="text-[#777]">Diễn viên: </span>
                                {data?.casts.slice(0, 5).map((item, index) => (
                                    <span key={item._id}>{`${item.name}${index < 4 ? ', ' : ''}`}</span>
                                ))}
                            </div>
                            <div className=" text-white text-sm  my-[7px] mr-[7px]">
                                <span className="text-[#777]">Thể loại: </span>
                                {data?.genres.slice(0, 5).map((item, index) => (
                                    <span>{`${item.name}${index < 4 ? ', ' : ''}`}</span>
                                ))}
                            </div>
                            <div className="text-sm text-white my-[7px] mr-[7px]">
                                <span className="text-[#777]">Chương trình này : </span>

                            </div>
                        </div>
                    </div>
                    <div className="">
                        {data?.episodes.length !== 0 && (
                            <div className="flex items-center justify-between mt-[31px] mb-[16px] font-bold">
                                <h3 className="w-[70%] text-white text-2xl">Tập </h3>
                                <span className="w-[30%] text-white text-lg text-right">{data?.duration}</span>
                            </div>
                        )}
                        {data?.episodes.map((item, index) => (
                            <Modalsection episodes={item} key={item?._id} index={index} />
                        ))}
                    </div>

                    <div className="">
                        <h3 className="text-white text-2xl mt-12 mb-5 font-bold">Nội dung tương tự</h3>
                        <div className="flex flex-wrap w-full gap-3">
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
                        <h3 className="text-white text-2xl mt-12 mb-5 font-bold">Trailer & nội dung khác</h3>

                        <div className="flex flex-wrap w-full gap-3 text-white ">
                            <div className="w-[45%] min-[1024px]:w-[30%] rounded-lg">
                                <img src="https://source.unsplash.com/random" alt="" className="object-cover" />
                                <p className="text-center font-bold text-base">
                                    Mùa 2 (Teaser 2): Sweet Tooth: Cậu bé gạc nai{' '}
                                </p>
                            </div>
                            <div className="w-[45%] min-[1024px]:w-[30%] rounded-lg">
                                <img src="https://source.unsplash.com/random" alt="" className="object-cover" />
                                <p className="text-center font-bold text-base">
                                    Mùa 2 (Teaser 2): Sweet Tooth: Cậu bé gạc nai{' '}
                                </p>
                            </div>
                            <div className="w-[45%] min-[1024px]:w-[30%] rounded-lg">
                                <img src="https://source.unsplash.com/random" alt="" className="object-cover" />
                                <p className="text-center font-bold text-base">
                                    Mùa 2 (Teaser 2): Sweet Tooth: Cậu bé gạc nai{' '}
                                </p>
                            </div>
                            <div className="w-[45%] min-[1024px]:w-[30%] rounded-lg">
                                <img src="https://source.unsplash.com/random" alt="" className="object-cover" />
                                <p className="text-center font-bold text-base">
                                    Mùa 2 (Teaser 2): Sweet Tooth: Cậu bé gạc nai{' '}
                                </p>
                            </div>
                            <div className="w-[45%] min-[1024px]:w-[30%] rounded-lg">
                                <img src="https://source.unsplash.com/random" alt="" className="object-cover" />
                                <p className="text-center font-bold text-base">
                                    Mùa 2 (Teaser 2): Sweet Tooth: Cậu bé gạc nai{' '}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col pb-[32px] w-full">
                        <div className="text-white mt-12 mb-5 text-2xl flex">
                            <span className="mr-2">Giới thiệu về </span>
                            <h3 className="font-bold">{data?.title} </h3>
                        </div>
                        <div className="text-sm  ">
                            <span className="text-[#777777]">Diễn viên: </span>
                            {data?.casts.map((item, index) => (
                                <span key={item._id}>{`${item.name}${index < 4 ? ', ' : ''}`}</span>
                            ))}
                        </div>

                        <div className=" text-sm my-[7px] mr-[7px] w-full ">
                            <span className="text-[#777777]">Thể loại: </span>
                            {data?.genres.map((item, index) => (
                                <span key={item._id}>{`${item.name}${index < 4 ? ', ' : ''}`}</span>
                            ))}
                        </div>
                        <div className=" text-sm my-[7px] mr-[7px] ">
                            <span className="text-[#777777]">Chương trình này: </span>
                        </div>
                        <div className=" text-sm my-[7px] mr-[7px] ">
                            <span className="text-[#777777]">Xếp hạng độ tuổi: </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modalcontainer
