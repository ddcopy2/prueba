let link = Array.from(document.getElementsByClassName('link'));
let imagen = document.getElementById('img');

function iniciar(){
    window.addEventListener('popstate', function (e) {
        cambiarImagen(e.state.x);
    });
    ejecutarFuncion();
    history.replaceState({ x: 'imagen1' }, null, './');
};

function cambiarImagen(id){
    link.forEach(function (e) {
        e.classList.toggle('selected', e.id == id);
    });
    imagen.src = id + '.jpg';
};

function ejecutarFuncion(){
    link.forEach(function (e) {
        e.addEventListener('click', function () {
            let id = e.id;
            history.pushState({ x: id }, null, id + '.html');
            cambiarImagen(id);
        });
    });
};

window.onload = function(){
    iniciar();
};