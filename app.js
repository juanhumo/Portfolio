//---Función para cambiar color de la barra de nav según que sección se esté viendo ---//

window.addEventListener('scroll', function() {
    const navLinks = document.querySelectorAll('li a');
    const sections = document.querySelectorAll('body section');
    const currentSectionIndex = sections.length - [...sections].reverse().findIndex(section => window.scrollY >= section.offsetTop - 45) - 1;
  
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[currentSectionIndex].classList.add('active');
  });



//-------------------------- Barras de habilidades --------------------------//

function createBar(id_bar, num_bars){
    for(i=0; i<=num_bars; i++){
        let div = document.createElement("div");
        div.className = "fraction";
        id_bar.appendChild(div);
    }
}

let htmlSK = document.getElementById("html-skill");
let cssSK = document.getElementById("css-skill");
let javascriptSK = document.getElementById("javascript-skill");
let figmaSK = document.getElementById("figma-skill");
let gitSK = document.getElementById("git-skill");
createBar(htmlSK, 17);
createBar(cssSK, 17);
createBar(javascriptSK, 17);
createBar(figmaSK, 17);
createBar(gitSK, 17);


//-------------------------- Animación de las barras de habilidades --------------------------//

let skillLevels = [-1,-1,-1,-1,-1];          // arreglo con la cantidad de barras de c/skill
let aux  = false;

// Función para pintar barritas individuales en cada skill bar

function paintBar(id_bar, number, index, interval){
    skillLevels[index]++;
    x = skillLevels[index];
    if(x < number){
        let elements = id_bar.getElementsByClassName("fraction")
        elements[x].style.backgroundColor = "red";
    }
    else{
        clearInterval(interval);
    }
}


// Función que llama a pintar barra cuando se cumplen las condiciones de escroleo sobre la sección skills

function skillsEffect(){
    var skills = document.getElementById("skills");
    var skills_distance = window.innerHeight - skills.getBoundingClientRect().top;
    if(skills_distance >= 300 && aux == false){
        aux = true;
        const intervalHTML = setInterval(function(){
            paintBar(htmlSK, 17, 0, intervalHTML);
        }, 100);
        const intervalCSS = setInterval(function(){
            paintBar(cssSK, 16, 1, intervalCSS);
        }, 100);
        const intervalJAVASCRIPT = setInterval(function(){
            paintBar(javascriptSK, 12, 2, intervalJAVASCRIPT);
        }, 100);
        const intervalFIGMA = setInterval(function(){
            paintBar(figmaSK, 8, 3, intervalFIGMA);
        }, 100);
        const intervalGIT = setInterval(function(){
            paintBar(gitSK, 16, 4, intervalGIT);
        }, 100);
    }
}


// Aplico la función para aplicar los efectos al detectarse el escroleo del mouse

window.onscroll = function(){skillsEffect();}






