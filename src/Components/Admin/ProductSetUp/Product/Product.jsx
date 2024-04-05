import React, { useState, useContext } from 'react';
import AccordionContext from 'react-bootstrap/AccordionContext';
import Accordion from 'react-bootstrap/Accordion';
import * as DaoService from '../../../../Services/DaoService';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import ItemPopup from '../ItemPopup';
const ContextAwareToggle = ({ children, eventKey, callback, DeleteProduct, section, GetProducts, isAction = false, action, setEditItem, setShowPopup, updateProduct }) => {

  const { activeEventKey } = useContext(AccordionContext);

  const handleSubmit = (id) => {
    // event.preventDefault();
    console.log("delete", id)
    DaoService.DeleteProduct(id).then(result => {

      //GetSections()
    })
  }

  const editing = () => {
    console.log("isEditing")
    setEditItem(true);
  }

  const showPopup = () => {
    console.log("showPopup")
    setShowPopup(true);
  }

  const deleting = () => {
    console.log("deleting")
    DeleteProduct();
  }

  const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));
  const isCurrentEventKey = activeEventKey === eventKey;

  if (!isAction) {
    if (isCurrentEventKey) {
      return (
        <button class="btn" style={{ backgroundColor: "transparent", border: "none" }} onClick={() => decoratedOnClick()} >
          <i class="bi bi-chevron-up"></i>
        </button>
      );
    }
    else {
      return (
        <button class="btn" style={{ backgroundColor: "transparent", border: "none" }} onClick={() => decoratedOnClick()} >
          <i class="bi bi-chevron-down"></i>
        </button>
      );
    }
  }
  else {
    if (action === "delete")
      return (
        <button class="btn" style={{ backgroundColor: "transparent", border: "none" }} onClick={() => deleting()} >
          <i class="bi bi-trash"></i>
        </button>
      );
    else if (action === "showPopup") {
      return (
        <button class="btn" style={{ backgroundColor: "transparent", border: "none" }} onClick={() => showPopup()} >
          <i class="bi bi-box-arrow-up-right"></i>
        </button>
      )
    }
    else
      return (
        <button class="btn" style={{ backgroundColor: "transparent", border: "none" }} onClick={() => editing()} >
          <i class="bi bi-pen"></i>
        </button>
      );
  }
}

const Product = (props) => {
  const [inputs, setInputs] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [productSectionsIds, setproductSectionsIds] = useState(props.product.sections?.map(x => x._id));
  const handleClose = () => setShowPopup(false);
  const setEditItem = (edit) => {
    setIsEditing(edit)
  }

  const DeleteProduct = () => {
    props.DeleteProduct(props.product._id)
  }



  const toggleChange = (event) => {
    const name = event.target.name;
    const value = event.target.checked;

    setInputs(values => ({ ...values, [name]: value }))


  }

  const handleSubmit = (event) => {

    event.preventDefault();
    DaoService.EditProduct(props.product._id, inputs).then(result => {

      //setProduc(result);
      setproductSectionsIds(result.sections);
      setInputs({})
      setIsEditing(false)

    })
  }


  return (
    <>
      {showPopup && <ItemPopup showItem={showPopup} selectItem={props.product} handleClose={handleClose}></ItemPopup>}
      <Accordion key={props.product} style={{ marginBottom: "10px" }}>
        <Card>
          <Card.Header className="d-flex justify-content-between align-items-center">
            {props.product.description}
            <div>
              {!isEditing && <ContextAwareToggle setEditItem={setEditItem} className="float-end" eventKey={props.index} section={props.product} GetSections={props.GetSections} isAction={true} action={"edit"}></ContextAwareToggle>}
              <ContextAwareToggle className="float-end" eventKey={props.index} section={props.product} setShowPopup={setShowPopup} isAction={true} action={"showPopup"}></ContextAwareToggle>
              <ContextAwareToggle className="float-end" eventKey={props.index} section={props.product} GetSections={props.GetSections} DeleteProduct={DeleteProduct} isAction={true} action={"delete"}></ContextAwareToggle>
              <ContextAwareToggle className="float-end" eventKey={props.index} ></ContextAwareToggle>
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey={props.index}>
            <Card.Body>
              <div className="mb-3">
                <Form onSubmit={handleSubmit} >

                  {isEditing &&
                    <div className="mb-3" >
                      <label for="priceInput" className="form-label">Precio</label>
                      <br></br>
                      <input id="priceInput" type="text" name="price" value={props.product.price || ""} onChange={toggleChange} className="form-control" required="true" />
                    </div>
                  }

                  {!isEditing &&
                    <div className="mb-3" >
                      <label className="form-label">Precio</label>
                      <label className="form-label"> RD$ {props.product.price || "000.00"}</label>
                    </div>
                  }

                  {!isEditing && props.sections?.map((section) => {

                    return <Form.Check
                      inline
                      checked={productSectionsIds?.includes(section._id)}
                      onChange={toggleChange}
                      key={section._id}
                      label={section.description}
                      name={section._id}
                      type="checkbox"
                      id={section._id}
                      disabled
                    />



                  })}
                  {isEditing && props.sections?.map((section) => {

                    return <Form.Check
                      inline
                      onChange={toggleChange}
                      key={section._id}
                      label={section.description}
                      name={section._id}
                      type="checkbox"
                      id={section._id}

                    />


                  })}


                  {isEditing && <Row >
                    <div>
                      <Button className='btn float-end' type="submit" variant="primary" >Save</Button>{' '}
                      <Button className='btn float-end' style={{ marginRight: "5px" }} onClick={() => setEditItem(false)} variant="outline-danger">Cancel</Button>{' '}
                    </div>
                  </Row>}
                </Form>
              </div>


              {/* <input type='button' value="Eliminar" onClick={() => handleSubmit(section._id)}></input> */}
            </Card.Body>
          </Accordion.Collapse>
        </Card>

      </Accordion>
    </>
  );

}

export default Product;
