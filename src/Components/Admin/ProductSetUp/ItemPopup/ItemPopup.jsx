import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
//import { Test } from './ItemPopup.styles';

const ItemPopup = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(props.showItem);
  }, [props.showItem]);


  return <Modal
    show={show}
    onHide={props.handleClose}
    backdrop="static"
    size="xl"
    fullscreen={false}
    dialogClassName="modal-90w"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>{props.selectItem.description}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        {props.selectItem.text}
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.handleClose}>
        Close
      </Button>
      <Button variant="primary">Understood</Button>
    </Modal.Footer>
  </Modal>
};


export default ItemPopup;
