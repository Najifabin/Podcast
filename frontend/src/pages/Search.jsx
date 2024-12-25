import React from 'react'
import { IoIosSearch } from "react-icons/io";
import DefaultCard from '../components/DefaultCard';
import { Category } from '../theme/Data';
import { Link } from 'react-router-dom';
import TopResult from '../components/TopResult';
import MoreResults from '../components/MoreResults';

const Search = ({mainTheme}) => {
  return (
    <>
      <div
        className="pb-5 px-4 py-6 flex flex-col gap-5 overflow-x-hidden overflow-y-scroll w-full h-full max-md:px-1.5 mx-md:py-2.5"
      >
        <div className="flex justify-center w-full">
          <div className="flex w-full max-w-2xl border rounded-full px-3 py-4 justify-start cursor-pointer items-center gap-1.5 border-slate-400">
            <div
              style={{ color: `${mainTheme.text_primary}` }}
              className="text-gray-200 ms-2"
            >
              <IoIosSearch />
            </div>
            <input
              style={{ color: `${mainTheme.text_secondary}` }}
              type="text"
              placeholder="Search Artists/Podcasts"
              className="w-full bg-inherit outline-none border-none text-gray-300 ms-2"
            />
          </div>
        </div>
        <div
          style={{ backgroundColor: `${mainTheme.bg}` }}
          className="container w-full py-6 flex flex-col justify-between rounded-lg "
        >
          <div
            style={{ color: `${mainTheme.text_secondary}` }}
            className="font-medium text-2xl md:text-lg "
          >
            Browse All
          </div>
          <div className="h-full mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-8 px-3 py-1.5">
              {Category.map((category) => (
                <Link
                  to={`/showpodcasts/${category.name.toLowerCase()}`}
                  style={{ textDecoration: "none" }}
                >
                  <DefaultCard category={category} />
                </Link>
              ))}
            </div>
          </div>
          {/* Topresult card conditional rendering */}
          <TopResult mainTheme={mainTheme} />
          <div className="mt-5">
            <MoreResults mainTheme={mainTheme} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Search