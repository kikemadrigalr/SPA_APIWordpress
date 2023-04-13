import api from "../helpers/wp_api.js"
import { ajax } from "../helpers/ajax.js"
import { PostCard } from "./PostCard.js";

export async function Router(){
    const d = document,
        w = window,
        $main = d.getElementById("main");

        let { hash } = location;
        console.log(hash);

        $main.innerHTML = null;

        if(!hash || hash === "#/"){
            // $main.innerHTML = "<h2>Sección Home</h2>";
            await ajax({
                url: api.POSTS,
                cbSuccess : (posts) => {
                    // console.log(posts);
                    let html = "";
                    posts.forEach(post => {
                        // console.log(post.lenght)
                        html += PostCard(post);
                        d.querySelector(".loader").style.display ="none";
                        $main.innerHTML = html;
                    });
                }
            });
        }else if(hash.includes("#/search")){
            $main.innerHTML = "<h2>Sección Buscador</h2>";
        }else if(hash === "#/contacto"){
            $main.innerHTML = "<h2>Sección Contacto</h2>";
        }else{
            $main.innerHTML = "<h2>Aqui cargara el contenido del Post seleccionado</h2>";
        }

    
};