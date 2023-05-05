// 1) Creer une fonction appelé squareNumber qui va prendre un parmetre qui sera un numero. Faites un console.log de ce numero au carré
/*
function returnsValue(){
    return "the value returned";
}

var smouk=returnsValue();
console.log("SEE SMOUK");
console.log(smouk);

function returnArr(){
    return ["Bilel","Mohamed","Lenny","Ethan"];
}

var getArr=returnArr();
console.log("GET RETURN ARR");
console.log(getArr);
*/

function getArrLength(arr){
    return arr.length;
}

var test1=getArrLength(["First","Second","Third"]);

function getIsArrLenGreaterThan5(arr){
    if(arr.length>5){
        return true
    }

    else{
        return false;
    }
}

function returnArrWithTypeFastFood(restaurants){
    var counter=0;
    for(var i=0;i<restaurants.length;i++){
        if(restaurants[i].type=="fast food"){
            counter++;
        }
  
    }

    return counter;
}

var test1=returnArrWithTypeFastFood([{type:"fast food",name:"Mcdo"},{type:"fast food",name:"Five Guys"},{type:"Health",name:"VeggieCorner"},{type:"fast food",name:"Quick"}]);

function returnHelloWorld(){
    return "hello world";
}

var testName=returnHelloWorld();


function showParam(name){
    console.log(name);
}

showParam("Jenny");
showParam("Amandine");




function squareNum(numero){
    console.log(numero*numero);
}
/*
squareNum(2);
squareNum(4);
squareNum(10);
*/

//2) Creer une fonction qui prendra en parametre une chaine de caracteres. Si la chaine de caracteres est superrieur a 10,ecrivez dans un console.log("la chaine est superieur a 10" et retrouner true,sinon ecrivez, "la chaine est inferieur a 10" et retourner false. Stockez la valeur retourner par cette fonction dans une variable et faites un console.log de la variable ) 

function takeStrLength(str){
    if(str.length>10){
        console.log("La chaine de caracteres est supperieur a 10");
        return true;
    }

    else{
        console.log("La chaine de caracteres est inferrieur a 10");
        return false;
    }
}
/*
var test1=takeStrLength("hello");
var test2=takeStrLength("une tres longue chaine de caracteres");
*/


//2)Creer une fonction appelé testStrLength qui prend un tableau comme parametre. Cette fonction testera si la longuer de la chaine stocké dans le tableau sera  supperieur a 5.  On va ensuite (avec la creation d'une variable), stocker le nombre de chaines de caracteres qui ont une longeur supperieur a 5 et on va devoir acceder a cette information en dehors de notre fonction. (Quand vous faites appel a la fonction, utilisez la variable stringArray que je viens de creer ci dessus)
var stringArray=["Pizza","Steak","Burger","oeuf mayo","Cantal","Emmental","Vin"];

function testStrLength(arr){
    var counter=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i].length>5){
            console.log("La condition est rempli");
            counter++;
        }
    }
    return counter;
}

var testStrLengthGreater5=testStrLength(stringArray);
console.log(testStrLengthGreater5);



// BONUS-------------------------------------------------

//3) Creer une fonction qui prendra comme parametre un numero. Si le numero est superieur a 25 retourner true, sinon retourner false. Dans UNE AUTRE fonction, trouver un moyen de generer un numero aleatoire entre 0 et 50 20 fois et a chaque fois, faites appel a la premeire fonction pour determiner si le numero est superiuer a 25 ou pas. Ensuite stocker le nombre d'occurences avec un nuemro supperieur a 25 dans une autre variable!

function genRandomNumber(){
     
}



// 4 (au lieu de repeter 20 fois, le nombre de fois a repeter sera encore un parametre ente 20 et 100!)

