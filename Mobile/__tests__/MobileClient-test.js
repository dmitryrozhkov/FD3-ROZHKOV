"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileClient from '../components/MobileClient';

test('работа MobileClient', () => {

  let clientsArr= [
    {id:101, fio:"Иванов И.И.", balance:200}, 
    {id:105, fio:"Сидоров С.С.", balance:-250}, 
    {id:110, fio:"Петров П.П.", balance:-180},
    {id:120, fio:"Григорьев Г.Г.", balance:220},
  ]

  clientsArr.forEach( (client) =>     {     
    
  const component = renderer.create(
    <MobileClient color = "black" key={client.id} info={client} />
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  }); 
    
});