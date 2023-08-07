//a) Faites en sorte de voir apparaitre dans la console la phrase suivante: "Ma premiere fonction se declenche!"
function myFirstFunction(){
    console.log("Ma toute premiere fonction se declenche!");
}


//1) Avec cette fonction, trouvez un moyen de stocker "hello world" dans une variable EN DEHORS de la fonction returnHelloWorld

function returnHelloWorld(){
    return "hello world";
}

//2) Avec cette fonction, trouvez un moyen de pouvoir acceder au contenu de arr EN DEHORS de la fonction returnArray

function returnArray(){
    var arr=["first","second","third","fourth","fifth"];
    
}

//3) Avec cette fonction, trouvez un moyen d'afficher 3 noms differents dans la console (chaque fois en faisant appel a la fonction). 

function showName(name){
    console.log(name)
}

//4) Avec cette fonction, trouvez un moyen  d'afficher chaque element d'un tableau de votre choix que vous allez preciser quand vous allez faire appel a la fonction

function showArrIndexes(arr){
    for(var i=0;i<arr.length;i++){
       
    }
}

//5) Avec cette fonction, trouvez un moyen de retourner le numero que vous allez passer lors de l'appel de la fonction multiplié par 2.Dans la fonction, stockez ce resultat dans une variable et trouver un moyen d'y acceder EN DEHORS de la fonction 

function multiplyNumByTwo(num){

}

//6 Avec cette fonction, trouvez un moyen de retourner true si notre tableau contient plus de 5 elements, false sinon. C'est a vous de choisir le tableau a passer lors que vous allez faire appel a la fonction

function checkArrLength(arr){

}

//7 Avec cette fonction, trouvez un moyen d'afficher le nombre de personnes qui sont de civilité homme. Retourner cette valeur dans la fonction et trouvez un moyen d'y acceder EN DEHORS de la fonction
    // utilisez le tableau que je vais donner ici: 
    var data=[{sex:"Male",name:"Jeremy"},{sex:"Female",name:"Amanda"},{sex:"Male",name:"Tom"},{sex:"Female",name:"Jenny"},{sex:"Male",name:"Aaron"}];

function showMaleSex(arrObj){

}

