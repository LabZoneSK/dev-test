import React from "react";

export default function Navbar() {
    return (
        <div className={'md:h-[65px] bg-[#2C2C2C] text-white text-[28px] flex flex-col md:flex-row md:items-center justify-between px-[25px]'}>
            <h1>Flick app</h1>
            <div className={'text-[#2C2C2C] text-[16px] leading-[20px]'}>
                <input type="text" className={'bg-[#F5F5F5] h-[35px] w-[200px] rounded-[3px] pl-[15px] focus:outline-none'} placeholder={'Search...'}/>
            </div>
        </div>
    )
}
