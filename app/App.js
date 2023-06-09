//componente padre de la aplicación
import { Loader } from "./components/Loader.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";

export function App(){
    const $root = document.getElementById("root");

    $root.innerHTML = null;

    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());

    Router();
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

