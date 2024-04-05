import React, { useState, useContext } from 'react';
import AccordionContext from 'react-bootstrap/AccordionContext';
import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion';
import * as DaoService from '../../../../Services/DaoService';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

const ContextAwareToggle = ({ children, eventKey, callback, section, GetSections, isDeleted = false }) => {
  const { activeEventKey } = useContext(AccordionContext);

  const handleSubmit = (id) => {
    // event.preventDefault();
    console.log("delete", id)
    DaoService.DeleteSection(id).then(result => {

      GetSections()
    })
  }

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  console.log(isCurrentEventKey);
  if (!isDeleted) {
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
    return (
      <button class="btn" style={{ backgroundColor: "transparent", border: "none" }} onClick={() => handleSubmit(section._id)} >
        <i class="bi bi-trash"></i>
      </button>
    );
  }
}

const Section = (props) => {

  const section = props.section;

  return (
    <>
      <Accordion key={section._id} style={{ marginBottom: "10px" }}>
        <Card>
          <Card.Header className="d-flex justify-content-between align-items-center">
            {section.description}
            <div>
              <ContextAwareToggle className="float-end" eventKey={props.index} section={section} GetSections={props.GetSections} isDeleted={true}></ContextAwareToggle>
              <ContextAwareToggle className="float-end" eventKey={props.index} ></ContextAwareToggle>
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey={props.index}>
            <Card.Body>
              Hello! I am the body

              {/* <input type='button' value="Eliminar" onClick={() => handleSubmit(section._id)}></input> */}
            </Card.Body>
          </Accordion.Collapse>
        </Card>

      </Accordion>


    </>
  );

}

export default Section;
