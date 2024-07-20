//ARRAY
var frutas = ["manzana","piña","mango"]
var frutas = JSON.parse (localStorage.getItem("frutas")) || []
var botonEliminar= document.getElementById("btnEliminar")
botonEliminar.addEventListener("click", ejFuncion)

//para devolver un elemento de una array
//hay que escribir el nombre del array y
//luego la posicion del elemento que quiero
//la posicion se empieza a contar desde 0

//console.log(frutas)
var numeros = ["1","2","3","4"]
//console.log(numeros)
//metodos
//.length para saber el tamaño de un array
//console.log(frutas.length)

//metodo push() nos permite añadir un elemento al final de un array 
//metodo pop() nos permite elemi9niar un elemnto al final de un array 

//.shift() eliminar el primer elemento de un array 
//.unshift() para agregar un elemento al inicio

//.splays(inicio, cantidad a eliminar, elemnto a a gregar, elemento a agregar2)
// inicio para indicar donde quiero iniciar a eliminar 
//cantidad  ccuantos elementos quiero eliminar 
//si le escribo 0 no eliminara ningun elemento 
//elemnto agragar1 para agregar algun elemnto 

var lista =document.getElementById("elementos")
    var texto =document.getElementById("hola")
function mostrarelementos (){
    
var elementos = "<ul>"
for ( let i= 0; i < frutas.length;i++)(
    elementos +="<li>" + frutas[i] +"</li>"
)
elementos+="<ul>"
lista.innerHTML = elementos
}
mostrarelementos()
function eliminarelemento (){
    frutas.shift()
    mostrarelementos()
    actualizarLocalStorage()
    texto.value = ""
}
function eliminare (){
    frutas.pop()
    mostrarelementos()
    actualizarLocalStorage()
    texto.value = ""
}
function agregarinicio (){
    frutas.unshift(texto.value)
    mostrarelementos()
    actualizarLocalStorage()
    texto.value = ""
}
function agregarfin (){
    frutas.push(texto.value)
    mostrarelementos()
    texto.value = ""
}

function eliminare(){
    frutas.pop(texto.value)
    mostrarelementos()
    actualizarLocalStorage()
    texto.value = ""
}

function actualizarLocalStorage(){
    localStorage.setItem("frutas", JSON.stringify(frutas))
}

function eliminareElementoespecifico(nombreDeLaFruta){
    const indice = frutas.indexOf(nombreDeLaFruta)
    if(indice > -1) {
        frutas.splice(indice, 1)
        actualizarLocalStorage()
       mostrarelementos()
        
        
     } else {
   alert()
     }
} 

function ejFuncion(){
    eliminareElementoespecifico(texto.value)
    texto.value = ""
}

