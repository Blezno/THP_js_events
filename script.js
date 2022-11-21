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

