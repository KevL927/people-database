import React from 'react';

import PersonData from './PersonData';

export default (props) => {
  return (
    <div>
      {props.peopleObject.map((info, index) => <PersonData key={index} personInfo={info} />)}
    </div>
  );
}
