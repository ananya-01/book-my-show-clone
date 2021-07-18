import React from "react";


// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.compoent";

//config
import TempPosters from "../config/TempPosters.config";

const HomePage = () => {
  return (
    <>
    <div className="flex flex-col gap-10">
      <div className="container mx-auto lg:px-28 md:px-4 sm:px-4">
        <h1 className="text-2xl font-bold text-gray-800 my-3">
          The Best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className = "bg-bms-800 py-12">
        <div className="container mx-auto lg:px-28 flex flex-col gap-3 md:px-4 sm:px-4">
          <div className="hidden md:flex">
          <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
              />
          </div>
            <PosterSlider 
            images={TempPosters} 
            title="Premieres" 
            subtitle="Brand new release on every Friday." 
            isDark/>
        </div>
      </div>
    </div>

    <div className="container mx-auto lg:px-28 my-10 md:px-4 sm:px-4">
        <PosterSlider 
            images={TempPosters} 
            title="Online Streaming Events" 
            isDark ={false}
            />
    </div>
    
    <div className="container mx-auto lg:px-28 my-10 md:px-4 sm:px-4">
        <PosterSlider 
            images={TempPosters} 
            title="Outdoor Events" 
            isDark ={false}
            />
    </div>

    <div className="container mx-auto lg:px-28 my-10 md:px-4 sm:px-4">
        <PosterSlider 
            images={TempPosters} 
            title="Laughter Therapy" 
            isDark ={false}
            />
    </div>

    <div className="container mx-auto lg:px-28 my-10 md:px-4 sm:px-4">
        <PosterSlider 
            images={TempPosters} 
            title="Popular Events" 
            isDark ={false}
            />
    </div>

    <div className="container mx-auto lg:px-28 my-10 md:px-4 sm:px-4">
        <PosterSlider 
            images={TempPosters} 
            title="The Latest Plays" 
            isDark ={false}
            />
    </div>

    <div className="container mx-auto lg:px-28 my-10 md:px-4 sm:px-4">
        <PosterSlider 
            images={TempPosters} 
            title="Top Games and Sports Events" 
            isDark ={false}
            />

    </div>

    <div className="container mx-auto lg:px-28 my-10 md:px-4 sm:px-4">
        <PosterSlider 
            images={TempPosters} 
            title="Explore Fun Activities" 
            isDark ={false}
            />
    </div>
    
        
    </>
  );
};

export default HomePage;