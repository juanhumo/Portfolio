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
let bootstrapSK = document.getElementById("bootstrap-skill");
createBar(htmlSK, 17);
createBar(cssSK, 17);
createBar(javascriptSK, 17);
createBar(figmaSK, 17);
createBar(gitSK, 17);
createBar(bootstrapSK, 17);


//-------------------------- Animación de las barras de habilidades --------------------------//

let skillLevels = [-1,-1,-1,-1,-1,-1];          // arreglo con la cantidad de barras de c/skill
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
    if(skills_distance >= 500 && aux == false){
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
        const intervalBOOTSTRAP = setInterval(function(){
            paintBar(bootstrapSK, 7, 5, intervalBOOTSTRAP);
        }, 100);
    }
}


// Aplico la función para aplicar los efectos al detectarse el escroleo del mouse

window.onscroll = function(){skillsEffect();}




//------------ Función para mostrar el menú responsivo en menor resolución ------------//

function deployMenu(){
    var header = document.getElementById("header-content");
    if(header.className === ""){
        header.className = "header-responsive";
    }
        else {header.className = "";}       
}

//------------------- Función para mostrar los lenguajes disponible -------------------//

function showLang() {
    var flag = document.getElementById("flags");
    if (flag.style.display === "block") {
        flag.style.display = "none";
    } else {
        flag.style.display = "block";
        }
}


//--------------------- Función para mostrar e mail en el footer ----------------------//

function showMail() {
    var mailFooter = document.getElementById("mail-footer");
    if (mailFooter .style.display === "block") {
        mailFooter .style.display = "none";
    } else {
        mailFooter .style.display = "block";
        }
}


//------------------ Función que envía mail mediante formspree.io -------------------//

function sendMail(){
  
      var form = document.getElementById("my-form");
        
        async function handleSubmit(event) {
          event.preventDefault();
         
          var data = new FormData(event.target);
          fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {'Accept': 'application/json'}
          }).then(response => {
            if (response.ok) {form.reset()} 
          })
        }
       form.addEventListener("submit", handleSubmit);
}

//------------ Función que muestra un cartel luego de envíar el mensaje -------------//

function sendAndAlert(){

var nameValue = document.querySelector('input[name="name"]').value;
var mailValue = document.querySelector('input[name="email"]').value;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (nameValue === '' || mailValue === '') {
    alertText = 'Obligatory field missing';
    iconType = 'error';
  }

    else if (!emailRegex.test(mailValue)) {
        alertText = 'Invalid mail adress';
        iconType = 'error';
    }

    else{
        alertText = 'Message sent corretly';
        iconType = 'success';
        sendMail();
    }

Swal.fire({
    position: 'top-end',
    toast: true,
    icon: iconType,
    title: alertText,
    showConfirmButton: false,
    timer: 4000
});
}

