import React from 'react';

import PersonData from './PersonData';

export default ({ peopleObject, onClickDeletePersonData, personId }) => {
  return (
    <div>
      {peopleObject.map((info, index) => <PersonData key={index} personInfo={info} onClickDeletePersonData={onClickDeletePersonData} />)}
    </div>
  );
}
