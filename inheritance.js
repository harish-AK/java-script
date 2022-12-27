const batman={
    butler:function(){
        return "Alfred pennyworth"
    },
    catwomen:function(name){
        this.name=name;
    }
};
var obj=Object.create(batman);
obj.name="salena Kyle";
obj.role="thief";
obj.changename="Bat Women";
console.log(obj);