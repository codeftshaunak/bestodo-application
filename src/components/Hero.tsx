import React, { useEffect } from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Hero: React.FC = () => {
    useEffect(() => {
        const carouselItems = Array.from(document.querySelectorAll('[data-carousel-item]'));
        const prevButton: any = document.querySelector('[data-carousel-prev]');
        console.log(prevButton);

        const nextButton: any = document.querySelector('[data-carousel-next]');
        let activeIndex = 0;
        console.log(activeIndex);

        const setActiveItem = (index: any) => {
            carouselItems.forEach((item, i) => {
                item.classList.toggle('hidden', i !== index);
            });
        };

        const goToPrev = () => {
            activeIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length;
            setActiveItem(activeIndex);
        };

        const goToNext = () => {
            activeIndex = (activeIndex + 1) % carouselItems.length;
            setActiveItem(activeIndex);
        };

        prevButton.addEventListener('click', goToPrev);
        nextButton.addEventListener('click', goToNext);
    }, []);

    return (
        <div>
            <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div className="bg-gray-50 dark:bg-[#1F2937] border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8 text-center">
                        <a href="#" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                            Make Your Day More Productive
                        </a>
                        <div className="image">
                            <img src="plan.png" alt="" className='block w-96 m-auto' />
                        </div>
                        <h1 className="text-gray-900 dark:text-white text-2xl md:text-3xl text-center mb-2 ">Organize Your Work From Now With <span className='text-[#E1306C]'> <b>bes(t)odo.</b> </span> </h1>

                        {/* <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p> */}
                        <a href="todo">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#1F2937] rounded-md group-hover:bg-opacity-0">
                                    Get Start Now
                                </span>
                            </button>
                        </a>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
                            <div className='py-4'>
                                <iframe className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl" src="https://www.youtube.com/embed/mp0T6ey0H2c" title="The Tragic Cost of a Toxic Relationship: One Woman&#39;s Story of Love, Loss, and Survival" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </section>
                        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                            <a href="#" className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"></path>
                                </svg>
                                Quote That Help You To Grow
                            </a>

                            <div id="gallery" className="relative w-full" data-carousel="slide">
                                {/* <!-- Carousel wrapper --> */}
                                <div className="relative h-56 overflow-hidden rounded-lg md:h-auto">
                                    <div className="duration-700 ease-in-out" data-carousel-item>
                                        <br />
                                        <h1 className='text-xl'>Quote -01</h1>
                                        <div className="inline-flex items-center justify-center w-full">
                                            <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                                            <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                                                <svg aria-hidden="true" className="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                                            </div>
                                        </div>
                                        <p className='font-bold'>“If you are on social media, and you are not learning, not laughing, not being inspired or not networking, then you are using it wrong.”</p>
                                        <br />
                                        <span className='text-gray'>―Germany Kent</span>
                                    </div>

                                    <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                                        <br />
                                        <h1 className='text-xl'>Quote -02</h1>
                                        <div className="inline-flex items-center justify-center w-full">
                                            <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                                            <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                                                <svg aria-hidden="true" className="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                                            </div>
                                        </div>
                                        <p className='font-bold'>“Sometimes our stop-doing list needs to be bigger than our to-do list.”</p>
                                        <br />
                                        <span className='text-gray'>-Patti Digh, Four-Word Self-Help: Simple Wisdom For Complex Lives</span>
                                    </div>

                                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                        <br />
                                        <h1 className='text-xl'>Quote -03</h1>
                                        <div className="inline-flex items-center justify-center w-full">
                                            <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                                            <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                                                <svg aria-hidden="true" className="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                                            </div>
                                        </div>
                                        <p className='font-bold'>““Before you eat the elephant, make sure you know what parts you want to eat.”</p>
                                        <br />
                                        <span className='text-gray'>―Todd Stocker, Refined: Turning Pain Into Purpose</span>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="absolute top-10 -left-10 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                    data-carousel-prev
                                >
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                        <svg
                                            aria-hidden="true"
                                            className="w-6 h-6 text-white dark:text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                                        </svg>
                                        <span className="sr-only">Previous</span>
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    className="absolute top-10 -right-10 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                    data-carousel-next
                                >
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                        <svg
                                            aria-hidden="true"
                                            className="w-6 h-6 text-white dark:text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                        <span className="sr-only">Next</span>
                                    </span>
                                </button>
                            </div>
                            <br />
                            <div className='text-center'>
                                <a
                                    href="#"
                                    className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-sm inline-flex items-center"
                                >
                                    Visit Us On Instagram & Facebook For Make Your Growth Alive.

                                    <div className="flex items-center ml-2 text-center">
                                        <FaInstagram className="w-7 h-7 mr-1 text-[#E1306C] hover:text-[#8e2447] transition-colors duration-300" />
                                        <FaFacebook className="w-6 h-6 hover:text-[#1877F2] transition-colors duration-300" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
