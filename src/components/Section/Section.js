import React from 'react';
import Unit from '../Unit/Unit';
import './Section.styles.scss';

const Section = (props) => {
  const { sectionId } = props;
  //console.log(props);
  return (
    <div className="section">
      {props.sectionSize.map((unit) => (
        <Unit unit={unit} sectionId={sectionId} />
      ))}
    </div>
  );
};

export default Section;
