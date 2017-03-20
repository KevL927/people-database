import React from 'react';

import PersonData from './PersonData';

export default ({ peopleObject, onClickDeletePersonData, onClickEdit }) => {
  return (
    <div>
      {peopleObject.map((info, index) => <ul><PersonData key={index} personInfo={info} onClickDeletePersonData={onClickDeletePersonData} onClickEdit={onClickEdit} /></ul>)}
    </div>
  );
}
