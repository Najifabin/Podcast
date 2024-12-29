import React from 'react'
import { Button, Modal } from "react-bootstrap";
import SERVER_BASE_URL from '../services/serverUrl';

const Audioplayer = ({ show, handleClose, episode }) => {
  return (
    <>
      <Modal
        size="xl"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div>
            <div className="p-3">
              <audio
                controls
                style={{ width: "100%", height: "240" }}
                src={`${SERVER_BASE_URL}/uploads/${episode?.podcastFile}`}
              ></audio>
            </div>
            <h4 className="px-4 overflow-hidden text-ellipsis whitespace-nowrap">
              {episode?.title}
            </h4>
            {/* <div
              style={{ height: "100px" }}
              className=" px-4 text-sm overflow-hidden text-ellipsis whitespace-break-spaces  font-semibold"
            >
              {episode?.desc}
            </div> */}
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

export default Audioplayer