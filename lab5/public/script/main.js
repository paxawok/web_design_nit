async function addSneakers(id, name, size, image_link){
    let sneaker = document.createElement('div');
    let sContainer = document.querySelector('.container')
    let sneakerdiv =`
        <h3 class="title">${id + 1}. ${name}</h3>
        <div class="content">
            <h4> Розмір: </h4>
            <p class="size">${size}</p>
        </div>
        <img src="${image_link}" alt="" class="image">`
    sneaker.innerHTML = sneakerdiv;
    sContainer.append(sneaker);
}

async function getSneakers() {
    const response = await fetch('http://localhost:3000/sneakers');
    const snkrsData = await response.json();
    snkrsData.forEach(element => {
      const {id, name, size, image_link} = element;
      addSneakers(id, name, size, image_link);
    });
  }

getSneakers();