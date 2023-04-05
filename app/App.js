//componente padre de la aplicación

import api from "./helpers/wp_api.js" //importar los endpoints de a API

export function App(){
    document.getElementById("root").innerHTML = "<h1>Bienvenidos a mi primer SPA con Vanila JS</h1>";
}

console.log(api);