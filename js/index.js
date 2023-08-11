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


const diploCards = document.getElementById("diploCards")
    diploCards.innerHTML += `

<div class="carrd">
    <img src="./img/unlam-logo.png" alt="">
    <div class="carrd-body">
        <h5 class="carrd-title">Tecnicatura en desarrollo web</h5>
        <p class="carrd-text">Unlam - 2023 - <span> En progreso </span> </p>
    </div>
</div>
    

<div class="carrd">
    <img src="./img/utn-logo.png" alt="">
    <div class="carrd-body">
        <h5 class="carrd-title">Diplomatura Desarrollo web Full-Stack</h5>
        <p class="carrd-text">UTN - 2023 - <span> En progreso </span> </p>
    </div>
</div>

<div class="carrd">

<div class="empujarlogo"> 
    <img src="./img/empujar-logo.png" alt="">
</div>
    <div class="carrd-body">
        <h5 class="carrd-title">Capacitacion</h5>
        <p class="carrd-text">Fundacion Empuar - 2023 - <span> En progreso </span></p>
    </div>
</div>
    `;
