//Funcion que recibe la opcion de busqueda y el valor y busca en las recetas
const busquedaRecetas = (opcion, valor)=>{

fetch(`${urlApi}/recipes?page=0&limit=10&search_field=${opcion}&search_content=${valor}&search_order=desc`,{
    method: 'GET',
    redirect: 'follow'
})
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}