import React from "react";


// component
import Posterplay from "../components/Poster/posterplay.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";
import StickyFooter from "../components/Footer/footer";

const Plays = () => {
  
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Plays in Bengaluru</h2>
            <div className="flex flex-wrap lg:mr-20">
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
            <Posterplay
              src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
              title="Kanthamati"
              subtitle="Telugu -> ₹100" />
            </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
              <Posterplay
              src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312831-rzdltgpbpx-portrait.jpg"
              title="Admission- 31st July (Saturday)"
              subtitle="English -> ₹199"
              />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
              <Posterplay
              src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309176-acvpbmcyev-portrait.jpg"
              title="Sri Venkateswar Udbhavam"
              subtitle="Telugu-> ₹100"
              />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
              <Posterplay
              src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311722-azatyzfqut-portrait.jpg"
              title="TVK Presents Amarar Kalki"
              subtitle="Tamil -> ₹199"
              />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
              <Posterplay
              src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311043-krdlmqnaev-portrait.jpg"
              title="Ellamae Thamash Than"
              subtitle="Tamil -> ₹150"
              />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
              <Posterplay
              src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311720-cxaftsvppt-portrait.jpg"
              title="TVK presents Amarar Kalki"
              subtitle="Tamil -> ₹199"
              />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
              <Posterplay
              src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309050-fsgpqjlfhw-portrait.jpg"
              title="Bhaktha Prahlada"
              subtitle="Telugu -> ₹100"
              />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
              <Posterplay
              src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312471-fxjdfruzje-portrait.jpg"
              title="Tvk Cultural presents Ponniyin"
              subtitle="Tamil -> ₹300"
              />
              </div>
            </div>
          </div>

          <div className="lg:w-3/12 ">
            <h2 className="text-2xl font-bold mb-4 ml-20">Filters</h2>
            <div>
              <PlaysFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
              <PlaysFilter
                title="Language"
                tags={["Tamil", "Telugu", "English","Hindi"]}
              />
               <PlaysFilter
                title="Categories"
                tags={["Theatre"]}
              />
               <PlaysFilter
                title="Genres"
                tags={["Drama", "Adaptation", "Comedy","Historical","Mythological","Online Streaming Plays"]}
              />
               <PlaysFilter
                title="More Filters"
                tags={["Online Streaming", "Kids Allowed", "Outdoor Events"]}
              />
              <PlaysFilter
               title="Price"
               tags={["Free", "0-500", "501-2000","Above 2000"]}
             />
            </div>
          </div>
        </div>
      </div>
      <StickyFooter />
    </>
  );
};

export default Plays;