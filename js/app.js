const themeToggle = document.getElementById('theme-toggle')
const ballToggle = document.getElementById('ballToggle')
const body = document.querySelector('body')
var theme = 1;

themeToggle.addEventListener('click',()=>{
    theme++;
    switch(theme){
        case 2:
            body.classList.add('theme-2');  
            ballToggle.classList.add('theme-2Position') 
            break;
        case 3:
            body.classList.remove('theme-2');
            ballToggle.classList.remove('theme-2Position') 
            body.classList.add('theme-3');
            ballToggle.classList.add('theme-3Position') 
            break;
        case 4:
            theme = 1;
            body.classList.remove('theme-3');
            ballToggle.classList.remove('theme-3Position') 
            break;
    }
})