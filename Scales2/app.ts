interface IScalable {
    getName():string
    getScale():number
}

class Scales {    
    products:Array<IScalable>
    
    constructor () {
        this.products=[]
    }

    add(_product:IScalable) {
        this.products.push(_product)
    }

    getSumScale ():number {
        let scaleProducts:number=0;
        for (let i:number=0; i<this.products.length; i++) {
            //scaleProducts+=this.products[i].scale  
            scaleProducts+=this.products[i].getScale()          
        }   
        return scaleProducts     
    }

    getNameList () {
        let nameList:Array<string>=[];
        for (let i:number=0; i<this.products.length; i++) {
            //nameList.push(this.products[i].name) 
            nameList.push(this.products[i].getName())           
        }
        return nameList
    }

    show():void {
        console.log (this.products);
    }
}

class Apple implements IScalable {
    name:string;
    scale:number;

    constructor (_name:string, _scale:number) {
        this.name=_name;
        this.scale=_scale
    }

    getName ():string {
        //console.log ('Название продукта= '+ this.name)
        return this.name
    }

    getScale ():number {        
       // console.log ('Вес продукта= '+ this.scale)
       return this.scale
    }    
}

class Tomato implements IScalable {
    name:string;
    scale:number;

    constructor (_name:string, _scale:number) {
        this.name=_name;
        this.scale=_scale
    }

    getName ():string {
        //console.log ('Название продукта= '+ this.name)
        return this.name
    }

    getScale ():number {        
       // console.log ('Вес продукта= '+ this.scale)
       return this.scale
    }    
}


let apple1:Apple = new Apple('яблоко1', 100);
let tomato1:Tomato = new Tomato ('помидор1', 200)


let scales:Scales = new Scales;
scales.add(apple1);
scales.add (tomato1)
//scales.show();
//console.log(scales.products)
console.log(scales.getNameList())
console.log(scales.getSumScale())