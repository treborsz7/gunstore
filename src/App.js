import logo from './logo.svg';
import './styles.css';
import React, { useState } from 'react';
import Header from './Components/Header/Header';
import ItemPopup from './Components/ItemPopup/ItemPopup';

import { GetSections } from './Services/SectionsService';

import * as CartService from './Services/CartService';
import { GetItemsForSection } from './Services/SectionsService';

function App() {

  let [itemsCount, setItemsCount] = useState(0)

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  const [selectItem, setSelectItem] = useState({});


  const addToCar = (event, item) => {
    event.stopPropagation();
    CartService.AddItemToCar(item)
    handleCounChange(CartService.TotalItemsCount);

  }

  const handleCounChange = (count) => {
    setItemsCount(count);
  }

  const ViewItem = (item) => {
    setSelectItem(item)
    handleShow();
    // if (event.target === event.currentTarget) 
    return item
  }


  const Sections = GetSections().filter(section => section.tipe == "items").map(element => {

    const items = GetItemsForSection(element.id).map(x => {
      return (
        <div className="col mb-5" key={x.id} onClick={() => ViewItem(x)}>
          <div className="card h-100">
            <img className="card-img-top" src={x.Image} alt="..." />

            <div className="card-body p-4" >
              <div className="text-center">
                <h5 className="fw-bolder">{x.description}</h5>
                {x.price}
              </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <a className="btn btn-outline-dark mt-auto" id={x.id} href="#" onClick={event => addToCar(event, x)}>Add to cart</a>
              </div>
            </div>
          </div>

        </div>
      )
    })

    if (items.length > 0)
      return (
        <section className=" py-5" key={element.id} id={element.description} >
          <div className="container">
            <h3 className="text-left container px-4 px-lg-5 gx-lg-5">{element.description}</h3>
            <div className="container px-4 px-lg-5 mt-5 scroller-container">
              <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4  items-container">
                {items}
              </div>
            </div>
            <div className="paddlenav paddlenav-framed paddlenav-compact buttos-container">
              <button type="button" disabled="" aria-hidden="true" className="scroll-button paddlenav-arrow-previous">
                <a href="#" className="search_icon">
                  <i className="bi bi-search me-1"></i>
                </a>
              </button>
              <button type="button" aria-hidden="false" className="scroll-button paddlenav-arrow-next">
                <a href="#" className="search_icon">
                  <i className="bi bi-search me-1"></i>
                </a>
              </button>
            </div>
          </div>
        </section>
      )

    return (
      ""
    )

  }
  )

  return (



    //   <head>
    //     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
    //     <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css" />
    //     <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css" />
    //     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    //     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    //     {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
    //     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" /> */}
    //   </head>

    //   <Header></Header>

    //   {Sections}

    <>
      <ItemPopup showItem={show} selectItem={selectItem} handleClose={handleClose}></ItemPopup>
      <Header handleCounChange={handleCounChange}></Header>

      {Sections}


      <div id="band" className="container text-center">
        <h3>NOSOTROS</h3>
        <p><em>We love music!</em></p>
        <p>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <br />

      </div>


      <div id="Contact" className="container contact-container">
        <h3 className="text-center" >Contact</h3>
        <p className="text-center"><em>We love our fans!</em></p>

        <div className="row">
          <div className="col-md-4">

            <p><span className="glyphicon glyphicon-map-marker"></span>Santo Domingo, RD</p>
            <p><span className="glyphicon glyphicon-phone"></span>Phone: +00 1515151515</p>
            <p><span className="glyphicon glyphicon-envelope"></span>Email: mail@mail.com</p>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-sm-6 form-group">
                <input className="form-control" id="name" name="Nombre" placeholder="Nombre" type="text" required />
              </div>
              <div className="col-sm-6 form-group">
                <input className="form-control" id="email" name="Email" placeholder="Email" type="email" required />
              </div>
            </div>
            <textarea className="form-control" id="comments" name="comments" placeholder="Comentario" rows="5"></textarea>
            <br />
            <div className="row">
              <div className="col-md-12 form-group botton-right ">
                <button className="btn btn-dark pull-right" type="submit">Send</button>
              </div>
            </div>
          </div>
        </div>
        <br />

      </div>


      <footer className="py-3 bg-white float-end ">
        <div className="container px-4 px-lg-5 mt-5">
          <p className="m-0 text-center ">Copyright &copy; Your Website 2023</p></div>
      </footer>

    </>
  );
}

export default App;
