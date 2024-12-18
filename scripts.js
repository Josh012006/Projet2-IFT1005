/*
Groupe 11
Membres du groupe:
Josué Mongan (20290870)
Kuza Twagiramungu (20317467)
*/





// Récupération des éléments importantes

const valeur = document.getElementById("valeur");
const cible = document.getElementById("unit");

const form = document.getElementById("calculateur");

const result = document.getElementById("result");


// Table de conversion

const table = {
    cm: 100,
    km: 0.001,
    pi: 3.28,
    po: 39.37,
}



// Gestion de l'input actif au clic

valeur.addEventListener("click", () => {   
    valeur.style.border = "1px solid #3A6D4A";
});

valeur.addEventListener("blur", () => {   
    valeur.style.border = "1px solid #5E6E85";
});


// Gestion de la soumission du formulaire et du calcul

form.addEventListener("submit", (event) => {
    event.preventDefault();

    entree = valeur.value;


    // Vérifications sur la valeur entrée

    if(entree === "" || ( Number(entree) !== 0 && ( !Number(entree) || Number(entree) < 0 ) )) {
        result.innerHTML = 'Erreur';

        result.style.fontSize = '64px';
    }

    else {

        resultat = entree * table[cible.value];

        // Arrondir s'il y a trop de chiffres après la virgule

        if(String(resultat).length > 8 && resultat !== Math.round(resultat)) {
            resultat = resultat.toFixed(4);
        }

        

        result.innerHTML = 
        `<p style="font-size: 16px;">Résultat</p>
        ${resultat}
        `

        result.style.fontSize = '64px';
    }

});
