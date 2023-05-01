import React from 'react'


const Section = ({ height, img }) => {
    return (
        <div>
            <img src={img} alt="movies" className={`w-[240px] object-cover rounded-md h-[${height}px] `} />
        </div>
    )
}

export default Section
