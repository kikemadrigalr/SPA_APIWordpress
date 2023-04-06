//componente padre de la aplicación

import api from "./helpers/wp_api.js" //importar los endpoints de a API
import { ajax } from "./helpers/ajax.js" // importar funcion para peticiones ajax

export function App(){
    document.getElementById("root").innerHTML = "<h1>Bienvenidos a mi primer SPA con Vanila JS</h1>";

    console.log(api);

    ajax({
        url : api.POSTS,
        cbSuccess : (posts) => {
            console.log(posts);
        }
    });

    ajax({
        url : api.CATEGORIES,
        cbSuccess : (category) => {
            console.log(category);
        }
    });
}

