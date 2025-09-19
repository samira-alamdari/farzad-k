import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from '../slices/projectSlice';
import { useEffect } from 'react';
import { Link } from "react-router-dom"
export default function Projects() {
    const dispatch = useDispatch();

    // Use useSelector to get the 'projects' slice from the store
    const { projects, status, error } = useSelector((state) => state.projects);

    // Fetch the data when the component mounts
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
    // console.log(projects)
    return (
        <div className="smooth-scrollbar" data-scrollbar="true">
            <div className="scroll-content" >
                <div className="w-full overflow-hidden mt-[64px] lg:mt-[80px]">
                    <section>
                        <div className="container">
                            <div className="overflow-hidden relative">
                                <div className="opacity-0 pointer-events-none w-full">
                                    <h3 className="text-[40px] md:text-[46px] lg:text-[64px] xl:ext-[80px]">Selected <br className="lg:block hidden" /> Work.</h3>
                                </div>
                                <div className="absolute w-full transition-all duration-700 left-0 top-0 ">
                                    <h3 className="text-[40px] md:text-[46px] lg:text-[64px] xl:ext-[80px]">Selected <br className="lg:block hidden" /> Work.</h3>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="projectsContainer">
                        {
                            projects.map((project ,index) => {
                                return (
                                    <section className={`projectWrap ${index % 2 === 0 ? "even" : ''}`} key={project.id}>
                                        <div className="container">
                                            <div className="overflow-hidden relative">
                                                <div className=" w-full">
                                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                                        <div className="col-span-2 lg:col-span-1">
                                                            <h5 className="text__40">{project.title}</h5>
                                                            <p className="text__18 opacity-60 mt-3 mb-8">{project.excerpt}</p>
                                                            <Link className="inline-block px-[24px] py-[10px] rounded-full border !border-Mneutral_900" 
                                                            to={`/Projects/${project.id}`}>
                                                            <div className="flex items-center gap-2 text__18">DETAILS
                                                                <img src="https://farzad-k.com/images/carbon_arrow-up-right (1).svg" alt="" /></div>
                                                            </Link>
                                                        </div>
                                                        <div className="projectMedia">
                                                            <img alt={project.title} loading="lazy" decoding="async" data-nimg="fill" className="w-full object-cover servicesImageSingle" sizes="100vw" src={project.image.toString()} />
                                                        </div>
                                                        <div className="projectMedia">
                                                            <img alt={project.title} loading="lazy" decoding="async" data-nimg="fill" className="w-full object-cover servicesImageSingle" sizes="100vw" src={project.fields.second_photo.toString()} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div >
    )
}