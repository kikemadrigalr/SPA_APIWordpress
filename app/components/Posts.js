export function Posts(props){
    const $posts = document.createElement("section");
    $posts.id = "post";
    $posts.classList.add("grid-fluid");
    return $posts;
}