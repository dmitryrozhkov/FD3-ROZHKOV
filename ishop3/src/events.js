import {EventEmitter} from 'events';

let productsEvents=new EventEmitter(); 
// в потоке productsEvents будут все события, связанные с редактированием и добавлением товаров
// событие "ESaveEditClicked" - кликнут редактируемый товар для сохранения, его сэмиттирует ProductCard и примет ProductsGrid
// событие "ESaveNewProductClicked" - кликнут добавляемый новый товар для схранения, его сэмиттирует ProductCard и примет ProductsGrid
// событие "ECancelClicked" - кликнута отмена сохранения нового или редактируемого товара, его сэмиттирует ProductCard и примет ProductsGrid
// лучше работать не с текстовыми литералами, а объявить переменные с соответствующими значениями

export {productsEvents};