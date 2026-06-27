document.getElementById("BtnBuscar");

document.addEventListener("click", BuscarBoletas);

async function BuscarBoletas(){

    const Rut = document.getElementById("BuscarRut").value;
    const Fecha = document.getElementById("BuscarFecha").value;

    const Datos = {
        Rut: Rut,
        Fecha: Fecha
    };

    try{

        const Respuesta = await fetch("../includes/Boletas/Busqueda.php", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(Datos)
        });

        const Boletas = await Respuesta.json();
        const Tabla = document.getElementById("TablaBoletas");
        Tabla.innerHTML = "";

        Boletas.forEach(b => {Tabla.innerHTML += `
                <tr>
                    <td>${b.IdBoleta}</td>
                    <td>${b.Rut}</td>
                    <td>${b.NombreCliente}</td>
                    <td>${b.Ciudad}</td>
                    <td>${b.Fecha}</td>
                    <td>
                        <a class="BotonVer" href="VerBoleta.html?id=${b.IdBoleta}">Ver</a>
                        <a class="BotonEliminar" href="#" onclick="MostrarModal(${b.IdBoleta})"> Eliminar </a>
                    </td>
                </tr>
            `;
        });

    }
    catch(error){
        console.error(error);
    }
}