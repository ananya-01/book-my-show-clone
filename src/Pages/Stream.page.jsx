
import React from 'react'
import Poster from "../components/Poster/poster.component"
import StreamHero from '../components/StreamHero/streamHero.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.compoent';
import TempPosters from '../config/TempPosters.config';
import StreamSlider from "../components/PosterSlider/StreamSlider.component";
import StreamInfo from '../components/StreamHero/StreamInfo.component';
import TempStreamPosters from '../config/TempStreamPosters.config';

const Stream = () => {

    const settings = {
        Infinity: false,
        autoplay: true,
        slidesToShow: 1,
        speed: 500,
        slidesToScroll: 1,
        InitialSlide: 0,
    responsive: [
        {
            breakpoints: 1024,
            settings: {
                slidesToShow:3,
                slidesToScroll: 2,
                Infinity: true,
            },
        },
        {
            breakpoints: 600,
            settings: {
                slidesToShow:2,
                slidesToScroll: 2,
                InitialSlide: 2
            },
        },
        {
            breakpoints: 480,
            settings: {
                slidesToShow:3,
                slidesToScroll: 1,
                // InitialSlide: 1,
            },
        },
    ],
    };
    
    return (
        <>
            <div>
                <div>
                    <StreamSlider images={TempStreamPosters}
                    config = {settings}
                    />
                </div>
                
                <div className="mx-auto px-12">
                
                <div className="w-full my-12 px-28">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/available-buy-rent-strip-web-collection-202103160404.png"
                        alt="Add"
                    />
                </div>
                <div className="flex flex-col gap-10">
                    <div className="container mx-auto lg:px-28 md:px-4 sm:px-4 my-10">
                        <PosterSlider images={TempPosters}
                        title="Premiere Of The Week" isDark={false} />
                    </div>
                    <div className="container mx-auto lg:px-28 md:px-4 sm:px-4 my-10">
                        <PosterSlider images={TempPosters}
                        title="Coming Soon" isDark={false} />
                    </div>
                    <div className="container mx-auto lg:px-28 md:px-4 sm:px-4 my-10">
                        <PosterSlider images={TempPosters}
                        title="Bundles" isDark={false} />
                    </div>
                    <div className="container mx-auto lg:px-28 md:px-4 sm:px-4 my-10">
                        <PosterSlider images={TempPosters}
                        title="Stream Recommends" isDark={false} />
                    </div>   
                </div>
            </div>
                 
            <div className="flex flex-col gap-10">
                <div className="bg-bms-800 py-12">
                <div className="container mx-auto lg:px-28 md:px-4 flex flex-col gap-3 sm:px-4">
                <div className="hidden md:flex">
                   <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/exclusives-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
                    />
                </div>
                    <PosterSlider
                     images={TempPosters}
                      title="Exclusives"
                      subtitle="Exciting titles available only on stream"
                      isDark
                    />
                </div>
                </div>
            </div>

            <div className="mx-auto px-12"> 
               <div className="flex flex-col gap-10">   
                <div className="container mx-auto lg:px-28 md:px-4 sm:px-4 my-10">
                        <PosterSlider images={TempPosters}
                        title="Trending Right Now" isDark={false} />
                </div>
                <div className="container mx-auto lg:px-28 md:px-4 sm:px-4 my-10">
                        <PosterSlider images={TempPosters}
                        title="World Cinema" isDark={false} />
                </div>
                <div className="container mx-auto lg:px-28 md:px-4 sm:px-4 my-10">
                        <PosterSlider images={TempPosters}
                        title="Missed in Theaters" isDark={false} />
                </div>
                </div>
            </div>

            <div className="flex flex-col gap-10">
                <div className="bg-bms-800 py-12">
                <div className="container mx-auto lg:px-28 md:px-4 flex flex-col gap-3 sm:px-4">
                <div className="hidden md:flex">
                   <h3 className="text-white font-bold text-xl pr-5"> Browse Movies by genre based titles </h3>
                   <div className="flex flex-row gap-5 px-2">
                   <button className="bg-red-600 w-full py-3 px-5 text-white font-semibold rounded-lg">
                        Action
                   </button>
                   <button className="bg-red-600 w-full py-3 px-5 text-white font-semibold rounded-lg">
                        Comedy
                   </button>
                   <button className="bg-red-600 w-full py-3 px-5 text-white font-semibold rounded-lg">
                        Drama
                   </button>
                   <button className="bg-red-600 w-full py-3 px-5 text-white font-semibold rounded-lg">
                        Thriller
                    </button>
                    </div>
                </div>
                </div>
                </div>
            </div>

            <div className="mx-auto px-12">
                <div className="flex flex-col gap-10">
                <div className="container mx-auto lg:px-28 md:px-4 sm:px-4 my-10">
                        <PosterSlider images={TempPosters}
                        title="Dubbed Movies" isDark={false} />
                </div>
                <div className="container mx-auto lg:px-28 md:px-4 sm:px-4 my-10">
                        <PosterSlider images={TempPosters}
                        title="Blockbusters" isDark={false} />
                </div>
                </div>
            </div>   
               
            </div>
        </>
    )
}

export default Stream;