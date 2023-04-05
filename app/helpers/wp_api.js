// archivo de consulta a la API de wordpress
//https://developer.wordpress.org/rest-api/

const NAME = "malvestida", //nombre del sitio
DOMAIN = `http://${NAME}.com`, // URL del sitio
SITE = `${DOMAIN}/wp-json`,
API_WP = `${SITE}/wp/v2`, //Ruta para acceder a toda la informacion del API del sitio
POSTS = `${API_WP}/posts?_embed`,//Endpoint para obtener los post
POST = `${API_WP}/posts`,//Endopoint para obtener Un post en particular
SEARCH = `${API_WP}/seacrh?_embed&search=`;//Endpoint para consulta de las busquedas

//Exportar objeto con las variables definidas
export default{
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    POSTS,
    POST,
    SEARCH
}