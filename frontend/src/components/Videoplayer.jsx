import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const Videoplayer = () => {

    const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div>
        <Modal
                size="lg"
                centered
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Body>
                
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button variant="primary">Upload</Button>
                </Modal.Footer>
              </Modal>
    </div>
    </>
  )
}

export default Videoplayer