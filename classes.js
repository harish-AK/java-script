class warner{
    constructor(name,role,power){//parameters defined on constructor and a method used to show the result 
        this.name=name;
        this.role=role;
        this.power=power;
    }
display(){
    return("name is "+this.name +"role is "+this.role+" power is "+this.power);
}
static gotham(prison){  //static no need to create object
    return prison;
}
}
class marvel extends warner{
    constructor(name,role,power,owner,founder){
        super(name,role,power);  // to work on parent class parameters
        
        this.owner=owner;  //this operator used to assign the values to the parameter
        this.founder=founder;
    }
}
var bat= new warner("bruse wayne ","batman"," rich");//class parent
console.log(bat);
console.log(warner.gotham("Arkham Asylum"));


//class child
var mar=new marvel("miles morales","spider man","spider web","sony","Stan Lee");
console.log(mar);    //print object alone is enough