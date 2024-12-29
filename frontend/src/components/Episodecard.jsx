import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa';
import Videoplayer from './Videoplayer';
import SERVER_BASE_URL from '../services/serverUrl';
import Audioplayer from './Audioplayer';


const Episodecard = ({mainTheme,episode,img,type}) => {
  const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <div
        style={{ backgroundColor: `${mainTheme.card}` }}
        className="w-full flex flex-col items-start md:flex-row md:items-center p-5 rounded-md gap-5 cursor-pointer hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out hover:brightness-125"
      >
        <div className="relative w-28 h-28">
          <img
            style={{ backgroundColor: `${mainTheme.text_secondary}` }}
            className="w-28 h-28 rounded-md object-cover"
            src={`${SERVER_BASE_URL}/uploads/${img}`}
          />

          <FaPlay
            onClick={handleShow}
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
            {episode?.title}
          </div>
          <div
            style={{ color: `${mainTheme.text_secondary}` }}
            className="Description text-sm font-semibold"
          >
            {episode?.desc}
          </div>
        </div>
      </div>

      {type == "Video" ? (
        <Videoplayer show={show} handleClose={handleClose} episode={episode} />
      ) : (
        <Audioplayer show={show} handleClose={handleClose} episode={episode} />
      )}
    </>
  );
}

export default Episodecard