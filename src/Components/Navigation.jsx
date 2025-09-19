import { Link } from "react-router-dom"
import {useResumeModal} from "../context/ResumeModalContext"
export function Navigation() {
    const { toggleModal} = useResumeModal()
    return (
        <div className="fixed w-full py-4 bg-white z-[80] border-b !border-Mgrayscale_200 lg:!border-none">
            <div className="overflow-hidden container">
                <div className="flex items-center justify-between relative text__16 uppercase transition-all duration-700 ">
                    <Link className="text-Mgrayscale_900" to="/">Farzad Kafaei</Link>
                    <div className="hidden md:flex items-center justify-center gap-4 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                        <Link to="/Projects">PROJECTS</Link>
                        {/* <Link to="/Article">ARTICLE</Link> */}
                        <Link to="/About">ABOUT</Link>
                        <div className="cursor-pointer" onClick={toggleModal}>RESUME </div>
                    </div>
                    <Link className="md:block hidden" to="/Contact">CONTACT</Link>
                    <div className="font-medium text__14 md:hidden cursor-pointer">MENU</div>
                </div>
            </div>
        </div>

    )
}