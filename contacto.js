function validacion()
{
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var celular = document.getElementById("celular").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var mensaje_error = document.getElementById("mensaje_error");

    var text;
    if(nombre.length < 3 || apellido.length < 3){
        mensaje_error.style.padding = "5px";
        text = "Introduzca un nombre válido";
        mensaje_error.innerHTML = text;
        return false;
    }

    if(isNaN(celular) || celular.length < 10){
        mensaje_error.style.padding = "5px";
        text = "Introduzca un celular válido";
        mensaje_error.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        mensaje_error.style.padding = "5px";
        text = "Introduzca un email válido";
        mensaje_error.innerHTML = text;
        return false;
    }

    alert("Formulario enviado correctamente!");
    return true;
}