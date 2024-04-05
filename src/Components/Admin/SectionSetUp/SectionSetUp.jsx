import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import * as  DaoService from "../../../Services/DaoService"
import Section from './Section/Section';
import NewSectionPopup from './NewSectionPopup/NewSectionPopup'

//import * as  DaoService from "~/Services/DaoService/DaoService"

//import { Test } from './SectionSetUp.styles';

const SectionSetUp = (props) => {

  const [sections, setSections] = useState([]);
  //const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  /// const [open, setOpen] = useState(false);

  const fetchUsersData = async () => {
    setSections(await DaoService.GetSections());
  };

  //if (DaoService.Sections.length <= 0)
  //fetchUsersData();
  const GetSections = async () => {

    setSections(await DaoService.GetSections(true));
    setShow(false);
  }

  const GetProducts = () => {

    let ignore = false;
    //setSections([]);
    DaoService.GetProduct().then(
      products => {
        if (!ignore) {
          console.log("products dto", products)

          //setProducts(products);
        }
      }
    );
    return () => {
      ignore = true;
    };
  }

  useEffect(() => {
    //  const fetchUsersData = async () => {
    //    setSections(await DaoService.GetSections());
    // };

    fetchUsersData();
  }, []);

  // useEffect(() => {
  //   GetSections();

  // }, []);

  if (sections?.length <= 0) {

    // if (products.length <= 0)
    //   return (<></>)
    // else
    return (<>
      {/* <NewSectionPopup showItem={show} handleClose={handleClose} setSections={setSections} products={products} ></NewSectionPopup> */}
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

                  <button style={{ border: "none", backgroundColor: "white" }} type="button" disabled="" onClick={() => setShow(true)} aria-hidden="true" className=" float-end">
                    <a href="#" style={{ width: "100%" }}>
                      <i className="bi bi-plus-square "></i>
                    </a>
                  </button>

                  <h5 className="card-title fw-semibold mb-4">Secciónes</h5>
                  <div className='col'>
                    <Accordion defaultActiveKey="" alwaysOpen>
                      {
                        //sections.map((section, i) => {
                        //return <Section section={section} index={i} GetSections={GetSections} ></Section>
                        //})
                      }
                    </Accordion>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div></>)
  }
  else {
    return (

      <>
        {show && <NewSectionPopup showItem={show} handleClose={handleClose} GetSections={GetSections} ></NewSectionPopup>}
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

                    <button style={{ border: "none", backgroundColor: "white" }} type="button" disabled="" onClick={() => setShow(true)} aria-hidden="true" className=" float-end">
                      <a href="#" style={{ width: "100%" }}>
                        <i className="bi bi-plus-square "></i>
                      </a>
                    </button>

                    <h5 className="card-title fw-semibold mb-4">Secciónes</h5>
                    <div className='col'>
                      <Accordion defaultActiveKey="" alwaysOpen>
                        {
                          sections.map((section, i) => {
                            return <Section key={section._id} section={section} index={i} GetSections={GetSections}></Section>
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


export default SectionSetUp;
