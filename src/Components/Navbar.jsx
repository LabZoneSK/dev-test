import React, {useContext, useState} from "react";
import {PhotosContext} from "../context/photos.context";
import {FaSearch} from "react-icons/fa";

export default function Navbar() {
    const {changeTag} = useContext(PhotosContext)

    const [val, setVal] = useState('');

    const handleClick = () => {
        val && changeTag(val)
        setVal('')
    }
    return (
        <div
            className={'md:h-[65px] bg-[#2C2C2C] text-white text-[28px] flex flex-col md:flex-row md:items-center justify-between px-[25px] py-[25px] md:py-0'}>
            <h1 className={'mb-[10px] md:mb-0'}>Flick app</h1>
            <div className={'flex gap-[25px]'}>
                <div className={'text-[#2C2C2C] text-[16px] leading-[20px]'}>
                    <input type="text" value={val} onChange={(e) => setVal(e.target.value)}
                           className={'bg-[#F5F5F5] h-[35px] w-full md:w-[200px] rounded-[3px] pl-[15px] focus:outline-none caret-primary'}
                           placeholder={'Search...'}/>
                </div>
                <span><FaSearch onClick={handleClick}
                                className={'hover:text-primary transition-default cursor-pointer'}/></span>
            </div>
        </div>
    )
}
