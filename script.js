let isIgnite = true;

function changeCard(event){
    const card = event.currentTarget;
    const backgroundImage = isIgnite 
    ? "url(./assets/bg-ignite.svg)"
    : "url(./assets/bg-explorer.svg)"
    isIgnite = !isIgnite

    card.style.backgroundImage = backgroundImage;
}