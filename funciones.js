function abrirAlerta(){
  alert("Eror 407!");
  console.log(" ");
}

function login(){
    var mensaje = document.getElementById('mensaje');
    var usuario = document.getElementById('textUser');
    var contrasena = document.getElementById('textPass');

    console.log(usuario.value + " " + contrasena.value);

    if(usuario.value == "admin" && contrasena.value == "admin"){
        mensaje.innerHTML = "Usuario logueado";
        location.href = "pagina1.html";
    }else{
        mensaje.innerHTML = "Usuaio no logueado";
        location.href = "index.html";
    }

}