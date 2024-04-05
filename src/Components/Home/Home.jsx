
//import logo from './logo.svg';
//import './styles.css';
import React, { useState, useEffect, useRef } from 'react';
import Header from '../Header/';
import ItemPopup from '../ItemPopup';
import * as  DaoService from "./../../Services/DaoService"
import * as  CartService from "./../../Services/CartService"

const Home = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [selectItem, setSelectItem] = useState({});
  const [Sections, setSections] = useState([]);
  const [itemsCount, setItemsCount] = useState([]);

  const addToCar = (event, item) => {
    event.stopPropagation();
    CartService.AddItemToCar(item)
    handleCounChange(itemsCount - 1);

  }

  const handleCounChange = (count) => {
    console.log(count)
    setItemsCount(count);
  }

  const ViewItem = (item) => {
    setSelectItem(item)
    setShow(true);

    // if (event.target === event.currentTarget) 
    return item
  }

  const fetchUsersData = async () => {
    setSections(await DaoService.GetSectionsTohome());

  };



  function hasSections(prods) {
    return prods.sections.length > 0;
  }

  useEffect(() => {
    fetchUsersData();

  }, []);

  const handleClickR = (parentId) => {
    console.log(parentId)
    var container = document.getElementById(parentId);
    sideScroll(container, 'right', 25, 210, 20);
  };

  const handleClickL = (parentId) => {
    console.log(parentId)
    var container = document.getElementById(parentId);
    sideScroll(container, 'left', 25, 210, 20);
  };

  function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    var slideTimer = setInterval(function () {
      if (direction == 'left') {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }

  const SectionMap = Sections?.map(element => {

    const products = element.products?.map(x => {
      return (
        <div className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3" key={x.id} onClick={() => ViewItem(x)}>
          <div className="card h-100">
            {/* <img className="card-img-top" src={x.Image} alt="..." /> */}
            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="..." />
            <div className="card-body p-4" >
              <div className="text-center">
                <h5 className="fw-bolder">{x.description}</h5>
                <br></br>
                <p> RD$ {x.price || 0}</p>

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


    return (
      <section key={element.id} id={element.description} >
        <div className="container">
          <h3 className="text-left container px-4 px-lg-5 gx-lg-5">{element.description}</h3>

          <div className="container px-4 px-lg-5 mt-5 items-container">
            <div id={element.id + "section"} className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4  scrolling-wrapper row flex-row flex-nowrap mt-1 pt-2">
              {products}
            </div>
          </div>
          <div className="paddlenav paddlenav-framed paddlenav-compact buttos-container">
            <button type="button" disabled="" onClick={() => handleClickL(element.id + "section")} aria-hidden="true" className="scroll-button paddlenav-arrow-previous">
              <a href="#" className="arrow_icon">
                <i className="bi bi-arrow-left"></i>
              </a>
            </button>
            <button type="button" aria-hidden="false" onClick={() => handleClickR(element.id + "section")} className="scroll-button paddlenav-arrow-next">
              <a href="#" className="arrow_icon">
                <i className="bi bi-arrow-right"></i>
              </a>
            </button>
          </div>
        </div>
      </section>
    )


  })

  return (

    <>
      <ItemPopup showItem={show} selectItem={selectItem} handleClose={handleClose}></ItemPopup>
      <Header handleCounChange={handleCounChange} Sections={Sections} itemsCount={itemsCount}></Header>

      {SectionMap}


      <div id="Nosotros" className="container text-center">
        <h3>NOSOTROS</h3>
        <p><em>We love music!</em></p>
        <p>Somos una empresa familiar reconocida por su trayectoria y seriedad, líder en el mercado.

          <br />Atendemos a clientes de todo el país, quienes adquieren nuestros productos a distancia o nos visitan a nuestros locales nos respaldan.
          <br />Ofrecer la mejor opción de compra del mercado, basándonos en los siguientes principios:
          El mejor precio.La más rápida y eficiente atención personalizada.Garantía total de satisfacción.</p>
        <br />

      </div>


      <div id="Contactos" className="container contact-container">
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
            <br />
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


export default Home;
