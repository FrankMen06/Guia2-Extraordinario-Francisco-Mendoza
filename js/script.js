function porcentaje(){

    chesse = document.getElementById("chesse").value;
    if(chesse == onclick){
        contaChesee++;
    }

    flan = document.getElementById("flan").value;
    if(flan == onclick){
        contaFlan++;
    }

    helado = document.getElementById("helado").value;
    if(helado == onclick){
        contaHelado++;
    }

    lavaCake = document.getElementById("lavaCake").value;
    if(lavaCake == onclick){
        contaLava++;
    }
    
   resultado = document.getElementById("resultado").value;

    total = contaChesee + contaFlan + contaHelado + contaLava;
    
    resultado.innerHTML = total;

}

function grande(){
    img = document.getElementById("cheese").value;
    img = "style{ width = '400px', heigh='400px'}"
}

function votar(){
    let respuesta = window.prompt("Ingrese la contraseña para iniciar (contraseña: votacion2023)");

    if(respuesta == "votacion2023"){
        window.location.href="../votacion/index.html";

    }else if(!(respuesta == "votacion2023")){
        alert("contraseña incorrecta...  ingrese contra correcta");
        return;
    }
    
    
}
