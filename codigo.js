
const contenedor=document.querySelector(".flex-container")
document.querySelector(".send-button").value="COMPRAR"
function crearLlave(nombre,modelo,precio){
    // contador++;
    img="<img id='llave-img'src='llave.png'>";
    nombre=`<h2>${nombre}</h2>`;
    modelo=`<h3>${modelo}</h3>`;
    precio=`<p>Precio: <b>$${precio}</b></p>`;
    return[img,nombre, modelo,precio]
}


const changeHidden=(number)=>{
    documentFragment.querySelector(".key-data").value=number
}

// let div=document.createElement("DIV")
// div.classList.add("flex-item")

let documentFragment=document.createDocumentFragment()
for (let i = 1; i <=20; i++) {

    let modeloRandom=Math.round(Math.random()*10000)
    let precioRandom=Math.round(Math.random()*10+30)
    let llave=crearLlave(`llave ${i}`,`modelo ${modeloRandom}`,precioRandom)
 
    let div=document.createElement("DIV")
   
   div.addEventListener("click",()=>{changeHidden(modeloRandom)})
    div.tabIndex=i;
    div.classList.add(`item-${i}`,`flex-item`)
    
    div.innerHTML= div.innerHTML = llave.join(" ")
  documentFragment.appendChild(div)
}
contenedor.appendChild(documentFragment)
