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