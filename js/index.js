let spanish = document.getElementById("english");
let descripcion = document.getElementById("grisuli-bien-arriba");
let descripcion2 = document.getElementById("grisuli-arriba-arriba");
let descripcion3 = document.getElementById("grisuli-arriba");
let descripcion4 = document.getElementById("grisuli-arriba-arriba");
let descripcion5 = document.getElementById("grisuli");

let titulo2 = document.getElementById("herramienta");
let titulo4 = document.getElementById("titulo4");
let titulo3 = document.getElementById("proyecto");
let titulo5 = document.getElementById("titulo5");
let titulo6 = document.getElementById("contactos");
let header1 = document.getElementById("about");
let header2 = document.getElementById("proyectos");
let header3 = document.getElementById("contacto");
let header4 = document.getElementById("herramientas");

if (spanish.innerHTML=="Español") {
    spanish.onclick=()=>{
        spanish.innerHTML= "English";
        descripcion.innerHTML= "Hola, mi nombre es Milton Kienigiel";
        descripcion2.innerHTML= "Soy Desarrollador Web";
        descripcion3.innerHTML= "Interesad@ en trabajar juntos?";
        descripcion4.innerHTML= "Tengamos una charla!";
        descripcion5.innerHTML= "Contactame";

        titulo4.innerHTML = "En Proceso de aprendizaje"
        titulo2.innerHTML= "Habilidades";
        titulo3.innerHTML= "Proyectos";
        titulo5.innerHTML= "Plataforma de Musica"
        titulo6.innerHTML= "Contacto"
        header1.innerHTML= "Acerca de Mí"
        header2.innerHTML= "Proyectos"
        header3.innerHTML= "Contáctame"
        header4.innerHTML = "Habilidades"
    }
} else{
    spanish.onclick=()=>{
        spanish.innerHTML="Spanish";
        descripcion.innerHTML="Web Developer";
        titulo4.innerHTML = "In Process"
        titulo2.innerHTML="Mastered Skills";
        titulo3.innerHTML="Projects";
        titulo5.innerHTML="Music Platform"
    
    }
}
