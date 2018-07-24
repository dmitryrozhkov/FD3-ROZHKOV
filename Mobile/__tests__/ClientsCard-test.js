"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import ClientsCard from '../components/ClientsCard';

test('работа ClientsCard', () => {

let counter= [1, 2, 3, 4]

  counter.forEach( (n) =>     {     
    
  const component = renderer.create(
    <ClientsCard cardWorkMode={n} />
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  }); 
    
});