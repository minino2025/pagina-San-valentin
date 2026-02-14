const btnRegalo=document.getElementById("btnRegalo");
const formulario=document.getElementById("formulario");

btnRegalo.addEventListener("click", function () {
    formulario.style.display="block";
    imagenFinal.style.display="none";
});

const enter=document.getElementById("btnConfirmar");
const input=document.getElementById("nombreInput");
const mensaje=document.getElementById("mensaje");
const imagenFinal=document.getElementById("imagenFinal");

    enter.addEventListener("click", function () {
        console.log("CLICK CONFIRMADO");

        const nombre = input.value.trim().toLowerCase();
            
        btnRegalo.style.display="none";
        formulario.style.display="none";
        imagenFinal.style.display="block";

        setTimeout(function() {
            imagenFinal.style.transform = "scale(1)";
        }, 10);
        
        imagenFinal.style.opacity = "1";

        if(nombre=="yahir") {
            mensaje.textContent="Todavia que cumples años mañana y todavia queires otro de San valentin?";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/yahir.jpg";
        }

        else if(nombre=="zugey"){
            mensaje.textContent="Toma, los takis como lo pediste hace 1 mes, puedes cambiar el regalo por 100 Ale puntos";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/zugey.jpg";
        }

        else if(nombre=="cit"){
            mensaje.textContent="Tienes un Jorge ticket para una boda completamente gratis, si leiste bien, GRATIS";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/cit.jpg";
        }

        else if(nombre=="isa"){
            mensaje.textContent="Pense... quiere dinero... quiere libros.. que seria lo mejor? YA SE un libro de finanzas!";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/isa.jpg";
        }
        else if(nombre=="mix"){
            mensaje.textContent="BUENAAAS bien dice que ser paciente trae cosas buenas.. eso creo asi que toma la galleta que te debia (favor de no morder la pantalla)";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/mix.jpg";
        }

        else if(nombre=="jaqueline"){
            mensaje.textContent="Quieres regalo? PUES COMPRA!           bueno esta bien te doy emm unos takis";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/jaquee.jpg";
        }

        else if(nombre=="oscar"){
            mensaje.textContent="woopsi";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/oscar.jpg";
        }

        else if(nombre=="angel"){
            mensaje.textContent="Paleta :D";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/primos.png";
        }

        else if(nombre=="namid"){
            mensaje.textContent="Paleta :D";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/primos.png";
        }

        else if(nombre=="nailea"){
            mensaje.textContent="Paleta :D";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/primos.png";
        }

        else if(nombre=="julian"){
            mensaje.textContent="Paleta :D";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/primos.png";
        }

        else if(nombre=="micaela"){
            mensaje.textContent="Toma, feliz san valentin, te quiero 💕";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/mama.avif";
        }

        else if(nombre=="eva"){
            mensaje.textContent="Toma, feliz san valentin, te quiero 💕";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/eva.png";
        }

        else if(nombre=="lulu"){
            mensaje.textContent="Toma, feliz san valentin, te quiero 💕";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/lulu.webp";
        }

        else if(nombre=="lupita"){
            mensaje.textContent="Toma, feliz san valentin, te quiero 💕";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/pita.webp";
        }

        else if(nombre=="cony"){
            mensaje.textContent="Toma, feliz san valentin, te quiero 💕";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/cony.jpg";
        }

        else if(nombre=="jesus"){
            mensaje.textContent="Te regalo mi titulo como ingeniero industrial y te ahorras la universidad o eso diria si ya tuviera el mio";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/jesus.jpg";
        }

        else if(nombre=="johnatan"){
            mensaje.textContent="Paleta :D";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/primos.png";
        }

        else if(nombre=="abiram"){
            mensaje.textContent="Caunto dinero quieres de regalo?";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/abiram.jpg";
        }

        else if(nombre=="guillermo"){
            mensaje.textContent="Una almohadita para las noches";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/guillermo.jpg";
        }

        else if(nombre=="diego"){
            mensaje.textContent="JAAAAA";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/jesus.jpg";
        }

        else if(nombre=="mauricio"){
            mensaje.textContent="Paleta :D";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/primos.png";
        }
        else if(nombre=="tadeo"){
            mensaje.textContent="Paleta :D";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/primos.png";
        }

        else if(nombre=="hannya"){
            mensaje.textContent="Paleta :D";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/primos.png";
        }

        else if(nombre=="juliet"){
            mensaje.textContent="Paleta :D";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/primos.png";
        }

        else if(nombre=="fan"){
            mensaje.textContent="Windings: ✌︎❖︎♏︎♍︎♏︎⬧︎ ⬧︎♏︎ ♏︎⌧︎⧫︎❒︎♋︎⇧︎♋︎ ⧫︎◆︎ ◻︎♏︎❒︎⬧︎□︎■︎♋︎●︎♓︎♎︎♋︎♎︎";
            mensaje.style.opacity = "1";
        }

        else if(nombre=="daniela"){
            mensaje.textContent="Windings: ❄︎♓︎♏︎■︎♏︎⬧︎ ❍︎◆︎⍓︎ ♌︎□︎■︎♓︎⧫︎□︎⬧︎ □︎🙰□︎⬧︎📪︎ ♋︎◆︎■︎❑︎◆︎♏︎ 🙰♋︎❍︎♋︎⬧︎ ⧫︎♏︎ ●︎□︎ ♎︎♓︎🙰♏︎";
            mensaje.style.opacity = "1";
        }

        else {
            mensaje.textContent="Mmm... parece que no tienes regalo, no tengo regalo para ti, pero si envias mensaje talvez añada uno";
            mensaje.style.opacity = "1";
            imagenFinal.src="imagenes/general.jpg"
        }
    });