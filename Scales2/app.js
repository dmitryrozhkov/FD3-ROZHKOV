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
var Apple = /** @class */ (function () {
    function Apple(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Apple.prototype.getName = function () {
        //console.log ('Название продукта= '+ this.name)
        return this.name;
    };
    Apple.prototype.getScale = function () {
        // console.log ('Вес продукта= '+ this.scale)
        return this.scale;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Tomato.prototype.getName = function () {
        //console.log ('Название продукта= '+ this.name)
        return this.name;
    };
    Tomato.prototype.getScale = function () {
        // console.log ('Вес продукта= '+ this.scale)
        return this.scale;
    };
    return Tomato;
}());
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