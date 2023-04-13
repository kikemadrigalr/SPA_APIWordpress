//GEnera la invocaciond e todos los archivos
import { App } from "./App.js"

document.addEventListener("DOMContentLoaded", App);

//detectar el cambio en el hash del objeto location 
// para saber en que sección de la pagina se encuentra
window.addEventListener("hashchange", App);