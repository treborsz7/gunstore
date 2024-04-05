import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import * as  DaoService from "../../../../Services/DaoService";
import FileUploadMultiple from "../FileUploadMultiple/FileUploadMultiple"
import Form from 'react-bootstrap/Form';



const NewProductPopup = (props) => {

  const [inputs, setInputs] = useState({});
  const [edit, setEdit] = useState(false)

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value)
    setInputs(values => ({ ...values, [name]: value }))

  }

  const toggleChange = (event) => {

    const name = event.target.name;
    const value = event.target.checked;

    setInputs(values => ({ ...values, [name]: value }))

  }


  const handleSubmit = (event) => {
    event.preventDefault();
    DaoService.CreateProduct(inputs).then(result => {
      if (result.status == 200) {
        //GetSections();
        props.handleClose();
      }
    })
  }

  return (
    <>
      <Modal
        show={props.showItem}
        onHide={props.handleClose}
        backdrop="static"
        size="s"
        fullscreen={false}
        dialogClassName="modal-90w"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FileUploadMultiple></FileUploadMultiple>
          <Form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="descriptionInput" className="form-label">Descripción</label>
              <input id="descriptionInput" type="text" name="description" value={inputs.description || ""} onChange={handleChange} className="form-control" required="true" />
            </div>
            <div className="mb-3">
              <label for="priceInput" className="form-label">Precio</label>
              <input id="priceInput" type="text" name="price" value={inputs.price || ""} onChange={handleChange} className="form-control" required="true" />
            </div>
            <div className="mb-3 form-check">
              <div key="sections" className="mb-3">
                {props.sections?.map((section) => (
                  <Form.Check
                    inline
                    disabled={edit}
                    key={section._id}
                    label={section.description}
                    name={section._id}
                    type="checkbox"
                    id={section._id}
                    onChange={toggleChange}
                  />
                ))}
              </div>
            </div>
            <div className='container' >
              <div className="row justify-content-end">
                <div className='col-2'>
                  <button style={{ marginRight: "10px", width: "80px;" }} className="btn btn-secondary" onClick={props.handleClose}>Close</button>
                </div>
                <div className='col-2'>
                  <button style={{ width: "80px;" }} type="submit" className="btn btn-primary ">Crear</button>
                </div>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NewProductPopup;
