import React from 'react';

export default (props) => {
  console.log(props);
  return (
    <div className="person-data">
      <p>{props.personInfo.name} - {props.personInfo.favoriteCity}</p>
    </div>
  );
}
