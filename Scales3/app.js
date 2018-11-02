var Scales = /** @class */ (function () {
    function Scales(engine) {
        this.engine = engine;
    }
    Scales.prototype.getSumScale = function () {
        var scaleProducts = 0;
        for (var i = 0; i < this.engine.getCount(); i++) {
            scaleProducts += this.engine.getItem(i).getScale();
        }
        return scaleProducts;
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        for (var i = 0; i < this.engine.getCount(); i++) {
            nameList.push(this.engine.getItem(i).getName());
        }
        return nameList;
    };
    return Scales;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.products = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.products.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.products[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        var count = 0;
        for (var i = 0; i < this.products.length; i++) {
            count++;
        }
        return count;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        localStorage.products = JSON.stringify([]);
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var items = JSON.parse(localStorage.products);
        items.push(item);
        localStorage.products = JSON.stringify(items);
    };
    // getItem(index:number):Product {
    //     let items:Array<Product> = JSON.parse(localStorage.products)        
    //     let p:any = items[index]        
    //     let pp:Product = new Product (p.name, p.scale)
    //     return pp;
    // }
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var items = JSON.parse(localStorage.products);
        var p = items[index];
        p.__proto__ = Product.prototype;
        return p;
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var items = JSON.parse(localStorage.products);
        var count = 0;
        for (var i = 0; i < items.length; i++) {
            count++;
        }
        return count;
    };
    return ScalesStorageEngineLocalStorage;
}());
var Product = /** @class */ (function () {
    function Product(name, scale) {
        this.name = name;
        this.scale = scale;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getScale = function () {
        return this.scale;
    };
    return Product;
}());
var apple1 = new Product('яблоко1', 100);
var tomato1 = new Product('помидор1', 200);
var scalesStorageEngineArray1 = new ScalesStorageEngineArray;
scalesStorageEngineArray1.addItem(apple1);
var scales1 = new Scales(scalesStorageEngineArray1);
console.log(scales1.getNameList());
console.log(scales1.getSumScale());
var scalesStorageEngineLocalStorage1 = new ScalesStorageEngineLocalStorage;
scalesStorageEngineLocalStorage1.addItem(tomato1);
var scales2 = new Scales(scalesStorageEngineLocalStorage1);
console.log(scales2.getNameList());
console.log(scales2.getSumScale());
//# sourceMappingURL=app.js.map