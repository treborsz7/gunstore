import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart'
import './SearchBar.styles.css';
import * as CartService from '../../Services/CartService'

const Header = (props) => {
  const [show, setShow] = useState(false);
  const [CartItems, setCartItems] = useState(0);

  const handleShow = () => setShow(true);
  let itemsCount = 0;
  const [TextToSearch, setTextToSearch] = useState("");

  const handleSearchChange = (event) => {
    setTextToSearch(event.target.value)
  }

  const handleCounChange = (count) => {
    console.log(count)
    setCartItems(count);
  }

  const filterItems = (event) => {
    event.preventDefault()
    CartService.GetItemsByFilter({ text: TextToSearch });
  }

  const handleClose = () => setShow(false);

  useEffect(() => {
    setCartItems(itemsCount);
  }, [props.itemsCount]);


  console.log(props.Sections)


  const sections = props.Sections.map(element => {
    return (<li className="nav-item" key={element.id}>
      <a className="nav-link active" aria-current="page" href={"#" + element.description}>{element.description}</a></li>)
  })

  return (

    <>


      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Shop name</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              {sections}

            </ul>
            {/* <button className="btn btn-outline-dark" type="button" Style="border: none;">
              <i className="bi-cart-fill me-1" ></i>
              <span className="badge bg-dark text-white ms-1 rounded-pill" Style="top: -11px; right: 8px;">{props.carItem}</span>
            </button> */}
            <button className="btn btn-outline-dark" onClick={handleShow} type="button">
              <i className="bi-cart-fill me-1"></i>
              Carrito
              <span className="badge bg-dark text-white ms-1 rounded-pill">{CartItems}</span>
            </button>

          </div>
        </div>

      </nav>
      <div className="d-flex justify-content-end h-100 container px-4 px-lg-5 pb-5">
        <font onSubmit={filterItems}>
          <div className="searchbar">

            <input className="search_input" value={TextToSearch} type="text" name="" placeholder="Buscar.." onChange={handleSearchChange} />

            <div className="search_icon">
              <i className="bi bi-search me-1"></i>
            </div>

          </div>
        </font>
      </div>
      <Cart showItem={show} handleClose={handleClose} itemsCount={itemsCount} handleCounChange={handleCounChange}></Cart>

    </>
  )
};

export default Header;
