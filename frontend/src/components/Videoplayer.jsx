import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import SERVER_BASE_URL from '../services/serverUrl';

const Videoplayer = ({show,handleClose,episode}) => {

  //   const [show, setShow] = useState(false);
  
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <>
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
            <video
              controls
              style={{ width: "100%", height: "395" }}
              className="rounded p-4"
              src={`${SERVER_BASE_URL}/uploads/${episode?.podcastFile}`}
            ></video>
            {/* <iframe
              width="100%"
              height="395"
              src="https://www.youtube.com/embed/_L8-noa8wxk"
              title="Simple Ken Podcast | EP 42 - New Chapter Feat @kanan_gill"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded p-4"
            ></iframe> */}
            <h4 className="Name px-4 overflow-hidden text-ellipsis whitespace-nowrap">
              {episode?.title}
            </h4>
            <div className="Description px-4 text-sm font-semibold">
              {episode?.desc}
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
}

export default Videoplayer