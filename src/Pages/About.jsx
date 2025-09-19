import { useState, useEffect } from "react";
import { fetchAboutApi } from "../api/api";
import {Book} from "../Components/Book"

export default function About() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const getAboutData = async () => {
            try {
                const aboutData = await fetchAboutApi();
                console.log(aboutData)
                setData(aboutData)
            } catch (e) {
                // setError(e.error.message)
                setError(e)
                console.log(e)
            } finally {
                setError(null)
                setLoading(false)
            }
        }
        getAboutData()
    }, [])
    if (loading) return <div>Loading in about page</div>
    if (error) return <div>Error in about page</div>
    return (
        <>
            <section>
                <div className="container">
                    <div className="overflow-hidden relative">
                        <div className="opacity-0 pointer-events-none w-full">
                            <p className="text__20 opacity-40">ABOUT ME</p>
                            <h2 className="text-[40px] md:text-[46px] lg:text-[64px] xl:text-[80px] my-2">{data.title}</h2>
                            <p className="text__20 opacity-60">{data.sub_title}</p>
                        </div>
                        <div className="absolute w-full transition-all duration-700 left-0 top-0 ">
                            <p className="text__20 opacity-40">ABOUT ME</p>
                            <h2 className="text-[40px] md:text-[46px] lg:text-[64px] xl:text-[80px] my-2">{data.title}</h2>
                            <p className="text__20 opacity-60">{data.sub_title}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="grid-cols-3 grid">
                        <div className="lg:col-span-1"></div>
                        <div className="col-span-3 lg:col-span-2">
                            <div className="overflow-hidden relative">
                                <div className="w-full">
                                    <img alt={data.title} decoding="async" data-nimg="fill" className="w-full object-cover mb-[32px] servicesImageSingle" src={data.img} sizes="100vw" />
                                </div>
                            </div>
                            <h3 className="text__40 mb-[32px]">
                                {data.description}
                            </h3>
                            <div className="grid grid-cols-1 text-uppercase">
                                {data.achievements.map((achievement ,index) => {
                                    return (
                                        <div key={index} className="flex items-center justify-between py-[32px] border-b !border-Mneutral_200">
                                            <h5 className="text__64">{achievement.number}</h5><p className="text__24 opacity-40">{achievement.name}</p>
                                        </div>
                                    )
                                }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="w-full">
                        <div className="video-wrapper w-full h-[45vh] lg:h-[75vh]">
                            <iframe width="100%" height="100%" src={data.link}
                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <Book/>
        </>
    )
}