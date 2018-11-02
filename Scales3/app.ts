interface IStorageEngine {
    addItem (item:Product):void
    getItem (index:number):Product
    getCount():number
}

class Scales<StorageEngine extends IStorageEngine> {    
    
    engine

    constructor (engine:StorageEngine) {
        this.engine=engine
    }    

    getSumScale ():number {       
        let scaleProducts:number=0;
        for (let i:number=0; i<this.engine.getCount(); i++) {            
            scaleProducts+=this.engine.getItem(i).getScale()          
            }   
            return scaleProducts
    }

    getNameList () {        
        let nameList:Array<string>=[];
        for (let i:number=0; i<this.engine.getCount(); i++) {            
            nameList.push(this.engine.getItem(i).getName())           
        }
        return nameList
        
    }    
}

class ScalesStorageEngineArray implements IStorageEngine {

    products:Array<Product>
    
    constructor () {        
        this.products=[]
    }
    addItem (item:Product):void {      
        this.products.push(item)        
    }
   
    getItem(index:number):Product {
        return this.products[index];
    }

    getCount():number {
        let count: number=0;
        for (let i:number=0; i<this.products.length; i++) {            
            count++           
        }
        return count
    }    
}

class ScalesStorageEngineLocalStorage implements IStorageEngine {
        
    constructor () {
        localStorage.products=JSON.stringify([])
    }

    addItem (item:Product):void {  
        let items:Array<Product> = JSON.parse(localStorage.products)       
        items.push(item)         
        localStorage.products=JSON.stringify(items)              
    }

    // getItem(index:number):Product {
    //     let items:Array<Product> = JSON.parse(localStorage.products)        
    //     let p:any = items[index]        
    //     let pp:Product = new Product (p.name, p.scale)
    //     return pp;
    // }

    getItem(index:number):Product {
        let items:Array<Product> = JSON.parse(localStorage.products)        
        let p:any = items[index]        
        p.__proto__=Product.prototype
        return p;
    }

    getCount():number {
        let items:Array<Product> = JSON.parse(localStorage.products)
        let count: number=0;
        for (let i:number=0; i<items.length; i++) {            
            count++           
        }
        return count
    }    

}

class Product {   

    constructor ( private name:string, private scale:number) {}

    getName ():string {        
        return this.name
    }

    getScale ():number {       
       return this.scale
    }    
}


let apple1:Product = new Product('яблоко1', 100);
let tomato1:Product = new Product ('помидор1', 200);


let scalesStorageEngineArray1:ScalesStorageEngineArray = new ScalesStorageEngineArray
scalesStorageEngineArray1.addItem(apple1)
let scales1 = new Scales<ScalesStorageEngineArray>(scalesStorageEngineArray1);
console.log(scales1.getNameList())
console.log(scales1.getSumScale())

let scalesStorageEngineLocalStorage1:ScalesStorageEngineLocalStorage=new ScalesStorageEngineLocalStorage
scalesStorageEngineLocalStorage1.addItem(tomato1)
let scales2 = new Scales<ScalesStorageEngineLocalStorage>(scalesStorageEngineLocalStorage1);
console.log(scales2.getNameList())
console.log(scales2.getSumScale())
