function Ingresar(){
    usuario=document.getElementById('usuario').value;
    var contrasena = document.getElementById('contrasena').value;

    if (contrasena==1234 && usuario=="admin") {

        event.preventDefault();
        Swal.fire("Usuario valido","Bienvenido","Success");

        
       return window.location.href='coord.html';    
    }
    else if (contrasena==4321 && usuario=="operador") {
        event.preventDefault();
        Swal.fire("Usuario valido","Bienvenido","Success");

        
       return window.location.href='Operador.html';    
        
    } 
   else
    {
        event.preventDefault();
        
         Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Usuario invalido',
       
      });}
    
}

// $('.frm_registro').submit(function(event)
// {
//     event.preventDefault();

   
// //definir variables
 
// var email="",password="",nombres="",direccion="";ciudad="",Tipo_Doc="",documento="", mensaje="",movil="",Tipo_Car="";

// documento=$('#documento').val();
// email=$('#email').val();
// password=$('#password').val();
// nombres=$('#nombres').val();
// direccion=$('#direccion').val();
// ciudad=$('#ciudad').val();
// Tipo_Doc=$('#Tipo_Doc').val();
// movil=$('#movil').val();
// Tipo_Car=$('#Tipo_Car').val();

// if (movil!="" && Tipo_Doc!="" && email!="" && documento!="" && password!="" && nombres!="" && direccion!="" && ciudad!="",Tipo_Car!="") {
    
//    Swal.fire("Registro exitoso","Continua","success");
    
// document.getElementById('Tipo_Doc').value="";
// document.getElementById('documento').value="";
// document.getElementById('nombres').value="";
// document.getElementById('password').value="";
// document.getElementById('direccion').value="";
// document.getElementById('email').value="";
// document.getElementById('ciudad').value="";
// document.getElementById('movil').value="";
// document.getElementById('Tipo_Car').value="";

// }else{
//     Swal.fire("Por favor ingrese todos los campos","Por favor verificar","error");
// }

// document.getElementById('mensaje_validacion').innerHTML=mensaje;

// });

function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";
    
    tecla_especial = false
    for (var i in especiales) {
    if (key == especiales[i]) {
    tecla_especial = true;
    break;
    }
    }
    
    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    document.getElementById('respuesta').innerHTML = "Solo se permiten letras";
    return false;
    } else {
    document.getElementById('respuesta').innerHTML = "";
    }
    }

    function soloNumeros(e) {
        key = e.keyCode || e.which;
        tecla = String.fromCharCode(key).toLowerCase();
        letras = " 12345678901234554575668514664211243";
        especiales = "8-37-39-46";
        
        tecla_especial = false
        for (var i in especiales) {
        if (key == especiales[i]) {
        tecla_especial = true;
        break;
        }
        }
        
        if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        document.getElementById('otro').innerHTML = "Solo se permiten numeros";
        return false;
        } else {
        document.getElementById('otro').innerHTML = "";
        }
        }
    

