import React from 'react'
import { Link } from 'react-router-dom';
import { MdFavorite } from "react-icons/md";
import { FaPlay } from "react-icons/fa";


const PodcastCard = ({ mainTheme }) => {
  return (
    <>
      {/* connect using Link */}

      <Link to={"podacst/:id"} className='no-underline'>
        <div
          style={{ backgroundColor: `${mainTheme.card}` }}
          className="Card relative no-underline max-w-56 flex flex-col justify-start items-center p-4 rounded-md  shadow-2xl cursor-pointer 
          hover:scale-105
          transition-all ease-in-out duration-300
           hover:shadow-xl hover:translate-y-px hover:brightness-125"
        >
          <div>
            <div className="Top flex flex-col justify-center items-center relative h-40">
              <button
                style={{ backgroundColor: `${mainTheme.text_secondary}` }}
                className="Favourite mt-1 text-white top-2 right-1.5 p-0.5 rounded-full flex items-center absolute   z-10 shadow-green-700 backdrop-blur-sm"
              >
                <MdFavorite size={16} />
              </button>
              <div
                style={{ top: "83%", right: "10%" }}
                className="flex items-center text-white p-2.5 rounded-full z-10 bg-green-400 absolute transition-all duration-300 ease-in-out shadow-xl"
              >
                <FaPlay size={18} />
              </div>
              <img
                className="CardIMG rounded-md w-56 h-36 object-cover shadow-xl hover:shadow-2xl"
                src="https://i.scdn.co/image/ab6765630000ba8aaebf288621ea86c79d44f12f"
                alt=""
              />
            </div>
            <div className="CardInformation flex font-semibold w-full items-end pt-3.5">
              <div className="MainInfo flex w-full flex-col justify-start gap-1">
                <div
                  style={{ color: `${mainTheme.text_primary}` }}
                  className="Title max-w-full overflow-hidden text-ellipsis"
                >
                  The Tim Ferris Shown
                </div>
                <div
                  style={{ color: `${mainTheme.text_secondary}` }}
                  className="Description max-w-full overflow-hidden text-ellipsis text-xs font-normal"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
                  velit, inventore ipsa enim atque
                </div>
                <div className="CrateerInfo flex items-center justify-between mt-3.5 gap-2">
                  <div className="flex gap-2 items-center justify-center">
                    <div className="Avathar w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center">
                      N
                    </div>
                    <div
                      style={{ color: `${mainTheme.text_secondary}` }}
                      className="text-sm overflow-hidden text-ellipsis whitespace-nowrap"
                    >
                      Name
                    </div>
                  </div>
                  <div className="Views text-xs text-slate-400">12 views</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PodcastCard