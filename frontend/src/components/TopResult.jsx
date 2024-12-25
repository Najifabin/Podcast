import React from 'react'
import { Link } from 'react-router-dom';

const TopResult = ({mainTheme}) => {
  return (
    <>
      <Link
        to={"/podcast/:id"}
        className={`flex flex-col no-underline rounded-md gap-3 h-min ${mainTheme.card} shadow-xl cursor-pointer hover:scale-105 hover:transition-all hover:ease-out hover:duration-300 hover:brightness-125 sm:w-[500px]  p-4`}
      >
        <img
          className="object-cover rounded-md shadow w-1/2"
          src="https://i.scdn.co/image/ab6765630000ba8aaebf288621ea86c79d44f12f"
          alt="topimage"
        />
        <div
          style={{ color: `${mainTheme.text_primary}` }}
          className="text-2xl font-bold"
        >
          The Tim Ferris Show
        </div>
        <div className="flex gap-3 ">
          <h6
            style={{ color: `${mainTheme.text_primary}` }}
            className="text-xs md:text-sm "
          >
            12 Views
          </h6>
          <h6
            style={{ color: `${mainTheme.text_primary}` }}
            className="text-xs md:text-sm "
          >
            12 days ago
          </h6>
          <h5
            className="text-xs sm:text-sm"
            style={{ marginLeft: "18px", color: `${mainTheme.text_primary}` }}
          >
            Name
          </h5>
        </div>
        <div
          style={{ color: ` ${mainTheme.text_secondary}` }}
          className="max-w-full -mt-3 text-sm overflow-hidden text-ellipsis"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          explicabo, autem quam, illo repellat quae totam sint animi nulla qui
          cupiditate. Saepe ut cupiditate iure tenetur reprehenderit mollitia
          magnam nemo?
        </div>
      </Link>
    </>
  );
}

export default TopResult