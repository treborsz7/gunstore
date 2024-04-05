import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as CartService from '../../Services/CartService'
import './Cart.styles.css';

const Cart = (props) => {
  const [show, setShow] = useState(false);
  const [CartItems, setCartItems] = useState([]);


  useEffect(() => {
    setShow(props.showItem);
  }, [props.showItem]);


  useEffect(() => {
    setCartItems(CartService.CartItems);
  }, [CartService.CartItems]);


  const removeItem = (item) => {
    CartService.RemoveItemToCart(item);
    setCartItems(CartService.GetItemsOnCart());
  }

  const digreseItem = (item) => {
    CartService.DigreseItemToCart(item);
    setCartItems(CartService.GetItemsOnCart());
  }

  const addItem = (item) => {
    CartService.AddItemToCar(item);
    setCartItems(CartService.GetItemsOnCart());
  }

  let total = 0;
  let itemsCount = 0;

  const handleCounChange = (count) => {
    props.handleCounChange(count);
  }

  const items = CartItems.map(x => {

    total += x.ItemsCount * (x.price || 0);
    itemsCount += x.ItemsCount;

    return (
      <div key={x.Íd} className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
        <div className="d-flex">
          <span><img width="30" src="https://img.icons8.com/officel/48/000000/paypal.png" /></span>
          {/* <img className="rounded" src={x.Image} width="40" /> */}
          <div className="ml-2"><span className="font-weight-bold d-block">{x.description}
          </span><span className="spec">{x.price}</span>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <span className="d-block ml-5 font-weight-bold">RD${x.price || "000.0"}</span>

        </div>
        <div className="d-flex align-items-center">
          <i className="bi bi-dash-circle" onClick={() => digreseItem(x)}></i>

          <span className="d-block">{x.ItemsCount}</span>
          <i className="bi bi-plus-circle" onClick={() => addItem(x)}></i>
        </div>
        <div className="d-flex align-items-center">
          <span className="d-block ml-5 font-weight-bold">RD${x.ItemsCount * (x.price || 0)}</span>
          <i className="bi bi-trash3" onClick={() => removeItem(x)}></i></div>
      </div>
    )
  })
  //setTotalItemsCount(itemsCount)
  //props.itemsCount = itemsCount;
  handleCounChange(itemsCount);

  return (

    <Modal
      show={show}
      onHide={props.handleClose}
      backdrop="static"
      size="xl"
      fullscreen={false}
      dialogClassName="modal-90w"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Carrito de compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container mt-5 p-3 rounded cart">
          <div className="row no-gutters">
            <div className="col-md-12 ">
              <div className="product-details mr-2">
                {/* <div className="d-flex flex-row align-items-center">
                  <i className="fa fa-long-arrow-left"></i>
                  <span className="ml-2">Seguir comprando</span>
                </div> 
                <hr />*/}
                <h6 className="mb-0">Canasta</h6>
                <div className="d-flex justify-content-between"><span>Tienes {items.length} productos en tu canasta</span>
                  <div className="d-flex flex-row align-items-center">
                    {/* <span className="text-black-50">Sort by:</span> */}

                    <div className="price ml-2"><span className="mr-1">price</span><i className="fa fa-angle-down"></i></div>
                  </div>
                </div>

                {items}

                <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                  <div className="d-flex">

                  </div>
                  <div className="d-flex align-items-center">

                  </div>
                  <div className="d-flex align-items-center">

                  </div>
                  <div className="d-flex align-items-center">
                    <span className="d-block ml-5 font-weight-bold">RD${total}</span>
                  </div>
                </div>

              </div>
            </div>
            {/* <div className="col-md-4">
            <div className="payment-info">
              <div className="d-flex justify-content-between align-items-center"><span>Card details</span>
                <img className="rounded" src="https://i.imgur.com/WU501C8.jpg" width="30" />
              </div><span className="type d-block mt-3 mb-1">Card type</span><label className="radio">
                <input type="radio" name="card" value="payment" checked />
                <span><img width="30" src="https://img.icons8.com/color/48/000000/mastercard.png" /></span> </label>

              <label className="radio"> <input type="radio" name="card" value="payment" /> <span>
                <img width="30" src="https://img.icons8.com/officel/48/000000/visa.png" /></span> </label>

              <label className="radio">
                <input type="radio" name="card" value="payment" />
                <span><img width="30" src="https://img.icons8.com/ultraviolet/48/000000/amex.png" /></span>
              </label>


              <label className="radio">
                <input type="radio" name="card" value="payment" />
                <span><img width="30" src="https://img.icons8.com/officel/48/000000/paypal.png" /></span>
              </label>
              <div><label className="credit-card-label">Name on card</label><input type="text" className="form-control credit-inputs" placeholder="Name" /></div>
              <div><label className="credit-card-label">Card number</label><input type="text" className="form-control credit-inputs" placeholder="0000 0000 0000 0000" /></div>
              <div className="row">
                <div className="col-md-6"><label className="credit-card-label">Date</label><input type="text" className="form-control credit-inputs" placeholder="12/24" /></div>
                <div className="col-md-6"><label className="credit-card-label">CVV</label><input type="text" className="form-control credit-inputs" placeholder="342" /></div>
              </div>
              <hr className="line" />
              <div className="d-flex justify-content-between information"><span>Subtotal</span><span>$3000.00</span></div>
              <div className="d-flex justify-content-between information"><span>Shipping</span><span>$20.00</span></div>
              <div className="d-flex justify-content-between information"><span>Total(Incl. taxes)</span><span>$3020.00</span></div><button className="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button"><span>$3020.00</span><span>Checkout<i className="fa fa-long-arrow-right ml-1"></i></span></button></div>
          </div> */}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>Cerrar</Button>
        <Button variant="primary">Pagar</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default Cart;
