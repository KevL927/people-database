import React from 'react';

export default ({personInfo, onClickDeletePersonData, onClickEdit }) => {
  return (
    <div className="person-data">
      <li>{personInfo.name} - {personInfo.favoriteCity}<button onClick={(event) => onClickDeletePersonData(event, personInfo._id)}>Delete</button><button onClick={(event) => onClickEdit(event, personInfo._id, personInfo.name, personInfo.favoriteCity)}>Edit</button></li>
    </div>
  );
}
