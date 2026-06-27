document.addEventListener("DOMContentLoaded", CargarBoleta);

async function CargarBoleta(){

    const Parametros = new URLSearchParams(window.location.search);

    const Id = Parametros.get("id");

    if(!Id){

        alert("No se especificó una boleta");

        return;

    }

    try{

        const Respuesta = await fetch(
            `../includes/Boletas/VerBoleta.php?id=${Id}`
        );

        const Boleta = await Respuesta.json();

        document.getElementById("IdBoleta").textContent = Boleta.IdBoleta;
        document.getElementById("Rut").textContent = Boleta.Rut;
        document.getElementById("Nombre").textContent = Boleta.NombreCliente;
        document.getElementById("Direccion").textContent = Boleta.Direccion;
        document.getElementById("Ciudad").textContent = Boleta.Ciudad;
        document.getElementById("Fecha").textContent = Boleta.Fecha;
        document.getElementById("Detalle").textContent = Boleta.Detalle;

        document.getElementById("Total").textContent =
            Number(Boleta.Total).toLocaleString(
                "es-CL",
                {
                    style:"currency",
                    currency:"CLP"
                }
            );

    }
    catch(error){

        console.error(error);

        alert("Error al cargar la boleta");

    }
}