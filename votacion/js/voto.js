function bienvenida(){
    alert("Bienvenido al sistem de votación, recuerde que el voto es secreto");
}

var votChes =0, votfl =0, votElao = 0, votLav = 0;

function votChesse(){
    votChes = votChes + 1;
    alert("votó por Chesse");
    
}

function votFlan(){
    votfl = votfl + 1;
    alert("votó por Flan");
}
function votHelado(){
    votElao = votElao + 1;
    alert("votó por Helado");
}

function votLava(){
    votLav = votLav + 1;
    alert("votó por LavaCake");
}

function votar(){
    totalVot = votChes + votfl + votElao + votLav;

    porcenChes = (votChes*100)/totalVot; 
    porcenFln = (votfl*100)/totalVot; 
    porcenElao = (votElao*100)/totalVot; 
    porcenLav = (votLav*100)/totalVot; 

     
    let respuesta = window.prompt("Ingrese la contraseña para iniciar (contraseña: votacion2023)");

    if(respuesta == "votacion2023"){
        resultados = document.getElementById("resultados");

        portChesse = document.getElementById("portChesse");
        portFln = document.getElementById("portFln");
        portHelado = document.getElementById("portHelado");
        portLava = document.getElementById("portLava");



        resultados.innerHTML ="<center>El total de resultados fueron:"+totalVot+"</center> "; 
        portChesse.innerHTML ="<center>El porcentaje de votos para chesse fueron:"+porcenChes+"%</center> ";   
        portFln.innerHTML ="<center>El porcentaje de votos para chesse fueron:"+porcenFln+"%</center> ";  
        portHelado.innerHTML ="<center>El porcentaje de votos para chesse fueron:"+porcenElao+"%</center> ";  
        portLava.innerHTML ="<center>El porcentaje de votos para chesse fueron:"+porcenLav+"%</center> ";  



    }else if(!(respuesta == "votacion2023")){
        alert("contraseña incorrecta...  ingrese contra correcta");
        return;
    }
}


