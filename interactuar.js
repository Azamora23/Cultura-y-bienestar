//boton siguiente y obtener value
function pregunta1(){
    var nombre = document.getElementById("nombre").value
    localStorage.setItem("nombre", nombre);
    if (nombre.length >= 3){
        window.location.assign("index3.html")
    }
    else{
        Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: 'Ups debes ingresar tu nombre',
            confirmButtonColor: '#F26C5C',
        }) 
    }
}
function pregunta2(){
    window.location.assign("index4.html")
}
function pregunta3(){
    window.location.assign("index5.html")
}
function pregunta4(){
    window.location.assign("index6.html")
}
function pregunta5(){
    window.location.assign("index7.html")
}
function pregunta6(){
    window.location.assign("index8.html")
}

//alertas boton comprobar respuesta
function respuesta1(){
var radio = document.getElementsByName("answer")
var nombre = localStorage["nombre"]
var siguiente = document.getElementById("acceso")

for (var i = 0; i < radio.length; i++){
    if(radio[0].checked == true){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: nombre, 
            text: 'Tu respuesta es correcta',
            showConfirmButton: false,
            timer: 1500
          })
        siguiente.style.display = "block"  
        }
        else if(radio[1].checked == true) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: nombre,
                text: 'Tu respuesta es incorrecta, vuelve a intentarlo',
                showConfirmButton: false,
                timer: 1500
              })
        }
        else if(radio[2].checked == true) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: nombre,
                text: 'Tu respuesta es incorrecta, vuelve a intentarlo',
                showConfirmButton: false,
                timer: 1500
              })
        }
        else{
            Swal.fire({
                position: 'top-end',
                icon: 'info',
                title: nombre,
                text: 'Debes escoger una opci??n',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }
}
function respuesta2(){
var radio = document.getElementsByName("answer")
var nombre = localStorage["nombre"]
var siguiente = document.getElementById("acceso")
    
for (var i = 0; i < radio.length; i++){
    if(radio[2].checked == true){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: nombre, 
            text: 'Tu respuesta es correcta',
            showConfirmButton: false,
            timer: 1500
            })
        siguiente.style.display = "block"      
        }
        else if(radio[1].checked == true) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: nombre,
                text: 'Tu respuesta es incorrecta, vuelve a intentarlo',
                showConfirmButton: false,
                timer: 1500
              })
        }
        else if(radio[0].checked == true) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: nombre,
                text: 'Tu respuesta es incorrecta, vuelve a intentarlo',
                showConfirmButton: false,
                timer: 1500
              })
        }
        else{
            Swal.fire({
                position: 'top-end',
                icon: 'info',
                title: nombre,
                text: 'Debes escoger una opci??n',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }
}
//alerta finalizar
function gracias(){
var nombre = localStorage["nombre"]    
    Swal.fire({
        imageUrl: 'Imagen1.png',
        imageWidth: 200,
        title: nombre,
        text: '??Muchas gracias por tu participaci??n!',
        showConfirmButton: false,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
    })
var container = document.getElementById("containerPregunta6")
container.style.display = "none" 
var finalizar = document.getElementById("acceso")
finalizar.style.display = "block"   
}


