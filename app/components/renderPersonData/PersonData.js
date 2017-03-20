import React from 'react';

export default (props) => {
  return (
    <div className="person-data">
      <p>{props.personInfo.name} - {props.personInfo.favoriteCity}</p>
    </div>
  );
}
