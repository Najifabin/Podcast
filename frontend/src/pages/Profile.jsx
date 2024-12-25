import React from 'react'
import PodcastCard from '../components/PodcastCard'

const Profile = ({mainTheme}) => {
  return (
    <>
      <div className=" px-5 py-6 flex flex-col gap-5 overflow-x-hidden overflow-y-scroll h-full max-md:px-1.5 mx-md:py-2.5">
        <div className="flex gap-5 p-5 justify-center w-full">
          <div className="w-20 h-20 rounded-full text-3xl bg-slate-300 flex items-center justify-center">
            N
          </div>
          <div className="flex flex-col items-start justify-center">
            <h4
              style={{ color: `${mainTheme.text_secondary}` }}
              className="Name overflow-hidden text-ellipsis whitespace-nowrap text-xl md:text-3xl"
            >
              Name
            </h4>
            <div className="text-sm md:text-xl text-slate-400">
              name@gmail.com
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: `${mainTheme.bg}` }}
          className="container px-5 py-6 flex flex-col justify-between rounded-lg "
        >
          <div
            style={{ color: `${mainTheme.text_secondary}` }}
            className="font-medium text-2xl md:text-lg "
          >
            Your Uploads
          </div>
          <div className="h-full mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-8 px-4 py-1.5">
              <PodcastCard mainTheme={mainTheme} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile