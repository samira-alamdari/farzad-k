import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from '../slices/projectSlice';
import { Book } from '../Components/Book';

export default function ProjectSingle() {
    const { Id } = useParams();
    const { projects, status, error } = useSelector((state) => state.projects);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(getProjects());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading projects...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }
    const singleProject = projects.find(project => project.id.toString() === Id)
    // console.log(singleProject)
    const cleanHtml = (htmlString) => {
        // Regular expressions to remove specific WordPress block comments and spacer divs.
        let cleaned = htmlString.replace(/<!-- wp:.*? -->/g, '');
        cleaned = cleaned.replace(/<div style="height:30px" aria-hidden="true" class="wp-block-spacer">.*?<\/div>/g, '');
        return cleaned;
      };
    return (
        <>
            <section>
                <div className="container">
                    <div className="grid-cols-3 grid">
                        <div className="col-span-2">
                            <div className="overflow-hidden relative">
                                <div className="opacity-0 pointer-events-none w-full">
                                    <Link to="/Projects">
                                        <div className="flex items-center gap-2">
                                            <img src="https://farzad-k.com/images/Back.svg" alt="" />
                                            <p className="opacity-40">BACK</p>
                                        </div>
                                    </Link>
                                    <h2 className="text__64 my-2">{singleProject.title}</h2>
                                    <p className="text__20 opacity-60">{singleProject.fields.date}</p>
                                </div>
                                <div className="absolute w-full transition-all duration-700 left-0 top-0 ">
                                    <Link to="/projects">
                                        <div className="flex items-center gap-2"><img src="https://farzad-k.com/images/Back.svg" alt="" />
                                            <p className="opacity-40">BACK</p>
                                        </div>
                                    </Link>
                                    <h2 className="text__64 my-2">{singleProject.title}</h2>
                                    <p className="text__20 opacity-60">{singleProject.fields.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden relative">
                        <div className=" w-full">
                            <img alt={singleProject.title} src={singleProject.image.toString()} loading="lazy" decoding="async" data-nimg="fill" className="w-full object-cover mt-[2rem] mb-[2rem] servicesImageSingle" sizes="100vw" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-[2rem]">
                        {
                            singleProject.fields.contents && 
                            singleProject.fields.contents.map(item => {
                                return (
                                    <div key={item.title} className="grid gap-y-4 grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-2">
                                            <p className="text__20 opacity-40">{item.title}</p>
                                        </div>
                                        <div className="md:col-span-3">
                                            <h5 className="text__24">{item.content}</h5>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="grid gap-y-4 grid-cols-1 md:grid-cols-5">
                            <div className="md:col-span-2">
                            </div>
                            <div className="md:col-span-3"><div className="grid grid-cols-1">
                                {
                                    singleProject.fields.project_details &&
                                    singleProject.fields.project_details.map(item => {
                                        return (
                                            <div key={item.name} className="flex items-center justify-between py-[32px] border-b !border-Mneutral_200 gap-5">
                                                <h5 className="text-[14px] ss:text-[18px] md:text-[20px] lg:text-[24px] opacity-40">{item.name}</h5>
                                                <p className="text-[14px] ss:text-[18px] md:text-[20px] lg:text-[24px] text-right">{item.text}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="text__18 container"  dangerouslySetInnerHTML={{ __html: cleanHtml(singleProject.content) }}>
                  
                </div>
            </section>
            <Book/>
        </>
    )
}