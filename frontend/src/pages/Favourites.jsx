import React from 'react'
import PodcastCard from '../components/PodcastCard'

const Favourites = ({mainTheme}) => {
  return (
    <>
      <div className="pb-10 px-5 py-6 flex flex-col gap-5 overflow-x-hidden overflow-y-scroll h-full max-md:px-1.5 mx-md:py-2.5">
        <div
          style={{ backgroundColor: `${mainTheme.bg}` }}
          className="container px-4 py-6 flex flex-col justify-between rounded-lg "
        >
          <div
            style={{ color: `${mainTheme.text_secondary}` }}
            className="font-medium text-2xl md:text-lg "
          >
            Favourites
          </div>
          <div className="flex justify-center xl:justify-normal ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-8 px-2 py-1.5  justify-center items-center">
              <PodcastCard mainTheme={mainTheme} />
              <PodcastCard mainTheme={mainTheme} />
              <PodcastCard mainTheme={mainTheme} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Favourites