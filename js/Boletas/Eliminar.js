let IdEliminar = null; 
function MostrarModal(IdBoleta){

    IdEliminar = IdBoleta;
    document.getElementById("Overlay").style.display = "flex";
}

document.getElementById("CancelarEliminar").addEventListener("click", function(){

    document.getElementById("Overlay").style.display = "none";
}); 

document.getElementById("ConfirmarEliminar")
.addEventListener("click", async function(){

    try{

        const Respuesta = await fetch(
            "../includes/Boletas/EliminarBoleta.php",
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body: JSON.stringify({
                    IdBoleta: IdEliminar
                })
            }
        );

        const Resultado = await Respuesta.text();
        alert(Resultado);

        location.reload();
    }
    catch(error){

        console.error(error);

    }

});