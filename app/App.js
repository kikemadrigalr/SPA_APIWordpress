//componente padre de la aplicación

import api from "./helpers/wp_api.js" //importar los endpoints de a API
import { ajax } from "./helpers/ajax.js" // importar funcion para peticiones ajax
// import { Title } from "./components/Title.js";
import { Loader } from "./components/Loader.js";
import { Header } from "./components/Header.js";
import { Posts } from "./components/Posts.js";
import { PostCard } from "./components/PostCard.js";

export function App(){
 const d = document,
    $root = d.getElementById("root");
    $root.appendChild(Header());
    $root.appendChild(Posts());
    $root.appendChild(Loader());

    ajax({
        url: api.POSTS,
        cbSuccess : (posts) => {
            console.log(posts);
            let html = "";
            posts.forEach(post => {
                console.log(post.lenght)
                html += PostCard(post);
                d.querySelector(".loader").style.display ="none";
                d.getElementById("post").innerHTML = html;
            });
        }
    });
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

