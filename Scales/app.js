var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (_product) {
        this.products.push(_product);
    };
    Scales.prototype.getSumScale = function () {
        var scaleProducts = 0;
        for (var i = 0; i < this.products.length; i++) {
            //scaleProducts+=this.products[i].scale  
            scaleProducts += this.products[i].getScale();
        }
        return scaleProducts;
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        for (var i = 0; i < this.products.length; i++) {
            //nameList.push(this.products[i].name) 
            nameList.push(this.products[i].getName());
        }
        return nameList;
    };
    Scales.prototype.show = function () {
        console.log(this.products);
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Product.prototype.getName = function () {
        //console.log ('Название продукта= '+ this.name)
        return this.name;
    };
    Product.prototype.getScale = function () {
        // console.log ('Вес продукта= '+ this.scale)
        return this.scale;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tomato;
}(Product));
var apple1 = new Apple('яблоко1', 100);
var tomato1 = new Tomato('помидор1', 200);
var scales = new Scales;
scales.add(apple1);
scales.add(tomato1);
//scales.show();
//console.log(scales.products)
console.log(scales.getNameList());
console.log(scales.getSumScale());
//# sourceMappingURL=app.js.map