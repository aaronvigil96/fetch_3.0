//Variables
const url = 'https://randomuser.me/api/?results=10';
const ul = document.querySelector('#autores__ul');

//Cuando el DOM termine de cargar, ejecutame la funcion
window.addEventListener('DOMContentLoaded',() => {
    traerDatos()
})

//Funciones para crear y colocar etiquetas.
const createNode = element => document.createElement(element)
const append = (parent, el) => parent.appendChild(el)

//Trayendo y manipulando infomarcion desde una api.
const traerDatos = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let personas = data.results;
        personas.map(persona => {
            let li = createNode('li');
            let img = createNode('img');
            let span = createNode('span');
            
            img.src = persona.picture.medium;
            span.innerHTML = `${persona.name.first} ${persona.name.last}`
            append(li, img);
            append(li, span);
            append(ul, li);
        })
    })
    .catch(error => console.log(error))
}