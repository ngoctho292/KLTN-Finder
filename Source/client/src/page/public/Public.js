import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../../components'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Public = () => {
    return (
      <div className="flex flex-col bg-[#1E1E1E]">
        <ToastContainer />

        <div className="w-full h-[80px] fixed top-0 left-0 right-0 z-50">
          <Header />
        </div>

        <div className="w-full  border border-blue-500">
          <Outlet />
        </div>
      </div>
    );
}

export default Public
