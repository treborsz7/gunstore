import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import * as  DaoService from "../../../Services/DaoService"
import Product from './Product/Product';
import NewProductPopup from './NewProductPopup/NewProductPopup'

//import * as  DaoService from "~/Services/DaoService/DaoService"

//import { Test } from './SectionSetUp.styles';

const ProductSetUp = (props) => {


  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  const [sections, setSections] = useState([]);


  const handleClose = () => {
    GetProducts()
    setShow(false);
  }
  const handleShow = () => setShow(true);

  /// const [open, setOpen] = useState(false);
  const fetchUsersData = async () => {
    setSections(await DaoService.GetSections());
    setProducts(await DaoService.GetProduct());
  };

  //if (DaoService.Sections.length <= 0)
  //fetchUsersData();
  useEffect(() => {

    fetchUsersData();
    //GetProducts();
  }, []);


  const GetProducts = async () => {
    setProducts(await DaoService.GetProduct(true));

  }

  // const updateProduct = (p) => {
  //   let prods = products.map((pro) => {
  //     let current = pro;
  //     if (pro._id == p._id)
  //       current = p

  //     return current
  //   });
  //   setProducts(prods)
  // }

  const DeleteProducts = (id) => {
    let ignore = false;
    // DaoService.DeleteProduct(id).then(result => {

    //   //GetSections()
    // })
    DaoService.DeleteProduct(id).then(
      products => {
        if (!ignore) {
          console.log("sections dto", products)
          //handleClose()
          setProducts(products);
        }
      }
    );
    return () => {
      ignore = true;
    };
  }





  if (products?.length <= 0) {
    return (
      <>
        <NewProductPopup showItem={show} handleClose={handleClose}></NewProductPopup>
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
          data-sidebar-position="fixed" data-header-position="fixed">


          <div className="body-wrapper">

            <div className="container-fluid">
              <div className="container-fluid">

                {/* <div className="card">
                  <div className="card-body" style={{ border: "none" }}>
                   
                  </div>
                </div> */}

                <div className="card ">
                  <div className="card-body">

                    <button style={{ border: "none", backgroundColor: "white" }} type="button" onClick={() => handleShow()} aria-hidden="true" className=" float-end">
                      <a href="#" style={{ width: "100%" }}>
                        <i className="bi bi-plus-square "></i>
                      </a>
                    </button>

                    <h5 className="card-title fw-semibold mb-4">Productos</h5>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>)
  }
  else {
    return (

      < >
        <NewProductPopup showItem={show} handleClose={handleClose} sections={sections} setSections={setProducts}></NewProductPopup>
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
          data-sidebar-position="fixed" data-header-position="fixed">


          <div className="body-wrapper">

            <div className="container-fluid">
              <div className="container-fluid">

                <div className="card ">
                  <div className="card-body">

                    <button style={{ border: "none", backgroundColor: "white" }} type="button" onClick={() => handleShow()} aria-hidden="true" className=" float-end">
                      <a href="#" style={{ width: "100%" }}>
                        <i className="bi bi-plus-square "></i>
                      </a>
                    </button>

                    <h5 className="card-title fw-semibold mb-4">Productos</h5>
                    <div className='col'>
                      <Accordion defaultActiveKey="" alwaysOpen>
                        {
                          products.map((product, i) => {
                            return <Product key={product._id} product={product} index={i} sections={sections} DeleteProduct={() => DeleteProducts(product._id)} GetProducts={GetProducts}></Product>
                          })
                        }
                      </Accordion>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};


export default ProductSetUp;
