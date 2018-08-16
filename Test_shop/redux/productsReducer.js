import { PRODUCTS_SETDATA, PRODUCT_ADD } from './productsAC';

const initState={
  
  products: {},

}

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function productsReducer(state=initState,action) {
  switch (action.type) {

    case  PRODUCTS_SETDATA: {
      // надо получить данные с сервера
      // редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!
      console.log('action:',action);
      console.log('state до обработки редьюсером:',state);
      let newState={...state}     
      newState=action.payload;
      newState.dataStatus=1
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }
    
    case PRODUCT_ADD: {
      console.log('action:',action);
      console.log('state до обработки редьюсером:',state);
      let newState={...state,
        cnts:{...state.cnts,
          [action.counterid]:state.cnts[action.counterid]+action.addvalue
        }
      };
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }

    default:
      return state;
  }
}

export default productsReducer;
