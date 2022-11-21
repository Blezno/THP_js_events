// Fonctionnalité nº1 : Lorsque l'utilisateur va cliquer sur le footer portant le tag footer, on affichera le mot 'clique' en console. 
// bonus : utiliser la méthode addEventListenner("click", function(){})

// Fonctionnalité nº1 bis : Upgrade de la première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer, la console va afficher

let foot = document.querySelector('footer');// définit une variable qui va aller chercher tout les tags footer
let count = 0;
foot.addEventListener("click", show); // utilisation du addEventListener qui va venir enclencher l'action click
    function show(){ //définit la fonction pour afficher en console le "clique"
        count++
        console.log("click number :" + count);
};

// Fonctionnalité nº2: Faire fonctionner le "Hamburger Menu".
//Hamburger Menu = Dropdown Menu;
//Le but est que si l'utilisateur va cliquer sur ce buton, 
//l'élément HTML portant l'id 'navbarHeader' perde sa classe collapse.

//Une fois que cela marche, il faut faire que si on clique à nouveau dessus, 
//la classe collapse soit rajoutée à nouveau 
//à l'élément portant l'id 'navbarHeader'.

// if visible is set remove it, otherwise add it

let navbar = document.getElementById("navbarHeader"); // vient récupérer l'élément dans le document qui a pour Id Navbarheader.
let navbarButton = document.getElementsByClassName("navbar-toggler"); // vient récupérer le bouton de la navbar par son nom de class
    navbarButton[0].addEventListener('click', () => { // doit indiquer quel bouton il faut checker pour l'action 
        navbar.classList.toggle("collapse");
        console.log("réussi?");
    })

// Fonctionnalité nº3: Si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible
// (sauf si on recharge la page)
// Indice : Commence par bien pointer sur la première card en entier 
//(stocke la dans une variable puis affiche la en console pour confirmer que tu l'as bien pointé)

// faut déjà récupérer la class du button
const editButton = document.getElementsByClassName("btn-outline-secondary");
const editText = document.getElementsByClassName("card-text");
 editButton[0].addEventListener('click', () =>{
    editText[0].style.color = "red"
 })

 editButton[1].addEventListener('click', () =>{ //Fonctionnalité nº4.
    if(editText[1].style.color === "green"){
        editText[1].style.color = 'black';
    }else{
        editText[1].style.color = 'green';
    }
 })

// Fonctionnalité nº5: 

const bootstrap = document.getElementsByTagName('link')[0];
const allNavbar = document.getElementsByTagName('header')[0];

allNavbar.addEventListener("dblclick", removeBootstrap);
 function removeBootstrap(){
    if (bootstrap.disabled === true){
        bootstrap.disabled = false
    }else {
        bootstrap.disabled = true
    }
 }

 // Fonctionnalité nº6 :
 const viewButton = document.getElementsByClassName('btn-success');

 viewButton[0].addEventListener("mouseover", slowCard);
    function slowCard(){
        viewButton.classList.toggle("editText");
    }
