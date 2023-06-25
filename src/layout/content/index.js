import React from 'react';
import Local from './Local';
import Global from './Global';
import CurrentComposes from './CurrentComposes';
import OtherComposes from './OtherComposes';
import Value from './Value';

const Content = () => {
  return (
    <>
      <Local/>
      <Global/>
      <CurrentComposes/>
      <OtherComposes/>
      <Value/>
    </>
  )
}

export default Content