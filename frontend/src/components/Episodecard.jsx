import React from 'react'
import { FaPlay } from 'react-icons/fa';

const Episodecard = ({mainTheme}) => {
  return (
    <>
      <div
        style={{ backgroundColor: `${mainTheme.card}` }}
        className="flex flex-col items-start md:flex-row md:items-center p-5 rounded-md gap-5 cursor-pointer hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out hover:brightness-125"
      >
        <div className="relative w-28 h-28">
          <img
            style={{ backgroundColor: `${mainTheme.text_secondary}` }}
            className="w-28 h-28 rounded-md object-cover"
            src="https://i.scdn.co/image/ab6765630000ba8a5502c1cc6a793e4a6bf97faf"
          />
            <FaPlay
              style={{
                position: "absolute",
                top: "26px",
                left: "26px",
                color: "white",
                width: "50px",
                height: "50px",
              }}
              size={18}
            />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div
            style={{ color: `${mainTheme.text_primary}` }}
            className="Title w-full text-xl font-extrabold flex  justify-between"
          >
            The Tim Ferris Shown
          </div>
          <div
            style={{ color: `${mainTheme.text_secondary}` }}
            className="Description text-sm font-semibold"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
            velit, inventore ipsa enim atque Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Nemo vel ipsam nihil architecto
            itaque, nam blanditiis, tempora, sit laborum eum nobis cum in quo
            quisquam sint! Similique voluptates odio illo?
          </div>
        </div>
      </div>
    </>
  );
}

export default Episodecard