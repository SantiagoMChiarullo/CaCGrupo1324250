
fetch("https://rickandmortyapi.com/api/character/1")

.then(function(respuesta){

return respuesta.json();
})
.then(function(datos){
console.log(datos.name, datos.image, datos.origin.name);
})
.catch(function(error){
    console.error(error);
})


function pedirDatos(){
    fetch("https://rickandmortyapi.com/api/character")
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(personajes){
        
        const contenedor = document.getElementById("contenedor-tarjetas");

  
        personajes.results.forEach(function(dato){
      
            const article = document.createElement('article');
    
            article.classList.add("tarjeta");
   
            article.innerHTML = `
            <img src="${dato.image}" alt="Imagen del personaje ${dato.name}" class="card_img-size">
            <label>Nombre:</label>
            <p>${dato.name}</p>
            <div>
              <label>Estado:</label>
              <p><i class="fa-solid fa-circle ${dato.status.toLowerCase()}"></i>${dato.status}</p>
              <label>Planeta:</label>
              <p>${dato.location.name}</p>
            </div>
            `
     
            contenedor.appendChild(article);
        })

    })
    .catch(function(error){
        console.error(error);
    })
}


pedirDatos();



