import React from 'react'
import { Link } from 'react-router-dom'

const MoreResults = ({mainTheme}) => {
  return (
    <>
      <Link
        to={"/podcast/:id"}
        style={{ backgroundColor: `${mainTheme.bgLight}` }}
        className="flex no-underline items-center p-2 rounded-md gap-3 hover:cursor-pointer hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out hover:brightness-125"
      >
        <img
          className="h-20 w-28 md:h-24 rounded-lg md:w-40 object-cover"
          src="https://i.scdn.co/image/ab6765630000ba8aaebf288621ea86c79d44f12f"
          alt=""
        />
        <div className="flex flex-col gap-2">
          <div
            style={{ color: `${mainTheme.text_primary}` }}
            className="flex flex-col"
          >
            The Tim Ferris Show
          </div>
          <div className="flex gap-2">
            <h4
              style={{
                marginRight: "12px",
                color: `${mainTheme.text_secondary}`,
              }}
              className="text-xs md:text-sm"
            >
              Creater Name
            </h4>
            <h6
              style={{ color: `${mainTheme.text_secondary}` }}
              className="text-xs md:text-sm "
            >
              12 Views
            </h6>
            <h6
              style={{ color: `${mainTheme.text_secondary}` }}
              className="text-xs md:text-sm "
            >
              12 days ago
            </h6>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MoreResults