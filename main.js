let counter = 0;
let value =    document.getElementById("value");
const deleteButton  = document.getElementById("delete-button");
const addButton = document.getElementById("add-button");
const startConteiner = document.getElementById("stars-conteiner");



const starComponent = ()=>{
    const startDiv = document.createElement("div");
    startDiv.innerHTML = `<div class="star">⭐</div>`;

    return startDiv;
};

deleteButton.addEventListener('click', ()=>{
    if(counter >= 0){
        startConteiner.removeChild(startConteiner.lastChild);
    };
    
    counter = counter - 1;
    value.innerHTML = counter;

});

addButton.addEventListener('click', ()=>{
    counter = counter + 1;
    value.innerHTML = counter;
    startConteiner.appendChild(starComponent())
});