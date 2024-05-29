"use strict";

// Crear los objetos
let listaPosts = [];
for(const postData of data) {
    listaPosts.push(new Post(
        postData.avatar,
        postData.titulo,
        postData.texto
    ));
}

// Rendering...
const tituloPrincipal = document.querySelector(".main-title");
const hoy = new Date();
tituloPrincipal.textContent = `Publica tu aprendizaje: ${hoy.getDate()}/${hoy.getMonth()+1}/${hoy.getFullYear()}`;

let accumulator = ""
for(const post of data){
  accumulator += post.render();
};

const section = document.querySelector("section");
section.innerHTML = accumulator;

// Invocar eventos aqui:
addPostMouseEvents();