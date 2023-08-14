var header = document.getElementById('Header')

window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY
    if(scroll>16){
        header.style.backgroundColor = '#121212'
        
        header.style.transition = '0.5s'
        
    }else{
        header.style.backgroundColor = 'transparent'
        header.style.width = '100%'
        header.style.marginLeft = '0px'
        header.style.transition = '0.5s'
        
    }
    
})

var planetas = document.getElementById('planetas')

window.addEventListener('click', ()=>{
    var click = window.click
}) 


const habCards = document.getElementById("habCards")
    habCards.innerHTML += `
    <div class="habilidad-card">
        <img src="./img/html.png" alt="html">
            <div class="habilidad-info">
                <p class="text-white text-center"> HTML </p>
            </div>
    </div>

    <div class="habilidad-card">
        <img src="./img/css.png" alt="html">
            <div class="habilidad-info">
                <p class="text-white text-center"> CSS </p>
            </div>
    </div>

    <div class="habilidad-card">
        <img src="./img/jslogo.png" alt="html">
            <div class="habilidad-info">
                <p class="text-white text-center"> Js </p>
            </div>
    </div>

    <div class="habilidad-card">
        <img src="./img/bootstrap.png" alt="html">
            <div class="habilidad-info">
                <p class="text-white text-center"> BOOTSTRAP </p>
            </div>
    </div>

    <div class="habilidad-card">
        <img src="./img/github.png" alt="html">
            <div class="habilidad-info">
                <p class="text-white text-center"> GITHUB </p>
            </div>
    </div>

    <div class="habilidad-card">
        <img src="./img/mongo.png" alt="html">
            <div class="habilidad-info">
                <p class="text-white text-center"> MONGODB </p>
            </div>
    </div>

    <div class="habilidad-card">
        <img src="./img/react.png" alt="html">
            <div class="habilidad-info">
                <p class="text-white text-center"> REACTJS </p>
            </div>
    </div>

    <div class="habilidad-card">
        <img src="./img/angular.png" alt="html">
            <div class="habilidad-info">
                <p class="text-white text-center"> ANGULAR </p>
            </div>
    </div>

    <div class="habilidad-card">
        <img src="./img/node.png" alt="html">
            <div class="habilidad-info">
                <p class="text-white text-center"> NODEJS </p>
            </div>
    </div>


    `

const proyectos = document.getElementById("proyectos")
    proyectos.innerHTML += `
    <div class="proyecto"><a target="_blank" href="https://spaceweb1.netlify.app"><img src="img/spaceweb.JPG" alt=""></a> <h2 class="text-white">SpaceWeb</h2> <p class="text-white">Pagina dedicada a el sistema solar y datos sobre cada planeta.</p></div>
    <div class="proyecto"><a target="_blank" href="https://codemusic1.netlify.app"><img src="img/code music.JPG" alt=""></a> <h2 class="text-white">CodeMusic</h2> <p class="text-white">Ecommerce de musica <span> (realizado en grupo) </span> como proyecto integrador.  </p></div>
    <div class="proyecto"><a target="_blank" href="https://canejoven.netlify.app"><img src="img/factum.JPG" alt=""></a> <h2 class="text-white">Factum</h2> <p class="text-white">Pagina creada para la muestra de arte 2022 del Instituto Miguel Cane.</p>
    
    
    </div>
    `;


const diploCards = document.getElementById("diploCards")
    diploCards.innerHTML += `

<div class="carrd">
    <img src="./img/unlam-logo.png" alt="">
    <div class="carrd-body">
        <h5 class="carrd-title">Tecnicatura en desarrollo web</h5>
        <p class="carrd-text">Unlam - 2023 - <span class="enProgreso"> En progreso </span> </p>
    </div>
</div>
    

<div class="carrd">
    <img src="./img/utn-logo.png" alt="">
    <div class="carrd-body">
        <h5 class="carrd-title">Diplomatura Desarrollo web Full-Stack</h5>
        <p class="carrd-text">UTN - 2023 - <span class="enProgreso"> En progreso </span> </p>
    </div>
</div>

<div class="carrd">
<div class="empujarlogo"> 
    <img src="./img/empujar-logo.png" alt="">
</div>
    <div class="carrd-body">
        <h5 class="carrd-title">Capacitacion laboral</h5>
        <p class="carrd-text">Fundacion Empujar - 2023 - <span class="enProgreso"> En progreso </span></p>
    </div>
</div>

<div class="carrd">
        <div class="aplogo">
            <img src="./img/approgramando.png" alt="">
        </div>
<div class="diploma">
<img src="./img/diploma1.jpg" onclick="expandirImagen(this)" class="imagen-expansible">
</div>
    <div class="carrd-body">
        <h5 class="carrd-title">Curso desarrollo web 1</h5>
        <p class="carrd-text">GOB CBA - 2022 - <span class="finalizado"> Finalizado </span> </p>
    </div>
</div>

<div class="carrd">
<div class="aplogo">
    <img src="./img/approgramando.png" alt="">
</div>

<div class="diploma">
<img src="./img/diploma2.jpg" onclick="expandirImagen(this)" class="imagen-expansible">
</div>
    <div class="carrd-body">
        <h5 class="carrd-title">Curso desarrollo web 2</h5>
        <p class="carrd-text">GOB CBA - 2022 - <span class="finalizado"> Finalizado </span> </p>
    </div>
</div>
    `;

    function expandirImagen(imagen) {
        imagen.classList.toggle("expandida");
    }