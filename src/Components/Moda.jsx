import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Moda() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body
          className="text-center m-auto"
          style={{ fontWeight: "lighter", fontSize: "20px" }}
        >
          <img src="/images/present.png" alt="ballon" style={{ width: "80px" }} />
          Get <span style={{ color:"red", fontWeight:'bold'}}>20%</span> off on all products you
          buy
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Moda;
