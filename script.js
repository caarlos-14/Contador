let hombres = 0;
let mujeres = 0;
let aforoMaximo = 300;
let aviso = document.getElementById("aviso");
let porcentaje = document.getElementById("porcentaje");


function actualizarContadores() {
    let total = hombres + mujeres;
    let porcentajeActual = (total/aforoMaximo) * 100;

    document.getElementById("hombresContador").textContent = hombres;
    document.getElementById("mujeresContador").textContent = mujeres;
    document.getElementById("contador").textContent = total;
    porcentaje.textContent = porcentajeActual.toFixed(0) + '%' + " Aforo actual";
    

    if (hombres + mujeres >= aforoMaximo){
        aviso.textContent = "El aforo está completo, no se permite la entrada"
        aviso.style.color = "red";
        aviso.style.background ="rgba(225, 94, 62, 0.4)";
        
    }else if(total >= 80){
        aviso.textContent = "El aforo esta llegando a su límite ";
        aviso.style.color = "yellow"; 
        aviso.style.background ="rgba(209, 227, 72, 0.4)";
        
    }else{
        aviso.textContent = "Aforo Permitido";
        aviso.style.color = "green";
        aviso.style.background ="rgba(88, 204, 100, 0.4)";
        

    }
        aviso.style.position = "relative";
        aviso.style.marginBottom ="1.5em";
        aviso.style.marginTop ="1.5em";
        aviso.style.marginLeft ="auto";
        aviso.style.marginRight ="auto";
        aviso.style.padding = "1em";
        aviso.style.width = "80%";
        aviso.style.borderRadius = "20px";
        aviso.style.fontSize = "1.2em";
        aviso.style.textAlign = "center";
        
}

document.getElementById("incrementHombresButton").addEventListener("click", () =>{
    if(hombres + mujeres < aforoMaximo){
        hombres++;
        actualizarContadores();
    }
})

document.getElementById("incrementMujeresButton").addEventListener("click", () =>{
    if(hombres + mujeres < aforoMaximo){
        mujeres++;
        actualizarContadores();
    }
})

document.getElementById("decrementMujeresButton").addEventListener("click", () =>{
    mujeres--;
    if(mujeres < 0){
        mujeres = 0;
    }
    actualizarContadores();
})

document.getElementById("decrementHombresButton").addEventListener("click", () =>{
    hombres--;
    if(hombres < 0){
        hombres = 0;
    }
    actualizarContadores();
})

document.getElementById("resetMujeresButton").addEventListener("click", () =>{
    mujeres = 0;
    actualizarContadores();
})

document.getElementById("resetHombresButton").addEventListener("click", () =>{
    hombres = 0;
    actualizarContadores();
})




let cambiarIcono = document.getElementById("icon-cambio");
let icono = document.getElementById("icon");
let body = document.body;
let header = document.querySelector(".header");

cambiarIcono.addEventListener("click", () => {
body.classList.toggle('claro');
header.classList.toggle('claro');

if(body.classList.contains('claro')){
icono.classList.remove("fa-regular","fa-moon");
icono.classList.add("fa-solid","fa-sun");
}else{
icono.classList.remove("fa-solid","fa-sun");
icono.classList.add("fa-regular","fa-moon");
}
})
