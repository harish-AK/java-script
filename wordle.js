var height=6; //number of guess
var width=5;
var row=0;
var col=0;
var gameover=false;
var wordlist=['apple','mango','river','hyped','tokyo','title','ouija']
var guesslist=["apple",'mango','river','hyped','tokyo','title','ouija','carbo','proxy']

guesslist=guesslist.concat(wordlist);

var word=wordlist[Math.floor(Math.random()*wordlist.length)].toUpperCase();     // generate random words    
console.log(word);

window.onload=function(){
    initialize();

}
function initialize(){     // for the table 6 rows and 5 columns
    for(let r=0;r<height;r++)
    {
        for(let c=0;c<width;c++)
        {
            let tile=document.createElement("span");
            tile.id=r.toString()+"-"+c.toString()
            tile.classList.add("tile");
            tile.innerText=" "
            document.getElementById("board").appendChild(tile);
        }
    }

    //keyboard
    let keyboard=[["Q","W","E","R","T","Y","U","I","O","P"], ["A","S","D","F","G","H","J","K","L"," "],  ["ENTER","Z","X","C","V","B","N","N","M","back"]]
   for(let i=0;i<keyboard.length;i++)
   {
    let  currentrow=keyboard[i];
    let keyboardrow=document.createElement("div");
    keyboardrow.classList.add("keyboard-row");


    for(let j=0;j<currentrow.length;j++){
        let keytile=document.createElement("div");
        let key=currentrow[j];
        keytile.innerText=key;
        if(key=="ENTER"){
            keytile.id="ENTER";
        }
        else if(key=="back"){
            keytile.id="backspace"; 
        }
        else if("A"<=key&&key<="Z")
        {
            keytile.id="key"+key;
        }
        keytile.addEventListener("click",processkey);
        if(key=="ENTER"){
            keytile.classList.add("enter-key-tile");
        }
        else{
            keytile.classList.add("key-tile")
        }
        keyboardrow.appendChild(keytile);
    }
    document.body.appendChild(keyboardrow);
   }
   document.addEventListener("keyup",(e)=>{
    processinput(e); 
   })


function processkey(){
    e={"code":this.id};
    processinput(e);
}


function processinput(e){
    if(gameover) return;
    if('keyA'<=e.code&&e.code<='keyZ'){
        if(col<width){
            let currenttile=document.getElementById(row.toString()+"-"+col.toString())
            if(currenttile.innerText==" "){
                currenttile.innerText=e.code[3];
                col+=1;
            }

        }
    }

else if(e.code=="backspace"){
    if(0<col&&col<=width){
        col-=1
    }
    let currenttile=document.getElementById(row.toString()+'-'+col.toString());
    currenttile.innerText=" ";
}
else if(e.code=="ENTER"){
    update();
}
if(!gameover && row==height){
    gameover=true;
    document.getElementById("answer").innerText=word;
}
} 
function update(){
    let guess="";
    document.getElementById("answer").innerText="";
    
    for(let c=0;c<width;c++){
        let currenttile=document.getElementById(row.toString()+"-"+col.toString());
        let letter=currenttile.innerText;
        guess+=letter;
    }
    guess=guess.toLocaleLowerCase();
    console.log(guess);


    if(!guesslist.includes(guess)){
        document.getElementById("answer").innerText="not in word list";
        return;
    }
    let correct=0;
    let lettercount={};

    for(let i=0;i<word.length;i++){
        let letter=word[i];
        if(lettercount[letter]){
            lettercount[letter]+=1;
        }
        else{
            lettercount[letter]=1;
        }
    }
    console.log(lettercount);
    for(let c=0;c<width;c++){
        let currenttile=document.getElementById(row.toString()+"-"+col.toString());
        let letter=letter.innerText;

        if(word[c]==letter){
            currenttile.classList.add("correct");

            let keytile=document.getElementById("key"+letter);
            keytile.classList.remove("present");
            keytile.classList.add("correct");
            correct+=1;
            lettercount[letter]-=1;
        }
        if(correct==width){
            gameover=true;
        }
    }
    console.log(lettercount);

    for(let c=0;c<width;c++){
        let currenttile=document.getElementById(row.toString()+"-"+col.toString());
        let letter = currenttile.innerText;

        if(currenttile.classList.contains("correct")){
            if(word.includes(letter)&&lettercount[letter]>0){
                currenttile.classList.add("present");

                let keytile=document.getElementById("key"+letter);
                if(keytile.classList.contains("correct")){
                    keytile.classList.add("present");
                }
                lettercount[letter]-=1;
            }
            else{
                currenttile.classList.add("absent");
                let keytile=document.getElementById("key"+letter);
                keytile.classList.add("absent");

            }
        }
    }
    row+=1;
    col=0;
}}
