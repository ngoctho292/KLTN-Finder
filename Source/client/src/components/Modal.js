import React from 'react'
import Modals from 'react-modal';

import icons from '../ultis/icons';
import Modalcontainer from './Modalcontainer';

const Modal = ({ isOpenModal, closeModal, data, }) => {
    const { AiOutlineClose } = icons
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxHeight: 'calc(100vh - 150px)',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
        },
    }
    return (
        <Modals
            isOpen={isOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
            scrollable={true}

        >
            <div className=''>
                <div className="relative ">
                    <Modalcontainer data={data} />
                </div>
                <button onClick={closeModal} className='absolute top-[20px] right-[20px] cursor-pointer  '>
                    <span className='w-[36px] h-[36px] rounded-full flex justify-center items-center bg-black '> <AiOutlineClose size={25} color='white' /></span>
                </button>
            </div>
        </Modals>
    )
}

export default Modal
