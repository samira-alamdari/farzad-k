import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBookApi } from "../api/api"
export function Book() {

    const [bookData, setBookData] = useState({});

    useEffect(() => {
        const getBookData = async () => {
            try {
                const fetchedData = await fetchBookApi();
                setBookData(fetchedData);
            } catch (error) {
                console.error("Failed to fetch book data:", error);
            }
        }
        getBookData()
    }, [])
    console.log(bookData)
    return (
        <section>
            <div className="container">
                <h4 className="text-[24px] ss:text-[36px] md:text-[46px] lg:text-[64px] xl:text-[80px] xl:ml-[144px]" dangerouslySetInnerHTML={{ __html: bookData.title }}></h4>
                <div className="flex justify-end py-6">
                    <Link className="flex items-center gap-3" to="/Contact">
                        <div className="relative overflow-hidden inline-block">
                            <div className="bannerImageWrap lg:w-[200px] h-[200px] w-[110px] md:block hidden">
                                <img alt="Farzad Kafaei" data-nimg="fill" src={bookData.cta_image} sizes="100vw" />
                            </div>
                            {/* <div className="absolute w-full h-full left-0 top-0 bg-black transition-all duration-500" ></div>
                            <img className="absolute left-1/2 -translate-x-1/2 top-1/2" src="https://farzad-k.com/images/logo-sign-farzad-k-small.svg" alt="" /> */}
                        </div><span className="text-[36px] xx:text-[56px] ss:text-[64px] lg:text-[110px] xl:text-[136px]">Book Now.</span>
                        <div className="overflow-hidden relative w-[56px] ss:w-[86px] xs:w-[110px] lg:w-[140px] xl:w-[160px] h-[56px] ss:h-[86px] xs:h-[110px] lg:h-[140px] xl:h-[160px]">
                            <img src="https://farzad-k.com/images/carbon_arrow-up-right copy.svg" alt="" className="w-[56px] ss:w-[86px] xs:w-[110px] lg:w-[140px] xl:w-auto absolute" />
                            <img src="https://farzad-k.com/images/carbon_arrow-up-right copy 2.svg" alt="Arrow Up Right" className="w-[56px] ss:w-[86px] xs:w-[110px] lg:w-[140px] xl:w-auto absolute" />
                        </div>
                    </Link>
                </div>
                <p className="text__24 opacity-60">

                    <span className="ml-8">{bookData.ftext}</span>

                </p>
            </div>
        </section >
    )
}