import React from 'react';

export default ({personInfo, onClickDeletePersonData }) => {
  return (
    <div className="person-data">
      <span><p>{personInfo.name} - {personInfo.favoriteCity}</p><button onClick={(event) => onClickDeletePersonData(event, personInfo._id)}>Delete</button></span>
    </div>
  );
}
