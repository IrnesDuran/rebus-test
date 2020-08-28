import React from 'react';
import './Unit.styles.scss';

const Unit = (props) => {
  const unitId = props.unit + props.sectionId;
  //console.log(unitId);
  return (
    <div className="unit" onClick={() => console.log(unitId)}>
      {props.unit}
      {props.sectionId}
    </div>
  );
};

export default Unit;
