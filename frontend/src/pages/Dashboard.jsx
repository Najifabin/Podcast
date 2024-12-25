import React from 'react'
import { Link } from 'react-router-dom';
import PodcastCard from '../components/PodcastCard';

const Dashboard = ({mainTheme}) => {
  return (
    <>
      <div className=" px-4 py-6 flex flex-col gap-5 overflow-x-hidden overflow-y-scroll h-full max-md:px-1.5 mx-md:py-2.5">
        <div
          style={{ backgroundColor: `${mainTheme.bg}` }}
          className="container px-4 py-6 flex flex-col justify-between rounded-lg"
        >
          <div
            style={{ color: `${mainTheme.text_secondary}` }}
            className="flex font-medium text-2xl md:text-lg  justify-between items-center"
          >
            Most Popular
            <Link to={"/showpodcast/mostpopular"} className="no-underline">
              <span className="text-green-500 text-base md:text-sm">
                Show all
              </span>
            </Link>
          </div>
          <div className="flex justify-center  ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-8 px-4 py-1.5  justify-center items-center">
              <PodcastCard mainTheme={mainTheme} />
              <PodcastCard mainTheme={mainTheme} />
              <PodcastCard mainTheme={mainTheme} />
              <PodcastCard mainTheme={mainTheme} />
              <PodcastCard mainTheme={mainTheme} />
            </div>
          </div>
        </div>

        {/* comedy */}
        <div
          style={{ backgroundColor: `${mainTheme.bg}` }}
          className="container px-4 py-6 flex flex-col justify-between rounded-lg"
        >
          <div
            style={{ color: `${mainTheme.text_secondary}` }}
            className="flex font-medium text-2xl md:text-lg  justify-between items-center"
          >
            Most Popular
            <Link to={"/showpodcast/mostpopular"} className="no-underline">
              <span className="text-green-500 text-base md:text-sm">
                Show all
              </span>
            </Link>
          </div>
          <div className="flex justify-center  ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-8 px-4 py-1.5  justify-center items-center">
              <PodcastCard mainTheme={mainTheme} />
              <PodcastCard mainTheme={mainTheme} />
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

export default Dashboard