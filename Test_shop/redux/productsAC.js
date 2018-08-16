const PRODUCTS_SETDATA='PRODUCTS_SETDATA';
const PRODUCT_ADD='PRODUCT_ADD';

const products_Setdata=(data) =>{
  return {
    type: PRODUCTS_SETDATA,
    payload:data,
  };
}

const product_add=function(counterid,addvalue) {
  return {
    type: PRODUCT_ADD,
    counterid:counterid,
    addvalue:addvalue,
  };
}

export {
    products_Setdata,PRODUCTS_SETDATA,
    product_add,PRODUCT_ADD,
}
