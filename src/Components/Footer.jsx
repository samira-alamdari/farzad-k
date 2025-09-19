
import { Link } from "react-router-dom";

export function Footer() {
   
    return (
        <>
            <section className="pb-6">
                <div className="container">
                    <div className="text-center mb-[56px]">
                        <p className="text__18 opacity-60 mb-2">STAY CONNECTED.</p>
                        <h5 className="text__32">Hi@farzad-k.com</h5>
                    </div>
                    <div className="flex items-center justify-between text__16 relative">
                        <p className="md:block hidden ">©️2025</p>
                        <div className="flex items-center gap-3 ss:gap-4 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                            <Link to="/Projects">PROJECTS</Link>
                            <Link to="/Article">ARTICLE</Link>
                            <Link to="/About">ABOUT</Link>
                            <Link to="/Contact#!">RESUME </Link>
                            <Link className="sm:hidden" to="/Contact">CONTACT</Link>
                        </div>
                        <Link className="sm:inline-block hidden" to="/Contact">CONTACT</Link>
                    </div>
                    <p className="text-center mt-4 opacity-40 md:hidden ">©️2025</p>
                </div>
            </section>
        </>
    )
}