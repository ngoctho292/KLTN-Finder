import React from 'react'

const Modalsection = () => {
    return (
        <div className="p-4 flex text-white items-center justify-between  w-full ">
            <h3 className="px-3  text-[24px]">1</h3>
            <img
                src="https://source.unsplash.com/random"
                alt="Han Su và Eun Hui"
                className="object-contain w-[130px] h-[73px]"
            />
            <div className="flex flex-col">
                <div className="flex items-center justify-between  px-4 pt-4 pb-[8px]">
                    <span className="text-base font-bold">Han Su và Eun Hui 1</span>
                    <span className="text-base font-semibold">56p</span>
                </div>
                <p className="px-[14px] pb-[14px]">
                    Do gặp khó khăn về tài chính, Choi Han Su quyết định rời thành phố về quê. Anh bất ngờ gặp lại cô
                    bạn Jung Eun Hui cùng lớp ngày xưa.
                </p>
            </div>
        </div>
    );
}

export default Modalsection
