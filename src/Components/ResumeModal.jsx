import { Link } from "react-router-dom";
import {useResumeModal} from "../context/ResumeModalContext"
import ResumeImage from "../assets/image/glued-tape-poster-mockup.jpeg";
export function ResumeModal() {
const {isModalOpen ,toggleModal} = useResumeModal()
    return (
            <>
             <div className={`fixed w-full h-full left-0 top-0 transition-all duration-300 z-[90] bg-[#1A1A1A] ${isModalOpen ? 'opacity-[0.50]' : 'opacity-0 pointer-events-none'}`} onClick={toggleModal}>
                </div>
                <div className={`fixed z-[91] w-[90%] ss:w-[390px] bg-white p-[24px] left-1/2 -translate-x-1/2 top-1/2  transition-all duration-300 ${isModalOpen ? '-translate-y-1/2': 'translate-y-[80%] opacity-0 pointer-events-none'}`}>
                    <div className="grid grid-cols-1 gap-[24px]">
                        <img alt="Farzad Kafaei's resume" loading="lazy" decoding="async" data-nimg="fill" className="w-full object-cover servicesImageSingle" sizes="100vw" src={ResumeImage} />
                        <div className="text-center">
                            <h5 className="text__24 mb-2"></h5>
                            <p className="text__14 text-[#525252]">Last Update : 2019 - Aug</p>
                        </div>
                        <div className="text-center">
                            <Link to="https://farzad-k.com/files/farzad-k-Resume-Aug-2025.pdf" target="_blank" className="px-[24px] py-[10px] rounded-full border !border-Mneutral_900 inline-block">
                                <div className="flex items-center gap-2"><p className="text__18">Download Now</p>
                                    <img src="https://farzad-k.com/images/carbon_arrow-up-right.svg" alt="" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
    )
}