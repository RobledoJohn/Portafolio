function validarForm(){
    //REcibir datos delinut del formulario
    let nombre=document.getElementById("nombre");
    let nombre1=nombre.value;

    let email=document.getElementById("email");
    let email1=email.value;

    let campoNumerico=document.getElementById("campoNumerico");
    let campoNumerico1=campoNumerico.value;
    
    //Validar que sea texto
    const uu=/^[a-zA-Z ]*$/;
    //Validar campo vacio
    if(nombre1.trim()==""){
        alert("Escriba en el campo nombre");
        nombre.focus();
        return false;
    }//Validar que sea texto
        else if(!nombre1.match(uu)){
            alert("Solo texto");
            nombre.focus();
            return false;
    }

    //Validar email
    let valEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!valEmail.test(email1)){
        alert("Correo invalido");
        email.value="";
        email.focus();
        return false;
    }

    //Valiar campo numerico
    if(isNaN(campoNumerico1)){
        alert("Digite numeros");
        campoNumerico.value="";
        campoNumerico.focus();
        return false;
    }

    //Validar PDF
    let campoArchivo=document.getElementById("campoArchivo");

    let archivo=campoArchivo.files[0];

    if(!archivo){
        alert("No subió archivo");
        return false;
    }

    let extension=archivo.name.split(".").pop().toLowerCase();

    if(extension!="pdf"){
        alert("No es PDF");
        return false;
    }

}