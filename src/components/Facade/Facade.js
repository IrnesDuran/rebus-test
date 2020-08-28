import React from 'react';
import Section from '../Section/Section';
import './Facade.styles.scss';

const Facade = (props) => {
  //console.log(props);
  const { sectionSize } = props;
  console.log(sectionSize);
  return (
    <div className="facade">
      {props.panelsNumber.map((unit) => (
        <Section sectionSize={sectionSize} sectionId={unit} />
      ))}
    </div>
  );
};

export default Facade;
