//componente padre de la aplicación

import api from "./helpers/wp_api.js" //importar los endpoints de a API
import { ajax } from "./helpers/ajax.js" // importar funcion para peticiones ajax
// import { Title } from "./components/Title.js";
import { Loader } from "./components/Loader.js";
import { Header } from "./components/Header.js";

export function App(){
 const d = document,
    $root = d.getElementById("root");
    $root.appendChild(Header());
    $root.appendChild(Loader());

    // ajax({
    //     url: "no-valid",
    //     cdSucces : () => {}
    // });
}

// export function App(){
//     document.getElementById("root").innerHTML = "<h1>Bienvenidos a mi primer SPA con Vanila JS</h1>";

//     console.log(api);

//     ajax({
//         url : api.POSTS,
//         cbSuccess : (posts) => {
//             console.log(posts);
//         }
//     });

//     ajax({
//         url : api.CATEGORIES,
//         cbSuccess : (category) => {
//             console.log(category);
//         }
//     });
// }

