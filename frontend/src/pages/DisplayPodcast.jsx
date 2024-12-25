import React from 'react'
import PodcastCard from '../components/PodcastCard';


const DisplayPodcast = ({mainTheme}) => {
  return (
    <>
      <div className=" px-5 py-6 flex flex-col gap-5 overflow-x-hidden overflow-y-scroll h-full max-md:px-1.5 mx-md:py-2.5">
        <div
          style={{ backgroundColor: `${mainTheme.bg}` }}
          className="container px-5 py-6 flex flex-col justify-between rounded-lg "
        >
          <div
            style={{ color: "#b1b2b3" }}
            className="font-medium text-2xl md:text-lg "
          >
            Type
          </div>
          <div className="h-full mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-8 px-1 py-1.5">
              <PodcastCard mainTheme={mainTheme} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayPodcast