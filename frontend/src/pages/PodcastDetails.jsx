import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa';
import Episodecard from '../components/Episodecard';
import { Button, Modal } from 'react-bootstrap';

const PodcastDetails = ({ mainTheme }) => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="h-full px-5 py-8 overflow-y-scroll flex flex-col gap-5">
        {/* <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <Favorite onClick={() => favoritpodcast()}>
                {favourite ? (
                  <FavoriteIcon
                    style={{ color: "#E30022", width: "16px", height: "16px" }}
                  ></FavoriteIcon>
                ) : (
                  <FavoriteIcon
                    style={{ width: "16px", height: "16px" }}
                  ></FavoriteIcon>
                )}
              </Favorite>
            </div> */}
        <div className="flex flex-col gap-5 md:flex-row ">
          <img
            style={{ backgroundColor: `${mainTheme.text_secondary}` }}
            className="w-64 h-64 rounded-md object-cover"
            src="https://i.scdn.co/image/ab6765630000ba8a5502c1cc6a793e4a6bf97faf"
          />
          <div className="flex flex-col gap-3 w-full">
            <div
              style={{ color: `${mainTheme.text_primary}` }}
              className="Title w-full text-3xl font-extrabold justify-between"
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
            <div className=" flex flex-row gap-3 flex-wrap">
              <div
                style={{
                  backgroundColor: `${mainTheme.text_secondary + 50}`,
                  color: `${mainTheme.text_secondary}`,
                }}
                className="px-3 py-1 text-xs md:text-sm rounded-xl"
              >
                Tag
              </div>
            </div>
            <div className="flex flex-row items-center gap-16">
              <div className="flex flex-row items-center gap-2">
                <div className="Avathar w-5 h-5 rounded-full bg-slate-300 flex items-center justify-center">
                  N
                </div>
                <h4
                  style={{ color: `${mainTheme.text_secondary}` }}
                  className="Name overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  Name
                </h4>
              </div>
              <div className="Views text-xs text-slate-400">12 views</div>
              <div className="Views text-xs text-slate-400">12 days ago</div>
              <button
                onClick={handleShow}
                className="flex items-center text-white p-2.5 rounded-full z-10 bg-green-400  transition-all duration-300 ease-in-out shadow-xl"
              >
                <FaPlay size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 mt-4">
          <div
            style={{ color: `${mainTheme.text_primary}` }}
            className="font-medium text-2xl flex justify-center items-center"
          >
            All Episodes
          </div>
          <div className="flex flex-col gap-5">
            <Episodecard mainTheme={mainTheme} />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Modal
        size="lg"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div>
            <iframe
              width="100%"
              height="395"
              src="https://www.youtube.com/embed/_L8-noa8wxk"
              title="Simple Ken Podcast | EP 42 - New Chapter Feat @kanan_gill"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded p-4"
            ></iframe>
            <h4 className="Name px-4 overflow-hidden text-ellipsis whitespace-nowrap">
              Name
            </h4>
            <div
              className="Description px-4 text-sm font-semibold"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
              velit, inventore ipsa enim atque Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Nemo vel ipsam nihil architecto
              itaque, nam blanditiis, tempora, sit laborum eum nobis cum in quo
              quisquam sint! Similique voluptates odio illo?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Previous Episode
          </Button>

          <Button variant="primary">Next Episode</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PodcastDetails