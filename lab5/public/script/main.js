async function addSneakers(id, name, size, image_link){
    let sneaker = document.createElement('div');
    sneaker.className = 'box';
    let sContainer = document.querySelector('.container')
    let sneakerdiv =`
        <h3 class="title">${id}. ${name}</h3>
        <div class="content">
            <h4> Розмір: </h4>
            <p class="size">${size}</p>
        </div>
        <img src="${image_link}" alt="" class="image">`
    sneaker.innerHTML = sneakerdiv;
    sContainer.append(sneaker);
}

async function getSneakers(){
    fetch("http://localhost:3000/sneakers").then(
        (res)=>{
            return res.text()
        }
    ).then(
        (text)=>{
            let snkrsData = JSON.parse(text)
            snkrsData.array.forEach(element => {
                id = `${element.id}`
                nam = `${element.name}`
                size = `${element.size}`
                image_link = `${element.image_link}`

                addSneakers(id, nam, size, image_link)
            });
        }
    )
}

getSneakers();

const out = document.getElementById("output");

function buttonClick(){
    console.log("click")
}