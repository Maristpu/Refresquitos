function ingresar()
{

var usuario="damaris"
var contraseña="examen"; 

if (document.frmingreso.txtusuario.value==usuario &&
    document.frmingreso.txtcontraseña.value==contraseña)   
{
    document.location="inicioo.html"
}
else
{
    alert("ingrese usuario y contraseña correctamente")
}

}


