const Restaurants=[
    {
        nom:"Chez  JJ",
        typeCuisine:"Francaise",
        image:"./image/chefjj.jpg"
    },
    {
        nom:"Le Village",
        typeCuisine:"Africaine",
        image:"./image/le vilage.jpg"
    },
    {
        nom:"Royal Berbere",
        typeCuisine:"Algérienne",
        image:"./image/royal berbere.jpg"
    },
    {
        nom:"Ty Louis",
        typecuisine:"Francaise, Traditionnelle Bourbone",
        image:"./image/tylouis.jpg"
    }
];

for(const rest of Restaurants){
    const restaur = document.getElementById('.restaurant');
    const image = document.createElement('img');
    const titre = document.createElement('h2');
    const desc = document.createElement('p');

    image.innerHTML=` <img src="&{rest.image}" alt="&{rest.nom}">` ;

    titre.textContent = rest.nom;
    desc.textContent = rest.typeCuisine;

    restaur.appendChild(image);
    restaur.appendChild(titre);
    restaur.appendChild(desc);

    document.querySelector('div.restaurant-grid');
}
