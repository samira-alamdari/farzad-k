import React, { useState } from "react";
import { Link } from "react-router-dom";
export const AwardItem =  React.memo(( {awItem ,eachAwardList , awCount}) => {
    const [opFaq ,setOpFaq] = useState(false)
    console.log(awItem)
    return (
        <div className="py-4 border-t !border-Mneutral_200" onClick={() => setOpFaq(!opFaq)}>
            <div className="grid grid-cols-2 xl:grid-cols-2 cursor-pointer">
                <div className="w-full">
                    <h5 className="text__32 opacity-40">{awItem.title}</h5>
                </div>
                <div className="grid w-full">
                    <div className="flex justify-between items-start gap-3">
                        <div className="" >
                        <div className="">
                                <div className="text__24 flex items-center gap-2">
                                    <img src={awItem.logo} className="w-[130px] h-[40px] object-contain" alt="" />
                                    <sup className="text-[12px] block font-bold">X{awCount}</sup>
                                </div>
                                <p className="text__18 opacity-40 pointer-events-none overflow-hidden transition-all hidden duration-300 max-h-screen"></p>
                            </div>
                            <div className={`grid grid-cols-1 gap-3 overflow-hidden transition-all duration-300  ${opFaq ? "max-h-screen" : "max-h-0"}`} >
                                <ul className="text__24 opacity-80 pb-3">
                                    {
                                        eachAwardList && eachAwardList.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link className="grid grid-cols-2 items-center gap-5" to={item.link} target="_blank">
                                                        <span className="text-[12px] font-semibold">{item.date}</span>
                                                        <span className="text-[12px] font-medium">{item.title}</span>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                           
                        </div>
                        <img src="https://farzad-k.com/images/Frame.svg" class={`transition-all duration-300 lg:block hidden ${opFaq ? "-rotate-180" : ""}`} alt="" />
                        
                    </div>
                </div>
            </div>
        </div>
    )
})