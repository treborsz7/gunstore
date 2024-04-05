import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import * as  DaoService from "../../../../Services/DaoService";

const NewSectionPopup = (props) => {
  const [inputs, setInputs] = useState({});


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    DaoService.CreateSection(inputs).then(result => {
      console.log("save result", result)
      if (result.status == 200) {

        props.GetSections();
      }

    })
  }

  return (<Modal
    show={props.showItem}
    onHide={props.handleClose}
    backdrop="static"
    size="s"
    fullscreen={false}
    dialogClassName="modal-90w"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Nueva Sección</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="descriptionInput" className="form-label">Descripción</label>
          <input id="descriptionInput" type="text" name="description" value={inputs.description || ""} onChange={handleChange} className="form-control" required={true} />

        </div>
        {/* <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                          </div> */}
        <div className="mb-3 flex">
          {/* {props.products.map((product) => {
            return <>
              <input key={product._id} id="check" type="checkbox" name="check" className="form-check-input" />
              < label className="form-check-label" for="check">{product.description}</label>
            </>
          })
          } */}


        </div>
        <div className='container' >
          <div className="row justify-content-end">
            <div className='col-2'>


              <button style={{ marginRight: "10px" }} className="btn btn-secondary" onClick={props.handleClose}>Close</button>
            </div>
            <div className='col-2'>
              <button type="submit" className="btn btn-primary ">Crear</button>
            </div>
          </div>
        </div>
      </form>
    </Modal.Body>

  </Modal >
  );
}

export default NewSectionPopup;
